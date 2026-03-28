import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasourceUrl: "file:./prisma/dev.db",
});

async function main() {
  // Clean existing data
  await prisma.favorite.deleteMany();
  await prisma.review.deleteMany();
  await prisma.payout.deleteMany();
  await prisma.shipment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.farm.deleteMany();
  await prisma.user.deleteMany();

  // --- SUPPLIERS ---
  const supplier1 = await prisma.user.create({
    data: {
      email: "maria@sunrisevalley.com",
      name: "Maria Santos",
      role: "supplier",
      company: "Sunrise Valley Farm",
      phone: "+1-555-0101",
      farm: {
        create: {
          name: "Sunrise Valley Farm",
          location: "California, USA",
          country: "USA",
          description: "Family-owned organic vegetable farm since 1985.",
          practices: "Organic, Sustainable, Drip Irrigation",
          certifications: "USDA Organic, GlobalG.A.P.",
          verified: true,
          rating: 4.8,
          reviewCount: 42,
        },
      },
    },
    include: { farm: true },
  });

  const supplier2 = await prisma.user.create({
    data: {
      email: "raj@goldenfields.co",
      name: "Raj Patel",
      role: "supplier",
      company: "Golden Fields Co-op",
      phone: "+91-555-0202",
      farm: {
        create: {
          name: "Golden Fields Co-op",
          location: "Punjab, India",
          country: "India",
          description: "Cooperative of 120 rice farmers producing premium basmati.",
          practices: "Traditional, Fair Trade",
          certifications: "Fair Trade Certified",
          verified: true,
          rating: 4.9,
          reviewCount: 67,
        },
      },
    },
    include: { farm: true },
  });

  const supplier3 = await prisma.user.create({
    data: {
      email: "john@heritagepoultry.com",
      name: "John Mitchell",
      role: "supplier",
      company: "Heritage Poultry Ltd",
      phone: "+1-555-0303",
      farm: {
        create: {
          name: "Heritage Poultry Ltd",
          location: "Texas, USA",
          country: "USA",
          description: "Free-range poultry farm with humane practices.",
          practices: "Free-Range, Antibiotic-Free",
          certifications: "USDA Organic, Certified Humane",
          verified: true,
          rating: 4.7,
          reviewCount: 31,
        },
      },
    },
    include: { farm: true },
  });

  const supplier4 = await prisma.user.create({
    data: {
      email: "erik@nordicfish.no",
      name: "Erik Larsen",
      role: "supplier",
      company: "Nordic Fisheries",
      phone: "+47-555-0404",
      farm: {
        create: {
          name: "Nordic Fisheries",
          location: "Bergen, Norway",
          country: "Norway",
          description: "Sustainable Atlantic salmon and cod fishery.",
          practices: "Sustainable Fishing, Cold Water",
          certifications: "MSC Certified",
          verified: true,
          rating: 4.6,
          reviewCount: 28,
        },
      },
    },
    include: { farm: true },
  });

  const supplier5 = await prisma.user.create({
    data: {
      email: "lisa@mountainorchard.com",
      name: "Lisa Chen",
      role: "supplier",
      company: "Mountain Orchard Estate",
      phone: "+1-555-0505",
      farm: {
        create: {
          name: "Mountain Orchard Estate",
          location: "Washington, USA",
          country: "USA",
          description: "Premium apple and pear orchard at 2,000ft elevation.",
          practices: "Organic, Integrated Pest Management",
          certifications: "USDA Organic, Rainforest Alliance",
          verified: true,
          rating: 4.8,
          reviewCount: 55,
        },
      },
    },
    include: { farm: true },
  });

  const supplier6 = await prisma.user.create({
    data: {
      email: "tom@greenpastures.com",
      name: "Tom Anderson",
      role: "supplier",
      company: "Green Pastures Dairy",
      phone: "+1-555-0606",
      farm: {
        create: {
          name: "Green Pastures Dairy",
          location: "Wisconsin, USA",
          country: "USA",
          description: "Grass-fed dairy farm producing premium milk and cheese.",
          practices: "Grass-Fed, Pasture-Raised",
          certifications: "USDA Organic, Non-GMO Project",
          verified: true,
          rating: 4.9,
          reviewCount: 73,
        },
      },
    },
    include: { farm: true },
  });

  // --- PRODUCTS ---
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: "Organic Roma Tomatoes",
        description: "Vine-ripened Roma tomatoes, perfect for sauces and salads.",
        category: "Vegetables",
        price: 2.40,
        unit: "kg",
        minOrder: "500 kg",
        quantity: 2400,
        organic: true,
        harvestDate: new Date("2026-03-15"),
        image: "🍅",
        status: "active",
        farmId: supplier1.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Sweet Yellow Corn",
        description: "Fresh sweet corn, harvested at peak ripeness.",
        category: "Vegetables",
        price: 0.80,
        unit: "kg",
        minOrder: "1 ton",
        quantity: 5000,
        organic: false,
        harvestDate: new Date("2026-03-12"),
        image: "🌽",
        status: "active",
        farmId: supplier1.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Fresh Basil Bunches",
        description: "Aromatic Italian basil, hand-picked daily.",
        category: "Vegetables",
        price: 12.00,
        unit: "kg",
        minOrder: "50 kg",
        quantity: 300,
        organic: true,
        harvestDate: new Date("2026-03-20"),
        image: "🌿",
        status: "low_stock",
        farmId: supplier1.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Heirloom Carrots",
        description: "Multi-colored heirloom carrots, naturally sweet.",
        category: "Vegetables",
        price: 1.60,
        unit: "kg",
        minOrder: "300 kg",
        quantity: 1800,
        organic: true,
        harvestDate: new Date("2026-03-18"),
        image: "🥕",
        status: "active",
        farmId: supplier1.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Premium Basmati Rice",
        description: "Aged 2-year basmati rice with exceptional aroma.",
        category: "Grains",
        price: 1.80,
        unit: "kg",
        minOrder: "1 ton",
        quantity: 10000,
        organic: false,
        harvestDate: new Date("2026-02-28"),
        image: "🌾",
        status: "active",
        farmId: supplier2.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Free-Range Chicken Breast",
        description: "Boneless, skinless chicken breast from free-range birds.",
        category: "Meat",
        price: 6.50,
        unit: "kg",
        minOrder: "200 kg",
        quantity: 800,
        organic: true,
        harvestDate: new Date("2026-03-20"),
        image: "🍗",
        status: "active",
        farmId: supplier3.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Atlantic Salmon Fillet",
        description: "Fresh Atlantic salmon, sustainably caught.",
        category: "Seafood",
        price: 12.00,
        unit: "kg",
        minOrder: "100 kg",
        quantity: 500,
        organic: false,
        harvestDate: new Date("2026-03-18"),
        image: "🐟",
        status: "active",
        farmId: supplier4.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Organic Fuji Apples",
        description: "Crisp, sweet Fuji apples from high-altitude orchards.",
        category: "Fruits",
        price: 1.90,
        unit: "kg",
        minOrder: "300 kg",
        quantity: 3000,
        organic: true,
        harvestDate: new Date("2026-03-10"),
        image: "🍎",
        status: "active",
        farmId: supplier5.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Organic Blueberries",
        description: "Hand-picked organic blueberries, bursting with flavor.",
        category: "Fruits",
        price: 8.50,
        unit: "kg",
        minOrder: "50 kg",
        quantity: 400,
        organic: true,
        harvestDate: new Date("2026-03-19"),
        image: "🫐",
        status: "active",
        farmId: supplier5.farm!.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Fresh Whole Milk",
        description: "Grass-fed whole milk, pasteurized and unhomogenized.",
        category: "Dairy",
        price: 0.95,
        unit: "liter",
        minOrder: "500 liters",
        quantity: 5000,
        organic: true,
        harvestDate: new Date("2026-03-22"),
        image: "🥛",
        status: "active",
        farmId: supplier6.farm!.id,
      },
    }),
  ]);

  // --- BUYERS ---
  const buyer1 = await prisma.user.create({
    data: {
      email: "sarah@freshmart.com",
      name: "Sarah Chen",
      role: "buyer",
      company: "FreshMart Groceries",
      phone: "+1-555-1001",
    },
  });

  const buyer2 = await prisma.user.create({
    data: {
      email: "marco@chefstable.com",
      name: "Marco Rossi",
      role: "buyer",
      company: "Chef's Table Restaurant",
      phone: "+1-555-1002",
    },
  });

  const buyer3 = await prisma.user.create({
    data: {
      email: "amy@greenleaf.com",
      name: "Amy Johnson",
      role: "buyer",
      company: "GreenLeaf Wholesale",
      phone: "+1-555-1003",
    },
  });

  // --- ORDERS ---
  const order1 = await prisma.order.create({
    data: {
      status: "processing",
      total: 1200,
      buyerId: buyer1.id,
      items: {
        create: {
          quantity: 500,
          price: 2.40,
          unit: "kg",
          productId: products[0].id, // Roma Tomatoes
        },
      },
      shipment: {
        create: {
          carrier: "AgriFreight Express",
          origin: "Sunrise Valley Farm, CA",
          destination: "FreshMart Warehouse, NY",
          status: "in_transit",
          progress: 65,
          eta: new Date("2026-03-28"),
        },
      },
    },
  });

  const order2 = await prisma.order.create({
    data: {
      status: "shipped",
      total: 320,
      buyerId: buyer2.id,
      items: {
        create: [
          { quantity: 20, price: 12.00, unit: "kg", productId: products[2].id },
          { quantity: 50, price: 1.60, unit: "kg", productId: products[3].id },
        ],
      },
    },
  });

  const order3 = await prisma.order.create({
    data: {
      status: "delivered",
      total: 1600,
      buyerId: buyer3.id,
      items: {
        create: {
          quantity: 2000,
          price: 0.80,
          unit: "kg",
          productId: products[1].id, // Sweet Corn
        },
      },
    },
  });

  const order4 = await prisma.order.create({
    data: {
      status: "processing",
      total: 3600,
      buyerId: buyer1.id,
      items: {
        create: {
          quantity: 2000,
          price: 1.80,
          unit: "kg",
          productId: products[4].id, // Basmati Rice
        },
      },
      shipment: {
        create: {
          carrier: "Global Agri Logistics",
          origin: "Golden Fields Co-op, Punjab",
          destination: "FreshMart Warehouse, NY",
          status: "preparing",
          progress: 15,
          eta: new Date("2026-04-01"),
        },
      },
    },
  });

  const order5 = await prisma.order.create({
    data: {
      status: "delivered",
      total: 950,
      buyerId: buyer1.id,
      items: {
        create: {
          quantity: 1000,
          price: 0.95,
          unit: "liter",
          productId: products[9].id, // Whole Milk
        },
      },
    },
  });

  // --- REVIEWS ---
  await prisma.review.createMany({
    data: [
      { rating: 5, comment: "Exceptional quality tomatoes. Will order again.", userId: buyer1.id, farmId: supplier1.farm!.id },
      { rating: 5, comment: "Best basmati rice we've sourced. Our customers love it.", userId: buyer1.id, farmId: supplier2.farm!.id },
      { rating: 4, comment: "Great basil, very aromatic. Delivery was a day late.", userId: buyer2.id, farmId: supplier1.farm!.id },
      { rating: 5, comment: "Reliable supplier, consistent quality every time.", userId: buyer3.id, farmId: supplier1.farm!.id },
      { rating: 5, comment: "The milk quality is outstanding. Grass-fed makes a difference.", userId: buyer1.id, farmId: supplier6.farm!.id },
    ],
  });

  // --- FAVORITES ---
  await prisma.favorite.createMany({
    data: [
      { userId: buyer1.id, farmId: supplier1.farm!.id },
      { userId: buyer1.id, farmId: supplier2.farm!.id },
      { userId: buyer1.id, farmId: supplier6.farm!.id },
      { userId: buyer1.id, farmId: supplier5.farm!.id },
      { userId: buyer2.id, farmId: supplier1.farm!.id },
    ],
  });

  // --- PAYOUTS ---
  await prisma.payout.createMany({
    data: [
      { amount: 5200, method: "bank_transfer", status: "completed", farmId: supplier1.farm!.id, createdAt: new Date("2026-03-15") },
      { amount: 7340, method: "bank_transfer", status: "completed", farmId: supplier1.farm!.id, createdAt: new Date("2026-03-01") },
      { amount: 4100, method: "bank_transfer", status: "completed", farmId: supplier1.farm!.id, createdAt: new Date("2026-02-15") },
      { amount: 3600, method: "bank_transfer", status: "pending", farmId: supplier2.farm!.id, createdAt: new Date("2026-03-25") },
    ],
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
