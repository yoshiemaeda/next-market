import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    // const token = await request.headers.get("Authorization")?.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTcxMzY2MDY4MX0.2RGddGaBWTsXyakQEMbizSWi_bMqe0is1rGVVQB8s3E"
    if (!token) {
        return NextResponse.json({ message: "トークンがありません" })
    }
    try {
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodeJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    } catch (err) {
        return NextResponse.json({ message: "トークンが正しくないので、ログインしてください" })
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}