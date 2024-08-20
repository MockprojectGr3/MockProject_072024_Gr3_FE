import axios from "./axios";

const createUserAPI = (name, email, password) => {
  //handle logic
  // return axios('php').post()
  //  return axios.post(); //default nodejs
};

const fetchData = async () => {
  try {
    const res = await axios.get("/contact");
    console.log('Check:', res)
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { createUserAPI, fetchData };
