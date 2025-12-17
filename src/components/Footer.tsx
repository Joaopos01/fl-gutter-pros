import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const servedAreas = ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "Entire Florida"];

const Footer = () => {
  return (
    <footer className="bg-foreground text-card">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img 
                src={logo} 
                alt="Clean Cut Gutters Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Clean Cut Gutters</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">PROFESSIONAL Gutter INSTALLATIONS</h3>
            <p className="mb-6 text-card/70 leading-relaxed">
              Since 2018, Clean Cut Gutters has proudly served homeowners across Florida, delivering expert gutter solutions built on precision, reliability, and care. With years of hands-on experience, our team is equipped to handle every aspect of your gutter installation and maintenance needs.
            </p>
            <div className="text-card/80">
              <a href="tel:9048889778" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (904) 888-9778
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 font-semibold">Service Areas</h3>
            <ul className="space-y-2">
              {servedAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-card/70">
                  <MapPin className="h-3 w-3" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-card/10 pt-8 md:flex-row">
          <p className="text-sm text-card/60">
            © 2025 Clean Cut Gutters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-card/60">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
