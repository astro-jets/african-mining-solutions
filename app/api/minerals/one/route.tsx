import dbConnect from "@/utils/db";
import Mineral from "@/models/Mineral";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    try {
        const mineral = await Mineral.findById(id);


        return NextResponse.json({ success: true, mineral }, {
            status: 200,
        });
    } catch (error) {
        console.log("error tu => ", error)
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}