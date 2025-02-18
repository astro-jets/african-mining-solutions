import dbConnect from "@/utils/db";
import Deposit from "@/models/Deposit";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const tracks = await Deposit.find({});


        return NextResponse.json({ success: true, data: tracks }, {
            status: 200, headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
                Pragma: "no-cache",
                Expires: "0",
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("error tu => ", error)
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}