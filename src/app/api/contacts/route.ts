import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

type ContactMessage = {
	_id?: any;
	name?: string;
	company?: string;
	email: string;
	phone?: string;
	message: string;
	createdAt: string;
};

// Local JSON fallback when MONGODB_URI is not set
const dataDir = path.join(os.tmpdir(), "iconic-app-data");
const dataFile = path.join(dataDir, "contacts.json");
async function ensureStore() {
	await fs.mkdir(dataDir, { recursive: true }).catch(() => {});
	await fs.access(dataFile).catch(async () => {
		await fs.writeFile(dataFile, JSON.stringify([]), "utf8");
	});
}
async function readAllLocal(): Promise<ContactMessage[]> {
	await ensureStore();
	const raw = await fs.readFile(dataFile, "utf8").catch(() => "[]");
	try {
		return JSON.parse(raw) as ContactMessage[];
	} catch {
		return [];
	}
}
async function appendLocal(doc: ContactMessage) {
	const all = await readAllLocal();
	(all as any).push(doc);
	await fs.writeFile(dataFile, JSON.stringify(all, null, 2), "utf8");
}

// Ensure Node.js runtime and no caching for dynamic API
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
	try {
		if (!process.env.MONGODB_URI) {
			const items = await readAllLocal();
			items.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
			const normalized = items.map((doc, index) => {
				const id = String((doc as any)._id || (doc as any).id || doc.createdAt || index);
				const { _id, ...rest } = doc as any;
				return { id, ...rest };
			});
			return NextResponse.json({ success: true, data: normalized });
		}
		const db = await getDb();
		const items = (await db
			.collection<ContactMessage>("contacts")
			.find({})
			.sort({ createdAt: -1 })
			.toArray()) as any[];
		const normalized = items.map((doc, index) => {
			const id = String(doc._id || doc.id || doc.createdAt || index);
			const { _id, ...rest } = doc;
			return { id, ...rest } as any;
		});
		return NextResponse.json({ success: true, data: normalized });
	} catch (e: any) {
		console.error("/api/contacts GET error:", e);
		return NextResponse.json(
			{ success: false, message: e?.message || "Failed to load contacts" },
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, company, email, phone, message } = body || {};
		if (!email || !message) {
			return NextResponse.json(
				{ success: false, message: "email and message are required" },
				{ status: 400 }
			);
		}
		const doc: ContactMessage = {
			name,
			company,
			email,
			phone,
			message,
			createdAt: new Date().toISOString(),
		};
		if (!process.env.MONGODB_URI) {
			await appendLocal(doc);
			const saved: any = { id: doc.createdAt, ...doc };
			return NextResponse.json({ success: true, data: saved }, { status: 201 });
		}
		const db = await getDb();
		const result = await db.collection<ContactMessage>("contacts").insertOne(doc as any);
		const saved = { id: String(result.insertedId), ...doc } as any;
		return NextResponse.json({ success: true, data: saved }, { status: 201 });
	} catch (error: any) {
		console.error("/api/contacts POST error:", error);
		const msg = error?.message || "Failed to save message";
		return NextResponse.json(
			{ success: false, message: msg },
			{ status: 500 }
		);
	}
}


