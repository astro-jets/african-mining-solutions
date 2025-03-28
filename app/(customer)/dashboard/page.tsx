import ECommerce from "@/components/Dashboard/customersPage";
import { Metadata } from "next";
import { fetchMineralsReport, fetchMonthlyReport } from "@/services/reports";
import TableThree from "@/components/Tables/TableThree";
import CustomerLayout from "@/components/Layouts/CustomerLayout";
import Charts from "./charts";
import { fetchUserNotifications } from "@/services/notifications";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export const metadata: Metadata = {
    title: "Africa Mining Solutions | Dashboard",
    description: "This is the dashboard",
};

export default async function Home() {
    const session = await getServerSession(options);
    if (!session?.user) { return };
    const monthly = await fetchMonthlyReport();
    const minerals = await fetchMineralsReport();
    const notifications = await fetchUserNotifications(session.user.id);
    console.log(' notifications => ', notifications)

    return (
        <>
            <CustomerLayout notifications={notifications}>
                <div className="space-y-6">
                    {/* <ECommerce data={[]} /> */}
                    {
                        monthly ?
                            <Charts minerals={minerals} monthly={monthly} /> :
                            <p className="w-full text-lg font-bold text-center">Report data is not available yet</p>
                    }
                    <TableThree />
                </div>
            </CustomerLayout>
        </>
    );
}
