// import axios from "axios";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import abbrNum from "../../utils/abbrNum";

const ArtistResults = () => {
  let searcht = window.location.search;
  let params = new URLSearchParams(searcht);
  let artistId = params.get("id");

  const { data, isError, error, isLoading } = useFetch(`/artist/${artistId}`, [
    "artist",
    `${artistId}`,
  ]);

  const topTracks = useFetch(
    `/artist/${artistId}/top?5`,
    ["artist", "top", `${artistId}`],
    { enabled: !!data }
  );

  const name = data ? data.name : "";

  const albums = useFetch(
    `/search/album?q=${name || "eminem"}`,
    ["artist", "albums", `${artistId}`],
    { enabled: !!data }
  );

  const albumsData = albums.data || [];

  // const getYear = async (id) => {
  //   const year = await (
  //     await axios.get(
  //       `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`
  //     )
  //   ).data;

  //   console.log("YEAR:", year.release_date);

  //   return year.release_date;
  // };

  if (isLoading) return <Loader />;
  if (isError && error) return <Error error={error} />


  return (
    <div>
      <Link to="/" className='font-bold text-xl mb-4 underline cursor-pointer'>{"<"} Back</Link>
      {/* About Artist and top tracks */}
      <div className="flex sm:flex-row flex-col w-full sm:h-xl border-2 border-gray-100">
        <div className="sm:w-3/5 sm:relative">
          <img
            className="flex flex-col w-full sm:h-full h-48"
            src={data.picture_big}
            alt={data.picture_big}
          />
          <div className="sm:absolute sm:top-16 sm:left-16 sm:mx-0 mx-2 sm:mt-0 mt-8 sm:mb-0 mb-20 sm:bg-white sm:rounded sm:p-4">
            <span className="capitalize text-3xl font-bold text-gray-800">
              {data.name}
            </span>
            <div className="pt-2">
              <span className="text-gray-800 font-bold">
                {abbrNum(data.nb_fan, 0)}
              </span>{" "}
              <span className="text-gray-500">fans</span>
            </div>
            <div className="h-1 w-16 mt-4 bg-gray-200" />
            {/* <span>{data.nb_fan}</span> */}
          </div>
        </div>

        <div className="sm:w-2/5	h-full sm:border-l border-t-2	sm:border-gray-100 border-gray-400">
          <div className="pt-12 sm:pl-8">
            <div className="font-bold text-xl mb-4 sm:pl-0 pl-4">
              Top Tracks
            </div>
            {topTracks.isSuccess &&
              topTracks.data.data.map((track, i) => (
                <div className="flex justify-between sm:w-5/6 border-b-2 py-2 sm:px-0 px-2">
                  <div>
                    <span className="font-bold mr-4">{i + 1}</span>{" "}
                    <span className="font-medium text-gray-600">
                      {track.title}
                    </span>
                  </div>{" "}
                  <span className="text-gray-500">
                    {new Date(track.duration * 1000)
                      .toISOString()
                      .substr(14, 5)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Artist Albums */}
      <div className="pt-12 sm:pl-12">
        <div>
          <h3 className="font-bold text-xl mb-4">Albums</h3>

          <div className="grid sm:grid-cols-4 grid-cols-1">
            {albums.isSuccess && !!albumsData.data.length
              ? albumsData.data.map((album) => (
                  <div className="sm:mb-4 mb-10">
                    <img
                      src={album.cover_medium}
                      alt={album.title_short}
                      className="border-l	border-gray-100 mb-2"
                    />
                    <span className="text-gray-800 font-bold">
                      {album.title}
                    </span>
                    {/* <span>{getYear(album.id)}</span> */}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistResults;
