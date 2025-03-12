"use client"
import Image from "next/image";

import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { FaFilePdf } from "react-icons/fa";
import moment from "moment";
import { Mineral } from "@/types/Mineral";


const MineralsTable = ({ minerals }: { minerals: Mineral[] }) => {
  if (!minerals) { return }

  const downloadPDF = (minerals: any) => {
    alert("Saving Report")
    const doc = new jsPDF();

    // Call autoTable with two arguments: doc and options
    autoTable(doc, {
      head: [['Mineral ID', 'Name', 'Created On', 'Expires On', 'Procurement Cost', "Assigned to"]],
      body: minerals as RowInput[],
    });
    doc.save('minerals-minerals.pdf');
    console.log("Doc => ", doc)
  };


  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 w-full flex justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Minerals
        </h4>
        <button
          // onClick={() => downloadPDF(minerals)}
          className="bg-primary text-white flex py-2 px-4 rounded hover:bg-primary-dark space-x-3"
        >
          <span>Download as PDF</span>
          <FaFilePdf color="white" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Mineral Name</p>
        </div>
        <div className="col-span-3 hidden items-center sm:flex">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <p className="font-medium">Created on</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">View Mineral</p>
        </div>

      </div>

      {minerals.map((mineral, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col items-center space-y-4 ">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={`/uploads/minerals/${mineral.image}`}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {mineral.name}
              </p>
            </div>
          </div>

          <div className="col-span-3 items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{mineral.description}</p>
          </div>

          <div className="col-span-2 flex justify-center items-center">
            <p className="text-sm text-black dark:text-white">
              {moment(mineral.createdAt).calendar()}
            </p>
          </div>

          <div className="col-span-1 flex items-center">
            <a href={`minerals/${mineral._id}`} className="text-sm text-white bg-primary py-2 px-4 rounded-2xl hover:cursor-pointer">view</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MineralsTable;
