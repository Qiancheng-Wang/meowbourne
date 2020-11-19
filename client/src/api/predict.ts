import { post } from "./helpers";

const baseUrl = "http://localhost:8000";

interface PredictData {
  encodeString: string;
}

export const predict = (data: PredictData) => {
  const url = `${baseUrl}/predict`;
  return post(url, data);
};
