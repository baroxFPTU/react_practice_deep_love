import { useState } from "react";

function useHttp(API_URL) {
  const [data, setData] = useState(null);

  const sendRequest = async (method, data = null) => {
    const configRequest = {
      method: method,
    };

    if (data) {
      configRequest.body = JSON.stringify(data);
    }

    const response = await fetch(API_URL, configRequest);
    if (!response.ok) {
      throw new Error("Failed to get data");
    }

    const responseData = (await response.json()) || "completed";
    setData(responseData);
  };

  return [sendRequest, data];
}
export default useHttp;
