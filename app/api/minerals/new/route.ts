import dbConnect from "@/utils/db";
import Mineral from "@/models/Mineral";
import { NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
  // Add a new deposit
  await dbConnect();
  try {
    const data = await req.formData();
    const name = data.get("name") as unknown as String;
    const country = data.get("country") as unknown as String;
    const description = data.get("description") as unknown as String;
    const file = data.get("file") as unknown as File;
    const lat = data.get("lat") as unknown as String;
    const long = data.get("long") as unknown as String;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const pathToPublic = join(process.cwd(), "public", "uploads", "minerals");
    const path = join(pathToPublic, file.name);
    await writeFile(path, buffer);

    console.log(`Open ${path} to view image`);

    const newMineral = new Mineral({
      name,
      country,
      description,
      coordinates: [lat, long],
      image: file.name,
    });

    const deposit = await newMineral.save();

    if (!deposit) {
      return NextResponse.json({
        status: true,
        message: `The deposit wasnt saved!`,
      });
    }
    return NextResponse.json(
      {
        status: true,
        message: `The deposit was successfully saved!`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      {
        status: true,
        message: error,
      },
      { status: 500 }
    );
  }
}
