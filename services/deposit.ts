"use server";

import axios from "@/utils/axiosInstance";

// Fetch all Deposits
export const fetchDeposits = async () => {
  const response = await axios.get(`/deposits/all`);
  return response.data.deposits;
};

// Fetch Deposit by ID
export const fetchDepositById = async (id: string) => {
  const response = await axios.get(`/deposits/one/?id=${id}`);
  return response.data.deposit;
};

// Create a Deposit
export const createDeposit = async (deposit: any) => {
  const response = await axios.post("/deposits/new", deposit);
  return response.data;
};

// Update a Deposit
export const updateDeposit = async (id: string, deposit: any) => {
  const response = await axios.put(`/deposits/update/${id}`, deposit);
  return response.data.data;
};

// Delete a Deposit
export const deleteDeposit = async (id: string) => {
  await axios.delete(`/deposits/delete/${id}`);
};
