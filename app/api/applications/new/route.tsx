import dbConnect from "@/utils/db";
import Application from "@/models/Application";
import { NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";
import Notification from "@/models/Notification";

export async function POST(req: Request) {
    // Add a new application
    await dbConnect();
    try {
        const data = await req.formData();
        const user = data.get("user") as unknown as String;
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

        const newApplication = new Application({
            name,
            user,
            phone,
            email,
            country,
            description,
            coordinates: [lat, long],
            image: file.name,
        });

        const application = await newApplication.save();

        if (!application) {
            return NextResponse.json({
                status: true,
                message: `The application wasnt saved!`,
            });
        }
        const notification = new Notification({
            user: user,
            by: "system",
            title: "Company registration application",
            for: "admin",
            application: application._id,
            message: `A user requested to register a new company`,
        });
        await notification.save();
        return NextResponse.json(
            {
                status: true,
                message: `The application was successfully saved!`,
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
