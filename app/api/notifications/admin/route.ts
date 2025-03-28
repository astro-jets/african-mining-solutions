// pages/api/ClientStats.ts//
import Notification from "@/models/Notification";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const notifications = await Notification.find({
      for: "admin",
      status: "unread",
    });

    return NextResponse.json({ notifications }, { status: 201 });
  } catch (error) {
    console.log("Zakanika no expiry => ", error);
    return NextResponse.json({
      status: false,
      message: `Error fetching User ${error}`,
    });
  }
}
