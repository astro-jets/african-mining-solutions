"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../Cards/CardDataStats";
import { BsPeople, BsCurrencyDollar, BsWindowDesktop, BsEnvelopeArrowUp } from "react-icons/bs";
import { CiMountain1 } from "react-icons/ci";
import { IoHammerOutline } from "react-icons/io5";
// type dataProps = {
//   stats: StatsType;
//   monthly: MonthlyReport
//   notifications?: notificationProps
// }
const ECommerce = ({ data }: { data: any }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">

        <CardDataStats title="Deposits" total={'500'}>
          <IoHammerOutline color="#ff8e25" size={20} />
        </CardDataStats>

        <CardDataStats title="Minerals" total={'100'}>
          <CiMountain1 size={20} color={'#ff8e25'} />
        </CardDataStats>

        <CardDataStats title="Applications" total={'50000'}>
          <BsEnvelopeArrowUp size={20} color={'#ff8e25'} />
        </CardDataStats>
      </div >

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 space-y-4">
          {data.monthly ? <ChartOne monthly={data.monthly} /> : <p className="w-full text-lg font-bold text-center">No Data available yet</p>}
        </div>
      </div>
    </>
  );
};

export default ECommerce;
