"use client"
import Image from "next/image";

import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { FaFilePdf } from "react-icons/fa";
import moment from "moment";
import { Deposit } from "@/types/Deposit";


const DepositsTable = ({ deposits }: { deposits: Deposit[] }) => {
  if (!deposits) { return }

  const downloadPDF = (deposits: any) => {
    alert("Saving Report")
    const doc = new jsPDF();

    // Call autoTable with two arguments: doc and options
    autoTable(doc, {
      head: [['Deposit ID', 'Name', 'Created On', 'Expires On', 'Procurement Cost', "Assigned to"]],
      body: deposits as RowInput[],
    });
    doc.save('deposits-deposits.pdf');
    console.log("Doc => ", doc)
  };


  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 w-full flex justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Deposits
        </h4>
        <button
          // onClick={() => downloadPDF(deposits)}
          className="bg-primary text-white flex py-2 px-4 rounded hover:bg-primary-dark space-x-3"
        >
          <span>Download as PDF</span>
          <FaFilePdf color="white" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Deposit Name</p>
        </div>
        <div className="col-span-3 hidden items-center sm:flex">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <p className="font-medium">Created on</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">View Deposit</p>
        </div>

      </div>

      {deposits.map((deposit, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col items-center space-y-4 ">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={`/uploads/deposits/${deposit.image}`}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {deposit.name}
              </p>
            </div>
          </div>

          <div className="col-span-3 items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{deposit.description}</p>
          </div>

          <div className="col-span-2 flex justify-center items-center">
            <p className="text-sm text-black dark:text-white">
              {moment(deposit.createdAt).calendar()}
            </p>
          </div>

          <div className="col-span-1 flex items-center">
            <a href={`deposits/${deposit._id}`} className="text-sm text-white bg-primary py-2 px-4 rounded-2xl hover:cursor-pointer">view</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepositsTable;
