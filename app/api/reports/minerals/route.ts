import Mineral from "@/models/Mineral";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const gold = await Mineral.countDocuments({ name: "Gold" });
    const diamonds = await Mineral.countDocuments({ name: "Diamonds" });
    const uranium = await Mineral.countDocuments({ name: "Uranium" });
    const coal = await Mineral.countDocuments({ name: "Coal" });

    const minerals = {
      gold,
      uranium,
      coal,
      diamonds,
    };

    return NextResponse.json({ minerals }, { status: 201 });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: `Error fetching User ${error}`,
    });
  }
}
