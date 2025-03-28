"use server";

import axios from "@/utils/axiosInstance";

// FetchAdmin Notification
export const fetchAdminNotifications = async () => {
  const response = await axios.get(`/notifications/admin/`);
  return response.data.notifications;
};

// Fetch notification by ID
export const fetchUserNotifications = async (id: string) => {
  const response = await axios.get(`/notifications/user/?id=${id}`);
  return response.data.notifications;
};
