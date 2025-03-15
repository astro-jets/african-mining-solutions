"use client"
import ChartOne from "@/components/Charts/ChartOne";
import DonutChart from "@/components/Charts/Doniughts";
import { MonthlyReport } from "@/types/Report";

const Charts = ({ minerals, monthly }: { minerals: any, monthly: MonthlyReport }) => {
    return (
        <div className="mt-4 grid grid-cols-12 gap-2 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

            {monthly && <ChartOne monthly={monthly} />}
            <DonutChart width={500} minerals={minerals} />

        </div>
    );
}

export default Charts;