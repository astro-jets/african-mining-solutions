import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from 'next/dynamic';
import { Mineral } from "@/types/Mineral";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoHammerSharp } from "react-icons/io5";
import { fetchMineralById } from "@/services/minerals";

const DynamicMap = dynamic(() => import('@/components/Map/MapComponent'), {
    ssr: false,
});

const SingleMineralAdminPage = async ({ params }: { params: Params }) => {
    const id = params.id;
    const mineral: Mineral = await fetchMineralById(id)

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Minerals" />
            <div
                className="flex flex-col text-white p-4 w-full items-center" //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
            >
                <div className="flex flex-col w-4/5 items-center justify-center">
                    {/* Artist Image */}
                    <div className="w-full flex items-center justify-center mx-auto overflow-hidden">
                        <img
                            src={`/uploads/minerals/${mineral.image}`}
                            alt="Artist"
                            className="object-cover rounded-xl w-45 h-45 "
                        />
                    </div>

                    <p className="text-5xl text-center text-white font-bold my-4">{mineral.name}</p>
                    <p className="text-red-500 text-lg  justify-center items-center flex space-x-4 my-2 w-full">
                        <FaMapMarkerAlt className="fill-red-500" size={20} />
                        <span>{mineral.country}</span>
                    </p>
                    <p className="space-x-4 flex my-2 ">
                        <IoHammerSharp className="" size={20} color="black" />
                        <span>Diamonds</span>
                    </p>
                    <h3 className="text-lg font-medium text-white my-8 ">{mineral.description}</h3>
                </div>

                <div className="flex flex-col max-w-full w-full h-full">
                    <h2 className="text-3xl font-bold text-white">Map Section</h2>

                    <div className="w-full h-[80vh]">
                        <DynamicMap center={[
                            parseFloat(mineral.coordinates[0]),
                            parseFloat(mineral.coordinates[1])
                        ]}
                            title={mineral.name}
                            zoom={15} />
                    </div>

                </div>
            </div>
        </DefaultLayout>
    );
};

export default SingleMineralAdminPage;
