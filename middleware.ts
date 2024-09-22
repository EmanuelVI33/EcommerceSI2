import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/auth/login', '/auth/register'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;

  if (!token) {
    console.log('No tiene token')
    const loginUrl = new URL('/auth/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  console.log(`Si tiene token ${token}`)

  return NextResponse.next();
}

// Configuración del middleware para que se aplique a todas las rutas
export const config = {
  matcher: [
    '/auth/:path*',
    '/products/:path*',
    '/categories/:path*' 
  ],
};
