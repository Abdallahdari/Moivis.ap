import { useState } from "react";

function Main({ Movies, tempWatchedData }) {
  return (
    <div className="container mx-auto xl:max-w-[1100px] mt-3">
      <div className="flex items-start gap-5">
        <Box>
          <MovieList Movies={Movies} />
        </Box>
        <Box>
          <WatcheList tempWatchedData={tempWatchedData} />
        </Box>
      </div>
    </div>
  );
}
function Box({ children }) {
  const [show, Setshow] = useState(false);

  return (
    <>
      <div className=" relative items-start justify-between w-[32rem] h-[43rem]  overflow-scroll bg-slate-800 py-4 px-4 rounded-md">
        {show && <div> {children}</div>}
        <button
          className="absolute top-4 right-5 h-6 w-6 bg-gray-300 rounded-full"
          onClick={() => Setshow(!show)}
        >
          {show ? "-" : "+"}
        </button>
      </div>
    </>
  );
}

function MovieList({ Movies }) {
  return (
    <ul className="flex flex-col gap-4 divide-y-2">
      {Movies.map((movie) => (
        <ListMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
function ListMovie({ movie }) {
  return (
    <>
      <li className="px-3 py-4 flex items-center gap-4  ">
        <img src={movie.Poster} alt="" className="w-16 "></img>
        <div className="">
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      </li>
    </>
  );
}
function WatcheList({ tempWatchedData }) {
  return (
    <>
      <ul className="flex flex-col gap-4 divide-y-2">
        {tempWatchedData.map((movie) => (
          <ListWatched movie={movie} />
        ))}
      </ul>
    </>
  );
}
function ListWatched({ movie }) {
  return (
    <>
      <li className=" flex py-4 gap-4 ">
        <img src={movie.Poster} alt="" className="w-16 "></img>
        <div className="">
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      </li>
    </>
  );
}
export default Main;
