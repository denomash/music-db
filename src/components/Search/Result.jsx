import { Link } from "react-router-dom";

const Result = ({ data }) => {
  return (
    <div className="border-2 border-gray-100 mr-4 mb-4">
      <Link to={`/artist?id=${data.artist.id}`}>
      <img
        src={data.artist.picture_medium}
        alt={data.title_short}
        className="w-full"
      />
      </Link>
      <div className="p-2">
        <div className="flex sm:justify-between sm:flex-row	 flex-col-reverse	">
          <span className="font-bold text-gray-800">{data.title_short} </span>
          <span className="text-gray-500 sm:pb-0 pb-4">
            {new Date(data.duration * 1000).toISOString().substr(14, 5)}
          </span>
        </div>
        <div className="font-medium text-gray-500 sm:pt-0 pt-2">By {data.artist.name}</div>
        <div className="sm:flex hidden font-bold text-sm text-gray-800">
          {data.album.title}
        </div>
      </div>
    </div>
  );
};

export default Result;
