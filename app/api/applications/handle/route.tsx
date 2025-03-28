// api/claims/new
import Application from "@/models/Application";
import Notification from "@/models/Notification";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    try {
        await dbConnect();
        const data = await req.formData();
        const status = data.get("status") as unknown as string;
        const user = data.get("user") as unknown as string;
        const application = data.get("application") as unknown as string;
        const id = data.get("id") as unknown as string;
        const updatedData = { $set: { status: status } };
        const applications = await Application.findOneAndUpdate(
            { _id: id },
            updatedData
        );

        if (!applications) {
            return NextResponse.json(
                { message: `Failed to ${status} application.` },
                { status: 404 }
            );
        }
        const notification = new Notification({
            by: "system",
            title: "Company registration application",
            for: user,
            application: application,
            message: `Your application has been ${status}`,
        });
        await notification.save();

        return NextResponse.json({ applications, message: `Successfully ${status} the application.` }, { status: 201 });
    } catch (error) {
        console.log("Zakanika => ", error);
        return NextResponse.json({
            status: false,
            message: "Error creating application",
        });
    }
}
