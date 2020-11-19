import { get } from "./helpers";

const baseUrl = process.env.REACT_APP_ENDPOINT || "http://localhost:8000";

export const getCats = () => {
  const url = `${baseUrl}/cat`;
  return get(url);
};
