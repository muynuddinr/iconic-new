

import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		success: true,
		message: "Admin backend is live",
		version: 1,
		timestamp: new Date().toISOString(),
	});
}

export async function POST(request: Request) {
	try {
		const body = await request.json().catch(() => ({}));
		return NextResponse.json({
			success: true,
			message: "Received payload",
			data: body,
		});
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				message: "Invalid JSON payload",
			},
			{ status: 400 }
		);
	}
}

export async function OPTIONS() {
	return new NextResponse(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}


