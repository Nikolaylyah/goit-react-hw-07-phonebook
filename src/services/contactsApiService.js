import axios from "axios";
// // https://63f4644c55677ef68bbae5e5.mockapi.io

// axios.defaults.baseURL = 'https://63f4644c55677ef68bbae5e5.mockapi.io';

const BASE_URL = 'https://63f4644c55677ef68bbae5e5.mockapi.io';
export const getDataContacts = async () => {
  const response = await axios({
    method: "get",
    baseURL: `${BASE_URL}`,
    url: "contacts",
    timeout: 5000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.data;
  return data;
};

export const getAddContacts = async contact => {
  const response = await axios({
    method: "post",
    baseURL: `${BASE_URL}`,
    url: "contacts",
    data: contact,
  });
  const data = await response.data;
  return data;
};

export const deleteContact = async contactId => {
  const idRemoteContact = await axios({
    method: "delete",
    baseURL: `${BASE_URL}`,
    url: `contacts/${contactId}`,
  });
  const data = await idRemoteContact.data.id;
  return data;
};
