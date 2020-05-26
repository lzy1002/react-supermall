import axios from "axios";

const instance = axios.create({
  baseURL: "http://152.136.185.210:8000/api/n3",
  timeout: 5000
});

export function request(config) {
  instance.interceptors.request.use((config) => {
    return config;
  }, (error) => {
    console.log(error);
  });

  instance.interceptors.response.use((data) => {
    return data;
  }, (error) => {
    console.log(error);
  });

  return instance(config);
}
