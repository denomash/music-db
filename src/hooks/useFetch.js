/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import api from "../api";
import { makeErrorMessage } from "../utils/makeErrorMessage";

/**
 * @description Abstract fetch logic that affects state into a reusable hook
 * @param  {string} path From whence to fetch
 * @param {string | string[]} name  Unique identifier for what's being fetched, for caching purposes
 * @param  {Objec} args extra configs

 * @return {FetchResults} State changes across the fetch cycle
 */
export default function useFetch(path, name, args) {
  const {
    isLoading,
    isSuccess,
    isError,
    isFetching: isRefreshing,
    data,
    error,
  } = useQuery(
    name,
    async () => {
      const res = await api.get(path);
      return res.data;
    },
    {
      retry: (failureCount, err) => false,
      ...args,
      ...(args?.onError && {
        onError: (err) =>
          args.onError({
            message: makeErrorMessage(err),
            statusCode: err.response?.status,
          }),
      }),
    }
  );

  // useRedirectOnUnauthorised(error, path);
  return {
    isLoading,
    isRefreshing,
    isSuccess,
    isError,
    data,
    error: {
      message: error ? makeErrorMessage(error) : "",
      statusCode: error?.response?.status || 0,
    },
  };
}
