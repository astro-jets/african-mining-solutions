import { fetchDepositById } from "@/services/deposit";
import { Deposit } from "@/types/Deposit";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { BsHammer, BsMinecart, BsTools } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoHammerSharp } from "react-icons/io5";

const SingleDepositPage = async ({ params }: { params: Params }) => {
    const id = params.id;
    const deposit: Deposit = await fetchDepositById(id)

    return (
        <div
            className="flex flex-col  bg-white text-black p-4 w-full items-center" //dark:shadow-[#635b5b] shadow-[#222]  shadow-1
        >
            <div className="flex flex-col w-4/5 items-center justify-center">
                {/* Artist Image */}
                <div className="w-full h-[70vh] mx-auto overflow-hidden">
                    <img
                        src={`/uploads/deposits/${deposit.image}`}
                        alt="Artist"
                        className="object-cover rounded-xl w-full h-full "
                    />
                </div>

                <p className="text-5xl text-center text-black font-bold my-4">{deposit.name}</p>
                <p className="text-red-500 text-lg  justify-center items-center flex space-x-4 my-2 w-full">
                    <FaMapMarkerAlt className="fill-red-500" size={20} />
                    <span>{deposit.country}</span>
                </p>
                <p className="space-x-4 flex my-2 ">
                    <IoHammerSharp className="" size={20} color="black" />
                    <span>Diamonds</span>
                </p>
                <h3 className="text-lg font-medium text-black my-8 ">{deposit.description}</h3>
            </div>
        </div>
    );
}

export default SingleDepositPage;