import React from 'react';
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Branding */}
          <div className="flex items-center">
            <Typography
              variant="h5"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"
            >
              Mothi
            </Typography>
            <Typography variant="small" className="ml-2 text-gray-600">
              &copy; {currentYear}
            </Typography>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center gap-6">
            {['Features', 'Solutions', 'Pricing', 'Docs'].map((item) => (
              <li key={item}>
                <Typography
                  as="a"
                  href="#"
                  className="font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Typography>
              </li>
            ))}
          </ul>

          {/* Social/CTA */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300 hover:opacity-90">
              Contact Us
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography className="text-sm text-gray-500">
            All rights reserved. Made with ❤️ by Mothi Team
          </Typography>

          <div className="flex gap-4">
            <Typography
              as="a"
              href="#"
              className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
            >
              Privacy Policy
            </Typography>
            <Typography
              as="a"
              href="#"
              className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
            >
              Terms of Service
            </Typography>
            <Typography
              as="a"
              href="#"
              className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
            >
              Cookie Policy
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;