import dbConnect from "@/utils/db";
import Deposit from "@/models/Deposit";
import Company from "@/models/Company";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
  try {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Aggregate companies
    const companiesData = await Company.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
    ]);

    // Aggregate deposits
    const depositData = await Deposit.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
    ]);

    // Initialize monthly array
    const monthly = months.map((month) => ({
      date: month,
      deposits: 0,
      companies: 0,
    }));

    // Populate monthly array with data
    companiesData.forEach(({ _id, count }) => {
      monthly[_id - 1]["companies"] = count;
    });

    depositData.forEach(({ _id, count }) => {
      monthly[_id - 1]["deposits"] = count;
    });

    const deposits = [];
    const companies = [];

    for (let i = 0; i < monthly.length; i++) {
      const m = monthly[i];
      deposits.push(m.deposits);
      companies.push(m.companies);
    }

    const report = {
      deposits,
      companies,
    };

    return NextResponse.json({ report }, { status: 201 });
  } catch (error) {
    console.log("error tu => ", error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
