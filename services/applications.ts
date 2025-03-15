"use server";

import axios from "@/utils/axiosInstance";

// Fetch all Applications
export const fetchApplications = async () => {
  const response = await axios.get(`/applications/all`);
  return response.data.applications;
};

// Fetch Application by ID
export const fetchApplicationById = async (id: string) => {
  const response = await axios.get(`/applications/one/?id=${id}`);
  return response.data.application;
};

// Create a Application
export const createApplication = async (application: any) => {
  const response = await axios.post("/applications/new", application);
  return response.data;
};

// Update a Application
export const updateApplication = async (id: string, application: any) => {
  const response = await axios.put(`/applications/update/${id}`, application);
  return response.data.data;
};

// Delete a Application
export const deleteApplication = async (id: string) => {
  await axios.delete(`/applications/delete/${id}`);
};
