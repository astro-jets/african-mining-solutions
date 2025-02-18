import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import TablesPage from "../tables/page";
import TableTwo from "@/components/Tables/TableTwo";
import NewDeposit from "@/components/forms/Deposit/New";

export const metadata: Metadata = {
    title: "Mine Deposits",
    description: "This is the assets page",
};

const AssetsPage = async () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Mine Deposits" />
            <div className="py-8">
                <NewDeposit />
            </div>

            {/* <div className=" flex-wrap gap-10 grid grid-cols-3">
                {
                    assets.map(asset => (
                        <div className="w-full">
                            <div className="mb-9 rounded-[20px] bg-white dark:bg-secondary shadow-2 hover:shadow-lg">
                                <div className="mb-8 overflow-hidden flex h-60 w-full items-center justify-center rounded-xl">
                                    <img className="object-cover w-full h-60" src={`/uploads/${asset.path}`} alt="" />
                                </div>
                                <div className="flex flex-col px-4 py-2">
                                    <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                                        {asset.name}
                                    </h4>
                                    <p>Cost: MK  <span className="text-primary text-lg"> {asset.cost} </span></p>
                                    <Link href={`/admin/assets/${asset._id}`} className="cursor-pointer bg-primary rounded-2xl text-white p-2 text-center my-2">
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            <TableTwo assets={[]} />
        </DefaultLayout>
    );
};

export default AssetsPage;
