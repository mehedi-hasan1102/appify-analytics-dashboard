import { NextResponse } from "next/server";
import { buildTraffic, normalizeRange, simulateDelay } from "@/src/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = normalizeRange(searchParams.get("range"));

  await simulateDelay();

  const data = buildTraffic(range);
  return NextResponse.json({ data });
}
