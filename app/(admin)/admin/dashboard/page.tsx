import ECommerce from "@/components/Dashboard/customersPage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Charts from "../reports/charts";
export const metadata: Metadata = {
    title: "World Vision | Dashboard",
    description: "This is the dashboard",
};

export default async function Home() {
    return (
        <>
            <DefaultLayout>
                <ECommerce data={[]} />
                <Charts expiry={{}} monthly={{}} weekly={{}} />
            </DefaultLayout>
        </>
    );
}
