import dbConnect from "@/utils/db";
import Company from "@/models/Company";
import { NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
  // Add a new company
  await dbConnect();
  try {
    const data = await req.formData();
    const name = data.get("name") as unknown as String;
    const phone = data.get("phone") as unknown as String;
    const email = data.get("email") as unknown as String;
    const country = data.get("country") as unknown as String;
    const description = data.get("description") as unknown as String;
    const file = data.get("file") as unknown as File;
    const lat = data.get("lat") as unknown as String;
    const long = data.get("long") as unknown as String;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const pathToPublic = join(process.cwd(), "public", "uploads", "companies");
    const path = join(pathToPublic, file.name);
    await writeFile(path, buffer);

    console.log(`Open ${path} to view image`);

    const newCompany = new Company({
      name,
      phone,
      email,
      country,
      description,
      coordinates: [lat, long],
      image: file.name,
    });

    const company = await newCompany.save();

    if (!company) {
      return NextResponse.json({
        status: true,
        message: `The company wasnt saved!`,
      });
    }
    return NextResponse.json(
      {
        status: true,
        message: `The company was successfully saved!`,
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
