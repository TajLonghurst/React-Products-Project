import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { httpActions } from "../Store/http-slice";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const axiosMethod = requestConfig.method;
        const axiosUrl = requestConfig.url;
        const axiosData = requestConfig.data
          ? JSON.stringify(requestConfig.data)
          : null;
        const axiosHeaders = requestConfig.headers ? requestConfig.headers : {};
        //const typeOfRequest = requestConfig.typeOfRequest;

        const response = await axios({
          method: axiosMethod,
          url: axiosUrl,
          data: axiosData,
          headers: axiosHeaders,
        });

        dispatch(httpActions.http({ response: response.data }));
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [dispatch]
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;