// import axios from "axios";

// const createInstance = (backendType) => {
//   return axios.create({
//     baseURL: getBackendUrl(backendType),
//   });
// };

// const getBackendUrl = (backendType) => {
//   switch (backendType) {
//     case "node":
//       return import.meta.env.VITE_NODE;
//     case "java":
//       return import.meta.env.VITE_JAVA;
//     case "python":
//       return import.meta.env.VITE_PYTHON;
//     case "php":
//       return import.meta.env.VITE_PHP;
//     default:
//       return ""; // Handle default case if necessary
//   }
// };

// const instance = createInstance("node"); //default node

// // Add a request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     if (response && response.data) return response.data;
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// export default instance;

import axios from "axios";

const servers = {
  php: "dec4-14-176-232-65",
  node: "238f-14-176-232-65",
  java: "8c76-171-243-49-233",
  python: "8c76-171-243-49-233"
};

const createAxiosInstance = (serverType, apiEndpoint) => {
  return axios.create({
    baseURL: `https://${servers[serverType]}.ngrok-free.app/${apiEndpoint}`,
    withCredentials: false,
    timeout: 30000,
    headers: {
      "ngrok-skip-browser-warning": "true",
      "Content-type": "application/json;charset=utf-8",
    },
  });
};

const request = async ({
  method,
  data,
  onSuccess = () => {},
  onError = () => {},
  serverType = "",
  apiEndpoint = "",
}) => {
  try {
    const AXIOS = createAxiosInstance(serverType, apiEndpoint);
    const response = await AXIOS({
      method,
      data,
    });
    onSuccess(response.data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      onError(error.response?.data);
    } else {
      onError(error);
    }
  }
};

export default request;