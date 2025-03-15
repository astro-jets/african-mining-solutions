"use client"
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import DonutChart from "@/components/Charts/Doniughts";
import { MonthlyReport } from "@/types/Report";

const Charts = ({ minerals, monthly, weekly }: { minerals: any, weekly: any, monthly: MonthlyReport }) => {
    console.log("Mineral => ", minerals)
    return (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 space-y-4">
                {monthly && <ChartOne monthly={monthly} />}
                <ChartTwo weekly={weekly} />
                <DonutChart width={800} minerals={minerals} />
            </div>
        </div>
    );
}

export default Charts;