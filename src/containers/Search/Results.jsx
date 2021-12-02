import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Result from "../../components/Search/Result";
import { useSearch } from "../../hooks/SearchContext";
import useFetch from "../../hooks/useFetch";

const Results = () => {
  const [search] = useSearch();

  const { data, isError, error, isSuccess, isLoading } = useFetch(
    `/search?q=${search}`,
    ["search", search]
  );

  if (isLoading) return <Loader />;
  if (isError && error) return <Error error={error} />

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1">
      {isSuccess && data.data.map((res) => <Result data={res} />)}
    </div>
  );
};

export default Results;
