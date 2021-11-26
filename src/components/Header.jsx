// import { debounce } from "lodash";
import { useSearch } from "../hooks/SearchContext";

const Header = () => {
  const [, setSearch] = useSearch();

  return (
    <div className="flex justify-center items-center h-12 w-screen bg-gray-100">
      <div className="w-10/12 lg:w-8/12">
        <div className="flex items-center h-full">
          <span className="bg-gray-900 h-8 w-14 text-white p-2 rounded-sm	font-medium mr-4">
            LOGO
          </span>
          <div className="flex">
            {" "}
            <div className="h-6 w-1 bg-gray-500" />{" "}
            {/* <img src={} alt='seach' className='' /> */}
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none pl-2"
              onChange={(e) => {
                setSearch(e.target.value || 'all')
                // debounce((e) => setSearch(e.target.value), 500);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
