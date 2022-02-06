import { useState } from "react";

function useHttp(API_URL) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("pending");

  const sendRequest = async (method, data = null) => {
    const configRequest = {
      method: method,
    };

    if (data) {
      configRequest.body = JSON.stringify(data);
    }

    setStatus("pending");
    const response = await fetch(API_URL, configRequest);
    if (!response.ok) {
      setStatus("failed");
      throw new Error("Failed to get data");
    }

    const responseData = (await response.json()) || "completed";
    const transformedData = [];
    for (const key in responseData) {
      transformedData.push(responseData[key]);
    }

    setData(transformedData);
    setStatus("success");
  };

  return [sendRequest, data, status];
}
export default useHttp;
