export const AUTH_COOKIE = 'admin_token'

import { SignJWT, jwtVerify } from 'jose'

const secret = (process.env.AUTH_SECRET || process.env.JWT_SECRET || 'dev_secret_change_me') as string
const encoder = new TextEncoder()

export type AdminTokenPayload = {
	user: string
	role: 'admin'
}

export async function signAdminToken(payload: AdminTokenPayload, expiresIn = '7d') {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime(expiresIn)
		.sign(encoder.encode(secret))
}

export async function verifyAdminToken(token: string) {
	const { payload } = await jwtVerify(token, encoder.encode(secret))
	return payload as unknown as AdminTokenPayload
}
