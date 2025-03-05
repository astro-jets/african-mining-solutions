import dbConnect from "@/utils/db";
import Mineral from "@/models/Mineral";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const minerals = await Mineral.find({});

    return NextResponse.json(
      { success: true, minerals },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error tu => ", error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
