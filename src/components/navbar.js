function Navbar({ Movies, SetSearch, search }) {
  return (
    <div className=" bg-[#3F1F9D] mt-2">
      <div className="container  mx-auto py-2 px-3 flex items-center justify-between">
        {" "}
        <Logo />
        <Search search={search} SetSearch={SetSearch} />
        <Flims Movies={Movies} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl">🍿</h1>
        <h1 className="text-3xl">Flims</h1>
      </div>
    </>
  );
}
function Search({ search, SetSearch }) {
  return (
    <>
      <form className="w-[350px] ">
        <input
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
          className="w-full py-2 rounded-md px-4 bg-[#2F0B98] outline-none placeholder:text-[18px] "
          placeholder="Search Movies "
        ></input>
      </form>
    </>
  );
}
function Flims({ Movies }) {
  return (
    <>
      <div className="text-xl">
        <p className="">Found {Movies.length} results</p>
      </div>
    </>
  );
}

export default Navbar;
