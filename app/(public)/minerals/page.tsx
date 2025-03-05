import { Company } from "@/types/Company";
import { fetchMinerals } from "@/services/minerals";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const CompanysPage = async () => {
    const minerals: any[] = await fetchMinerals()
    return (
        <>
            {minerals ?
                <section className=" w-full min-h-[90vh] overflow-hidden bg-white text-black">
                    <div className="p-6 flex flex-col items-center w-full h-full space-y-4">
                        <h1 className="text-5xl text-center font-bold">Minerals</h1>
                        <h1 className="text-xl text-center font-thin text-red-500">Minerals and Stones</h1>
                        <div className="grid grid-cols-3 gap-4 gap-y-12 my-8">
                            {minerals.map((mineral, index) => (
                                <Link
                                    href={`/minerals/${mineral._id}`}
                                    key={index}
                                    className="flex flex-col" //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
                                >
                                    {/* Artist Image */}
                                    <div className="w-full h-80 mx-auto rounded-xl  overflow-hidden">
                                        <img
                                            src={`/uploads/minerals/${mineral.image}`}
                                            alt="Artist"
                                            className="object-cover w-full h-full hover:scale-105 transition-all duration-500"
                                        />
                                    </div>

                                    <p className="text-xl text-center text-black font-bold my-1">{mineral.name}</p>
                                    <p className="text-red-500 text-lg  justify-center items-center flex space-x-8 w-full">
                                        <FaMapMarkerAlt className="fill-red-500" size={20} />
                                        {mineral.country}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                : <h1>No minerals found</h1>
            }
        </>
    );
}

export default CompanysPage;