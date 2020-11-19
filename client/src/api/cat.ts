import { get } from "./helpers";

const baseUrl = "http://localhost:8000";

export const getCats = () => {
  const url = `${baseUrl}/cat`;
  return get(url);
};
