import { Metadata } from "next";

import Charts from "./charts";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomerLayout from "@/components/Layouts/CustomerLayout";
import { fetchMineralsReport, fetchMonthlyReport } from "@/services/reports";
export const metadata: Metadata = {
    title: "Reports",
    description: "This is the reports page",
};

export default async function Home() {
    const monthly = await fetchMonthlyReport();
    const minerals = await fetchMineralsReport();
    return (
        <>
            <CustomerLayout >
                <Breadcrumb pageName="Reports" />
                <Charts minerals={minerals} monthly={monthly} weekly={{}} />
            </CustomerLayout>
        </>
    );
}
