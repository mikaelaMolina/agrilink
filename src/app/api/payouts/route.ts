import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const farmId = searchParams.get("farmId");

  const where: Record<string, unknown> = {};
  if (farmId) where.farmId = farmId;

  const payouts = await prisma.payout.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(payouts);
}
