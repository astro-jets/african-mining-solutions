import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

import CustomerLayout from "@/components/Layouts/CustomerLayout";
import CustomerApplicationsTable from "@/components/Tables/CustomerApplicationsTable";
import { fetchApplicationByUser, fetchApplications } from "@/services/applications";
import NewApplication from "@/components/forms/Application/New";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata: Metadata = {
    title: "Africa Mining Solutions | Maintenances",
    description: "This is the maintenaces page",
};

const MaintenancesPage = async () => {
    const session = await getServerSession(options);
    if (!session?.user) { return };
    const applications = await fetchApplicationByUser(session.user.id);
    return (
        <CustomerLayout >
            <Breadcrumb pageName="Applications" />
            <NewApplication />
            <CustomerApplicationsTable applications={applications} />
        </CustomerLayout>
    );
};

export default MaintenancesPage;
