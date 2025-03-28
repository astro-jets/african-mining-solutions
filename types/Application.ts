export type Application = {
  _id?: string;
  name: string;
  phone: string;
  email: string;
  country: string;
  description: string;
  coordinates: string[];
  image: string;
  createdAt: string;
  user?: string;
  status?: string;
};
