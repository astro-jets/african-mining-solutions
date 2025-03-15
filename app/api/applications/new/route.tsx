// api/claims/new
import dbConnect from "@/utils/db";
import Application from "@/models/Application";
import Notification from "@/models/Notification";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const data = await req.formData();
        const company = data.get("company") as unknown as string;
        const mineral = data.get("mineral") as unknown as string;
        const message = data.get("message") as unknown as string;

        const newApplication = new Application({
            company,
            mineral,
            message,
        });

        const application = await newApplication.save();
        if (application) {
            const notification = new Notification({
                by: company,
                title: "Application Request",
                for: "admin",
                mineral: mineral,
                message: message,
            });
            await notification.save();
            return NextResponse.json(
                {
                    status: true,
                    message: `Application  has been created successfully!`,
                },
                { status: 201 }
            );
        }
    } catch (error) {
        console.log("Zakanika => ", error);
        return NextResponse.json({
            status: false,
            message: "Error creating application",
        });
    }
}
