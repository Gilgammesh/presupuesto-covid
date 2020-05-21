import axios from "axios";
//import { getToken } from "./auth";

export const getRequest = async (url) => {
  //const token = getToken;
  const options = {
    method: "GET",
    headers: {
      //authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    url,
  };
  try {
    const response = await axios(options);
    const { status, data } = response;
    if (status !== 200) {
      console.log(status);
      return null;
    }
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const postRequest = async (url, data) => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: data,
    url,
  };
  try {
    const response = await axios(options);
    const { status, data } = response;
    if (status !== 200) {
      console.log(status);
      return {
        estado: false,
      };
    }
    return {
      estado: true,
      data: data,
    };
  } catch (err) {
    console.log(err);
    return {
      estado: false,
    };
  }
};
