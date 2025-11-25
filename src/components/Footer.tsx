import { Linkedin, Instagram, Mail, Youtube } from "lucide-react";
import azLogo from "@/assets/az-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", section: "home" },
    { name: "Events", section: "events" },
    { name: "Team", section: "team" },
    { name: "Community", section: "community" },
    { name: "Contact", section: "contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/algozenith-view-4aa2b1383/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/algozenith_view/", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@algozenith2k25?si=flvDpWzK80uHlpXw", label: "YouTube" },
  ];

  const toPath = (section: string) => (section === "home" ? "/" : `/${section}`);

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={azLogo} alt="AlgoZenith Logo" className="h-10 sm:h-12" />
            <p className="text-sm sm:text-base text-background/80 leading-relaxed">
              Empowering women in engineering through innovation, algorithms, and
              coding excellence at Vignan's Institute of Engineering for Women.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={toPath(link.section)}
                    className="text-sm sm:text-base text-background/80 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm sm:text-base text-background/80">
                <span className="font-semibold">Email:</span>{" "}
                algozenith302@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-center md:text-left">
          <p className="text-background/70 text-xs sm:text-sm">
            © {currentYear} VIEW. All rights reserved.
          </p>
          <p className="text-background/70 text-xs sm:text-sm">
            Vignan's Institute of Engineering for Women
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
