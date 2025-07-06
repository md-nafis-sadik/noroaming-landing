import { envConfig } from "../config";

export async function fetchData({
  query,
  options,
}: {
  query?: string;
  options?: any;
}) {
  const response = await fetch(`${envConfig.baseUrl}${query}`, {
    ...options,
  }).then((res) => res.json());
  return response;
}
