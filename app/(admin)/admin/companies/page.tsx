import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import Table from "@/components/Tables/ComapniesTable";
import NewCompany from "@/components/forms/Company/New";
import { fetchCompanies } from "@/services/companies";

export const metadata: Metadata = {
    title: "Companies",
    description: "Companies page",
};

const CompaniesAdminPage = async () => {
    const companies = await fetchCompanies();
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Companies" />
            <div className="py-8">
                <NewCompany />
            </div>

            <Table companies={companies} />
        </DefaultLayout>
    );
};

export default CompaniesAdminPage;
