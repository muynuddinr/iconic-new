import { NextResponse } from 'next/server'
import { AUTH_COOKIE, signAdminToken } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const payload = await request.json().catch(() => ({} as any))
    const rawUsername = String(payload?.username || '')
    const rawPassword = String(payload?.password || '')
    const username = rawUsername.trim()
    const password = rawPassword.trim()

    const adminUsername = String(process.env.ADMIN_USERNAME || 'admin').trim()
    const adminPassword = String(process.env.ADMIN_PASSWORD || 'admin123').trim()

    if (username !== adminUsername || password !== adminPassword) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }

    const token = await signAdminToken({ user: username, role: 'admin' })
    const res = NextResponse.json({ success: true })
    res.cookies.set(AUTH_COOKIE, token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e?.message || 'Login failed' }, { status: 400 })
  }
}


