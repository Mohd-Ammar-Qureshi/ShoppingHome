import { cartItems } from "../data/Data";

const CartDrawer = ({ cartOpen, setCartOpen }) => {
  const totalQty = cartItems.reduce((s, i) => s + i.qty, 0);

  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-zinc-900 z-50 p-6 transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h2 className="text-2xl text-white">Your Bag</h2>

          <button
            onClick={() => setCartOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-white/10 pb-4"
            >
              <div className="text-4xl">{item.img}</div>

              <div>
                <h3 className="text-white">{item.name}</h3>

                <p className="text-yellow-400">
                  ${(item.price * item.qty).toFixed(2)}
                </p>

                <p className="text-gray-400 text-sm">Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-between mb-4 text-white">
            <span>Total ({totalQty})</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
