import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@images/Footer/logo_white.png";
import ken from "@images/Footer/ken.png";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact-us" },
    { name: "Services", href: "/services" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const services = [
    { name: "Iqama Examination", href: "#" },
    { name: "Baladiya Examination", href: "#" },
    { name: "Pre-Employment Test", href: "#" },
    { name: "Driving License Examination", href: "#" },
    { name: "Delivery Examination", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/posts/mwafq-%D9%85%D9%88%D9%81%D9%82_activity-7366437608064696320-Bvl7?utm_source=share&utm_medium=member_android&rcm=ACoAABxKYgMBDsuWSr6ylGMMrNRSxmvVQhpP6TQ",
      name: "LinkedIn",
    },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  ];

  return (
    <footer className="bg-[#1E2364] text-white w-full">
      <div className="container_main py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Office Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm mb-1">Office Address:</p>
                  <p className="text-gray-300 text-sm">Riyadh, Saudi Arabia</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm mb-1">Phone:</p>
                  <p className="text-gray-300 text-sm">00966 555 98 30 70</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm mb-1">Email:</p>
                  <p className="text-gray-300 text-sm">Info@mwafq.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <div className="space-y-4 flex flex-col justify-center items-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="">
              <Link className="flex flex-col items-start  w-full" href="/">
                <Image
                  src={logo}
                  alt="Mwafq Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10">
        <div className="container_main py-6">
          <a
            href="https://kensoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            title="Kensoftware Web Design & Development Company - Amman, Jordan"
          >
            <p className="text-gray-400 text-sm">Powered BY</p>
            <Image
              src={ken}
              alt="Ken Software Solutions"
              width={130}
              height={100}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
