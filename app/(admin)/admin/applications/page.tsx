import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ApplicationsTable from "@/components/Tables/ApplicationsTable";
import { fetchApplications } from "@/services/applications";

export const metadata: Metadata = {
    title: "Africa Mining Solutions | Maintenances",
    description: "This is the maintenaces page",
};

const MaintenancesPage = async () => {
    const applications = await fetchApplications();
    return (
        <DefaultLayout >
            <Breadcrumb pageName="Applications" />
            <ApplicationsTable applications={applications} />
        </DefaultLayout>
    );
};

export default MaintenancesPage;
