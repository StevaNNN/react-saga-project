import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const TanstackQuery = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["kera"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/TanStack/querys"
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const t = {
    isPending,
    error,
    data,
    isFetching,
  };

  console.log(t);

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
};

export default TanstackQuery;
