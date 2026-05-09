type FooterItem = {
  id: number;
  title: string;
};

type FooterProps = {
  footerLinks: FooterItem[];
};

const Footer = ({ footerLinks }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-8">
        
        <h2 className="text-xl font-semibold mb-4">
          Footer Links
        </h2>

        <div className="flex gap-6 flex-wrap">
          {footerLinks.map((item) => (
            <p
              key={item.id}
              className="hover:text-cyan-400 cursor-pointer transition"
            >
              {item.title}
            </p>
          ))}
        </div>

        <p className="mt-6 text-gray-400 text-sm">
          © 2026 MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;