"use server";

import axios from "@/utils/axiosInstance";

// Fetch all Companies
export const fetchCompanies = async () => {
  const response = await axios.get(`/companies/all`);
  return response.data.companies;
};

// Fetch Company by ID
export const fetchCompanyById = async (id: string) => {
  const response = await axios.get(`/companies/one/?id=${id}`);
  return response.data.company;
};

// Create a Company
export const createCompany = async (company: any) => {
  const response = await axios.post("/companies/new", company);
  return response.data;
};

// Update a Company
export const updateCompany = async (id: string, company: any) => {
  const response = await axios.put(`/companies/update/${id}`, company);
  return response.data.data;
};

// Delete a Company
export const deleteCompany = async (id: string) => {
  await axios.delete(`/companies/delete/${id}`);
};
