import ECommerce from "@/components/Dashboard/customersPage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Charts from "./charts";
import { fetchMineralsReport, fetchMonthlyReport } from "@/services/reports";
import TableThree from "@/components/Tables/TableThree";
import ApplicationsTable from "@/components/Tables/ApplicationsTable";
import { fetchApplications } from "@/services/applications";
export const metadata: Metadata = {
    title: "Africa Mining Solutions | Dashboard",
    description: "This is the dashboard",
};

export default async function Home() {
    const monthly = await fetchMonthlyReport();
    const minerals = await fetchMineralsReport();
    const applications = await fetchApplications();
    return (
        <>
            <DefaultLayout>
                <div className="space-y-6">
                    <ECommerce data={[]} />
                    {
                        monthly ?
                            <Charts minerals={minerals} monthly={monthly} /> :
                            <p className="w-full text-lg font-bold text-center">Report data is not available yet</p>
                    }
                    <ApplicationsTable applications={applications} />
                </div>
            </DefaultLayout>
        </>
    );
}
