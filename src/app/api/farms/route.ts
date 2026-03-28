import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const verified = searchParams.get("verified");

  const where: Record<string, unknown> = {};
  if (verified === "true") where.verified = true;

  const farms = await prisma.farm.findMany({
    where,
    orderBy: { rating: "desc" },
    include: {
      owner: { select: { name: true, email: true } },
      products: { select: { id: true, name: true, category: true, price: true, unit: true, organic: true, status: true } },
      _count: { select: { reviews: true, favorites: true } },
    },
  });

  return NextResponse.json(farms);
}
