import dbConnect from "@/utils/db";
import Deposit from "@/models/Deposit";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const deposits = await Deposit.find({});


        return NextResponse.json({ success: true, deposits }, {
            status: 200,
        });
    } catch (error) {
        console.log("error tu => ", error)
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}