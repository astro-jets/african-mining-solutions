import { Metadata } from "next";

import Charts from "./charts";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
    title: "Reports",
    description: "This is the reports page",
};

export default async function Home() {
    return (
        <>
            <DefaultLayout >
                <Breadcrumb pageName="Reports" />
                <Charts expiry={{}} monthly={{}} weekly={{}} />
            </DefaultLayout>
        </>
    );
}
