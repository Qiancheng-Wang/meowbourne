import axios, { AxiosResponse } from "axios";

export async function get(url: string): Promise<AxiosResponse<any>> {
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  return await axios.get(url, { headers });
}

export async function post(
  url: string,
  data: any
): Promise<AxiosResponse<any>> {
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  return await axios.post(url, data, { headers });
}
