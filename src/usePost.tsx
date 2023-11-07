import { useState } from "react";
import { axiosRequest } from "./axiosInstance";

const usePost = (url: string, data: object) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const postData = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      setIsLoading(true);
      const response = await axiosRequest.post(url, data, { headers });
      if (response) {
        console.log(response);
      }
    } catch (error: unknown) {
      if (typeof error === "string") {
        setError(true);
        console.log(error);
      } else if (error instanceof Error) {
        setError(true);
        console.log(error.message);
      }
    } finally {
      setError(false);
      setIsLoading(false);
    }
  };
  postData();
  return { isLoading, error };
};

export default usePost;
