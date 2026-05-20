import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-950">
      <Header />

      <main className="pt-32 flex flex-col items-center justify-center text-center px-6">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default App;
