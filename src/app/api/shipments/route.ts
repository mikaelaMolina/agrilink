import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const buyerId = searchParams.get("buyerId");

  const where: Record<string, unknown> = {};
  if (buyerId) {
    where.order = { buyerId };
  }

  const shipments = await prisma.shipment.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      order: {
        select: {
          id: true,
          total: true,
          buyer: { select: { name: true, company: true } },
          items: { include: { product: { select: { name: true, farm: { select: { name: true } } } } } },
        },
      },
    },
  });

  return NextResponse.json(shipments);
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();

  const shipment = await prisma.shipment.update({
    where: { id: body.id },
    data: {
      status: body.status,
      progress: body.progress,
    },
  });

  return NextResponse.json(shipment);
}
