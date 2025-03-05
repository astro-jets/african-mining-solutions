import dbConnect from "@/utils/db";
import Company from "@/models/Company";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const companies = await Company.find({});

    return NextResponse.json(
      { success: true, companies },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error tu => ", error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
