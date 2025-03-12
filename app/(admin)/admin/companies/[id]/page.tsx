import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { fetchCompanyById } from "@/services/companies";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from 'next/dynamic';
import { Company } from "@/types/Company";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoHammerSharp } from "react-icons/io5";

const DynamicMap = dynamic(() => import('@/components/Map/MapComponent'), {
    ssr: false,
});

const SingleCompanyAdminPage = async ({ params }: { params: Params }) => {
    const id = params.id;
    const company: Company = await fetchCompanyById(id)

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Companies" />
            <div
                className="flex flex-col text-white p-4 w-full items-center" //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
            >
                <div className="flex flex-col w-4/5 items-center justify-center">
                    {/* Artist Image */}
                    <div className="w-full flex items-center justify-center mx-auto overflow-hidden">
                        <img
                            src={`/uploads/companies/${company.image}`}
                            alt="Artist"
                            className="object-cover rounded-xl w-45 h-45 "
                        />
                    </div>

                    <p className="text-5xl text-center text-white font-bold my-4">{company.name}</p>
                    <p className="text-red-500 text-lg  justify-center items-center flex space-x-4 my-2 w-full">
                        <FaMapMarkerAlt className="fill-red-500" size={20} />
                        <span>{company.country}</span>
                    </p>
                    <p className="space-x-4 flex my-2 ">
                        <IoHammerSharp className="" size={20} color="black" />
                        <span>Diamonds</span>
                    </p>
                    <h3 className="text-lg font-medium text-white my-8 ">{company.description}</h3>
                </div>

                <div className="flex flex-col max-w-full w-full h-full">
                    <h2 className="text-3xl font-bold text-white">Map Section</h2>

                    <div className="w-full h-[80vh]">
                        <DynamicMap center={[
                            parseInt(company.coordinates[0]),
                            parseInt(company.coordinates[1])
                        ]}
                            title={company.name}
                            zoom={15} />
                    </div>

                </div>
            </div>
        </DefaultLayout>
    );
};

export default SingleCompanyAdminPage;
