import { useState, useCallback } from "react";
import { filterActions } from "../Store/filter-slice";
import { useDispatch } from "react-redux";
import { httpActions } from "../Store/http-slice";
import axios from "axios";
import { uiActions } from "../Store/ui-slice";
import { cartActions } from "../Store/cart-slice";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      try {
        const axiosMethod = requestConfig.method;
        const axiosUrl = requestConfig.url;
        const axiosData = requestConfig.data
          ? JSON.stringify(requestConfig.data)
          : null;
        const axiosHeaders = requestConfig.headers ? requestConfig.headers : {};
        const typeOfRequest = requestConfig.typeOfRequest;

        const response = await axios({
          method: axiosMethod,
          url: axiosUrl,
          data: axiosData,
          headers: axiosHeaders,
        });

        //Could use a useReducer() Hook
        if (typeOfRequest === "PRODUCTLISTDATA") {
          dispatch(httpActions.productListHttp({ response: response.data }));
          dispatch(filterActions.httpRequest({ response: response.data }));
        }
        if (typeOfRequest === "INDIVIDUALPRODUCT") {
          dispatch(httpActions.individualHttp({ product: response.data }));
        }
        if (typeOfRequest === "CARTPRODUCTS") {
          dispatch(cartActions.clearCart());
          dispatch(uiActions.onClickCart());
          dispatch(
            uiActions.purchaseNotification({
              type: true,
              message: "Purchase Complete",
              failed: false,
            })
          );
        }
      } catch (err) {
        dispatch(cartActions.clearCart());
        dispatch(uiActions.onClickCart());
        dispatch(
          uiActions.purchaseNotification({
            type: true,
            message: "Purchase Failed",
            failed: true,
          })
        );
        console.log(err.message || "useHttpHook caught an error");
      }
      setIsLoading(false);
    },
    [dispatch]
  );

  return { isLoading, sendRequest };
};

export default useHttp;
