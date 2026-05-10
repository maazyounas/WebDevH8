import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";

function App() {

  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
  ];

  const footerData = [
    {
      id: 1,
      title: "Privacy Policy",
    },
    {
      id: 2,
      title: "Terms & Conditions",
    },
    {
      id: 3,
      title: "Support",
    },
    {
      id: 4,
      title: "Careers",
    },
  ];

  return (
    <div>

      <Navbar links={navLinks} />

      <Home username="Maaz" />

      <Footer footerLinks={footerData} />

    </div>
  );
}

export default App;