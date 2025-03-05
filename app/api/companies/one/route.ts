import dbConnect from "@/utils/db";
import Company from "@/models/Company";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    const company = await Company.findById(id);

    return NextResponse.json(
      { success: true, company },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error tu => ", error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
