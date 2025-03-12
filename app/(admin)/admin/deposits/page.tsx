import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NewDeposit from "@/components/forms/Deposit/New";
import DepositsTable from "@/components/Tables/DepositsTable";
import { fetchDeposits } from "@/services/deposit";

export const metadata: Metadata = {
    title: "Mine Deposits",
    description: "This is the assets page",
};

const AssetsPage = async () => {
    const deposits = await fetchDeposits()
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Mine Deposits" />
            <div className="py-8">
                <NewDeposit />
            </div>
            <DepositsTable deposits={deposits} />
        </DefaultLayout>
    );
};

export default AssetsPage;
