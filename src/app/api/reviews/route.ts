import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const farmId = searchParams.get("farmId");

  const where: Record<string, unknown> = {};
  if (farmId) where.farmId = farmId;

  const reviews = await prisma.review.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, company: true } },
    },
  });

  return NextResponse.json(reviews);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const review = await prisma.review.create({
    data: {
      rating: body.rating,
      comment: body.comment,
      userId: body.userId,
      farmId: body.farmId,
    },
    include: { user: { select: { name: true, company: true } } },
  });

  // Update farm rating
  const stats = await prisma.review.aggregate({
    where: { farmId: body.farmId },
    _avg: { rating: true },
    _count: true,
  });

  await prisma.farm.update({
    where: { id: body.farmId },
    data: {
      rating: stats._avg.rating || 0,
      reviewCount: stats._count,
    },
  });

  return NextResponse.json(review, { status: 201 });
}
