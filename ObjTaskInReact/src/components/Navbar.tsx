type NavItem = {
  id: number;
  title: string;
  path: string;
};

type NavbarProps = {
  links: NavItem[];
};

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="bg-black text-white px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          MyWebsite
        </h1>

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                className="hover:text-cyan-400 transition duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;