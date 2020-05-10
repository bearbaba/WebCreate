import axios from "axios";
export function request(config)
{
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 10000,
  });
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  },error => {
    console.log(error);
  });

  instance.interceptors.response.use(res => {
    // console.log(res.data);
    return res.data;
  },error => {
    console.log(error);
  })
  return instance(config);
}
