import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NewMineral from "@/components/forms/Minerals/New";
import { fetchMinerals } from "@/services/minerals";
import MineralsTable from "@/components/Tables/MineralsTable";


export const metadata: Metadata = {
    title: "Minerals",
    description: "Minerals page",
};

const MineralsAdminPage = async () => {
    const minerals = await fetchMinerals()
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Minerals" />
            <div className="py-8">
                <NewMineral />
            </div>

            <MineralsTable minerals={minerals} />
        </DefaultLayout>
    );
};

export default MineralsAdminPage;
