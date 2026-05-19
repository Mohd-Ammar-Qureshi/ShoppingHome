import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-950">
      <Header />

      <main className="pt-32 flex flex-col items-center justify-center text-center px-6">
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
