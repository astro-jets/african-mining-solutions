import dbConnect from "@/utils/db";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const applications = await Application.find({ status: "pending" });

    return NextResponse.json(
      { success: true, applications },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error tu => ", error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
