import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const organic = searchParams.get("organic");
  const search = searchParams.get("search");
  const sort = searchParams.get("sort") || "name";

  const where: Record<string, unknown> = { status: { not: "out_of_stock" } };

  if (category && category !== "All") {
    where.category = category;
  }
  if (organic === "true") {
    where.organic = true;
  }
  if (search) {
    where.OR = [
      { name: { contains: search } },
      { farm: { name: { contains: search } } },
    ];
  }

  let orderBy: Record<string, string> = { name: "asc" };
  if (sort === "price-low") orderBy = { price: "asc" };
  else if (sort === "price-high") orderBy = { price: "desc" };

  const products = await prisma.product.findMany({
    where,
    orderBy,
    include: {
      farm: { select: { name: true, location: true, rating: true, reviewCount: true } },
    },
  });

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      category: body.category,
      price: body.price,
      unit: body.unit,
      minOrder: body.minOrder,
      quantity: body.quantity,
      organic: body.organic || false,
      harvestDate: body.harvestDate ? new Date(body.harvestDate) : null,
      image: body.image,
      farmId: body.farmId,
    },
    include: { farm: true },
  });

  return NextResponse.json(product, { status: 201 });
}
