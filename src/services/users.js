import axiosInstance from './axios.instance';

const baseURL = '/users';

export const getAllUsers = async () => {
  const res = await axiosInstance.get(baseURL);
  return res.data;
};

export const createUser = async (user) => {
  const res = await axiosInstance.post(baseURL, user);
  return res.data;
};

export const getUserByID = async (id) => {
  const res = await axiosInstance.get(`${baseURL}/${id}`);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axiosInstance.delete(`${baseURL}/${id}`);
  return res.data;
};

export const updateUser = async (user) => {
  const res = await axiosInstance.put(`${baseURL}/${user.id}`, user);
  return res.data;
};