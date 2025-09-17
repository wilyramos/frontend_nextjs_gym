
// File: frontend/app/api/reports/route.ts

import getToken from "@/src/auth/token";
import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {

    console.log("Received request for /api/reports");
}
