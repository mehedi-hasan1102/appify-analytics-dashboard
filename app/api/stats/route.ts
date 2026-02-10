import { NextResponse } from "next/server";
import {
  buildStats,
  normalizeRange,
  normalizeUserType,
  simulateDelay,
} from "@/src/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = normalizeRange(searchParams.get("range"));
  const userType = normalizeUserType(searchParams.get("userType"));

  await simulateDelay();

  if (searchParams.get("error") === "1") {
    return NextResponse.json({ message: "Simulated error" }, { status: 500 });
  }

  const data = buildStats(range, userType);
  return NextResponse.json({ data });
}
