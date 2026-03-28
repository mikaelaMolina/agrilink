import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const buyerId = searchParams.get("buyerId");
  const farmId = searchParams.get("farmId");

  const where: Record<string, unknown> = {};

  if (buyerId) where.buyerId = buyerId;
  if (farmId) {
    where.items = { some: { product: { farmId } } };
  }

  const orders = await prisma.order.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      buyer: { select: { name: true, company: true } },
      items: {
        include: {
          product: { select: { name: true, farmId: true, farm: { select: { name: true } } } },
        },
      },
      shipment: true,
    },
  });

  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const order = await prisma.order.create({
    data: {
      buyerId: body.buyerId,
      total: body.total,
      notes: body.notes,
      items: {
        create: body.items.map((item: { productId: string; quantity: number; price: number; unit: string }) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          unit: item.unit,
        })),
      },
    },
    include: { items: { include: { product: true } }, buyer: true },
  });

  return NextResponse.json(order, { status: 201 });
}
