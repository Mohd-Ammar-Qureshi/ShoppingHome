const Home = () => {
  return (
    <>
      <h1 className="text-6xl md:text-7xl text-white font-light">
        New Season.
      </h1>
      <p className="text-yellow-400 tracking-[6px] uppercase mt-4">
        Luxury Fashion Collection
      </p>
      <div className="flex gap-4 mt-10">
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold">
          Shop Now
        </button>

        <button className="border border-white/20 text-white px-8 py-3 rounded-lg">
          Explore
        </button>
      </div>
      <div className="h-[900px]" />
    </>
  );
};

export default Home;
