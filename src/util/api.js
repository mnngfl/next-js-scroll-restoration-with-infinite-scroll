import { fetcher } from "@/util/axios";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";

export function usePosts(pageSize) {
  const getKey = (page) => {
    return `https://dummyjson.com/posts?limit=${pageSize}&skip=${
      page * pageSize
    }`;
  };

  const { data, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher);

  return {
    data,
    isLoading,
    size,
    setSize,
  };
}

export function usePost(id) {
  const { data, isLoading, error } = useSWR(
    id ? `https://dummyjson.com/posts/${id}` : null,
    fetcher
  );

  return { data, isLoading, error };
}

export function useComments(id) {
  const { data, isLoading, error } = useSWR(
    id ? `https://dummyjson.com/posts/${id}/comments` : null,
    fetcher
  );

  return { data, isLoading, error };
}
