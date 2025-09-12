import axios from "../../../axiosConfig";

export const fetchUserPhone = async (userId) => {
  const { data } = await axios.get(`/users/${userId}/contacts`);
  return data.data.phone;
};
