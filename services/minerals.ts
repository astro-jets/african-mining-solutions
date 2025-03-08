"use server";

import axios from "@/utils/axiosInstance";

// Fetch all Minerals
export const fetchMinerals = async () => {
  const response = await axios.get(`/minerals/all`);
  return response.data.minerals;
};

// Fetch Mineral by ID
export const fetchMineralById = async (id: string) => {
  const response = await axios.get(`/minerals/one/?id=${id}`);
  return response.data.mineral;
};

// Create a Mineral
export const createMineral = async (deposit: any) => {
  const response = await axios.post("/minerals/new", deposit);
  return response.data;
};

// Update a Mineral
export const updateMineral = async (id: string, deposit: any) => {
  const response = await axios.put(`/minerals/update/${id}`, deposit);
  return response.data.data;
};

// Delete a Mineral
export const deleteMineral = async (id: string) => {
  await axios.delete(`/minerals/delete/${id}`);
};
