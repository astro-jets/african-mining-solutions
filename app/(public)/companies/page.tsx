import { Company } from "@/types/Company";
import { fetchCompanies } from "@/services/companies";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const CompanysPage = async () => {
    const companies: Company[] = await fetchCompanies()
    return (
        <>
            {companies ?
                <section className=" w-full min-h-[90vh] overflow-hidden bg-white text-black">
                    <div className="p-6 flex flex-col items-center w-full h-full space-y-4">
                        <h1 className="text-5xl text-center font-bold">Companies</h1>
                        <h1 className="text-xl text-center font-thin text-red-500">Companies and Businesses</h1>
                        <div className="grid grid-cols-3 gap-4 gap-y-12 my-8">
                            {companies.map((company, index) => (
                                <Link
                                    href={`/companies/${company._id}`}
                                    key={index}
                                    className="flex flex-col" //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
                                >
                                    {/* Artist Image */}
                                    <div className="w-full h-80 mx-auto rounded-xl  overflow-hidden">
                                        <img
                                            src={`/uploads/companies/${company.image}`}
                                            alt="Artist"
                                            className="object-cover w-full h-full hover:scale-105 transition-all duration-500"
                                        />
                                    </div>

                                    <p className="text-xl text-center text-black font-bold my-1">{company.name}</p>
                                    <p className="text-red-500 text-lg  justify-center items-center flex space-x-8 w-full">
                                        <FaMapMarkerAlt className="fill-red-500" size={20} />
                                        {company.country}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                : <h1>No companies found</h1>
            }
        </>
    );
}

export default CompanysPage;