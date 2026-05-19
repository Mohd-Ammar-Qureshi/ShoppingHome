const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#0f172a] border m-auto  border-green-500/20 rounded-2xl p-8 max-w-md shadow-xl">
      {/* App Name */}
      <h1 className="text-3xl font-bold text-center text-white mb-2">
        🛒 ShoppingHome
      </h1>
      <p className="text-gray-400 text-center mb-6 text-sm">
        Welcome back! Login to continue
      </p>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 rounded-lg bg-black border border-green-500/30 text-white outline-none focus:border-green-400"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 p-3 rounded-lg bg-black border border-green-500/30 text-white outline-none focus:border-green-400"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition"
      >
        Login
      </button>

      <p className="text-gray-400 text-sm text-center mt-4">
        New here?{" "}
        <span className="text-green-400 cursor-pointer">Create account</span>
      </p>
    </div>
  );
};

export default Login;
