import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicPaths = ['/login', '/register', '/forgot-password']

export function middleware(request: NextRequest) {
	const token = request.cookies.get('token')?.value
	const { pathname } = request.nextUrl

	if (publicPaths.includes(pathname)) {
		if (token) {
			return NextResponse.redirect(new URL('/', request.url))
		}
		return NextResponse.next()
	}

	if (!token) {
		const url = new URL('/login', request.url)
		url.searchParams.set('from', pathname)
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}
