import { fetchDeposits } from "@/services/deposit";
import { Deposit } from "@/types/Deposit";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const DepositsPage = async () => {
    const deposits: Deposit[] = await fetchDeposits()
    return (
        <>
            {deposits ?
                <section className=" w-full min-h-[90vh] overflow-hidden bg-white text-black">
                    <div className="p-6 flex flex-col items-center w-full h-full space-y-4">
                        <h1 className="text-5xl text-center font-bold">Deposists</h1>
                        <h1 className="text-xl text-center font-thin text-red-500">Mine Sites and Deposits</h1>
                        <div className="grid grid-cols-3 gap-4 gap-y-12 my-8">
                            {deposits.map((deposit, index) => (
                                <Link
                                    href={`/deposits/${deposit._id}`}
                                    key={index}
                                    className="flex flex-col" //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
                                >
                                    {/* Artist Image */}
                                    <div className="w-full h-80 mx-auto rounded-xl  overflow-hidden">
                                        <img
                                            src={`/uploads/deposits/${deposit.image}`}
                                            alt="Artist"
                                            className="object-cover w-full h-full hover:scale-105 transition-all duration-500"
                                        />
                                    </div>

                                    <p className="text-xl text-center text-black font-bold my-1">{deposit.name}</p>
                                    <p className="text-red-500 text-lg  justify-center items-center flex space-x-8 w-full">
                                        <FaMapMarkerAlt className="fill-red-500" size={20} />
                                        {deposit.country}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                : <h1>No deposits found</h1>
            }
        </>
    );
}

export default DepositsPage;