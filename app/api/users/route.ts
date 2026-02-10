import { NextResponse } from "next/server";
import {
  buildUsers,
  normalizeRange,
  normalizeUserType,
  simulateDelay,
} from "@/src/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = normalizeRange(searchParams.get("range"));
  const userType = normalizeUserType(searchParams.get("userType"));

  await simulateDelay();

  const data = buildUsers(range, userType);
  return NextResponse.json({ data });
}
