import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableTwo from "@/components/Tables/TableTwo";

export const metadata: Metadata = {
    title: "World Vision | Maintenances",
    description: "This is the maintenaces page",
};

const MaintenancesPage = async () => {

    return (
        <DefaultLayout >
            <Breadcrumb pageName="Applications" />
            <TableTwo assets={[]} />
        </DefaultLayout>
    );
};

export default MaintenancesPage;
