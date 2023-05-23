import { useEffect, useState } from "react";

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error("Failed");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubUser();
  }, [username]);

  const refetchGithubUser = () => {
    fetchGithubUser();
  };

  return { user, loading, error, refetchGithubUser };
}

export default useGithubUser;
