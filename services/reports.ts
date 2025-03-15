"use server";

import axios from "@/utils/axiosInstance";

export const fetchMonthlyReport = async () => {
  const response = await axios.get(`/reports/monthly/`);
  return response.data.report;
};

export const fetchMineralsReport = async () => {
  const response = await axios.get(`/reports/minerals/`);
  return response.data.minerals;
};
