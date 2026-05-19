const SearchOverlay = ({
  searchOpen,
  setSearchOpen,
  searchVal,
  setSearchVal,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex  flex-col items-center transition-all duration-300 ${
        searchOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="w-[90%] max-w-2xl mt-5 border-b border-yellow-400 flex items-center gap-4 pb-4">
        <input
          type="text"
          placeholder="Search styles..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="w-full bg-transparent outline-none text-white text-3xl"
        />

        <button
          onClick={() => setSearchOpen(false)}
          className="text-white text-3xl"
        >
          ✕
        </button>
      </div>

      <div className="flex gap-3 mt-8 flex-wrap justify-center">
        {["Sneakers", "Blazer", "Jewelry"].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchVal(tag)}
            className="px-4 py-2 rounded-full bg-white/40 text-white hover:bg-yellow-400 hover:text-black transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchOverlay;
