import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import azLogo from "@/assets/az-logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", section: "home" },
    { name: "Events", section: "events" },
    { name: "Team", section: "team" },
    { name: "Community", section: "community" },
    { name: "Contact", section: "contact" },
  ];

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    const route = section === "home" ? "/" : `/${section}`;
    window.history.pushState({}, "", route);
    // Let Router handle content switch
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 focus:outline-none">
            <img
              src={azLogo}
              alt="AlgoZenith Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"
              }`}
            />
            <span className="text-lg sm:text-xl font-extrabold tracking-wide">AlgoZenith VIEW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.section === "home" ? "/" : `/${link.section}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm lg:text-base font-medium relative transition-colors text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/community" className="hidden md:flex">
            <Button 
              className="btn-gradient px-4 lg:px-6 py-2 text-sm lg:text-base"
            >
            Join Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-lg">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.section === "home" ? "/" : `/${link.section}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-left font-medium py-2 transition-colors text-foreground hover:text-primary`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/community" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    className="btn-gradient w-full mt-2"
                  >
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
