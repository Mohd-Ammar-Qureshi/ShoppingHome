import { footerLinks } from "../../data/Data";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-yellow-400 mb-4 uppercase tracking-widest text-sm">
              {title}
            </h3>

            <ul className="space-y-3 text-gray-400">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © 2026 LuxeStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
