import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useGithubUsers(username) {
  if (!username) {
    return {
      users: null,
      error: null,
      isLoading: false,
    };
  }
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}
