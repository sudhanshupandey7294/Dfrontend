import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">D -SERVICES</h3>
          <p className="text-gray-400">
            Empowering innovation with smart tech solutions for startups, enterprises, and individuals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#why" className="hover:underline">Why Join</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Email: contact@dservices.tech</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-blue-400" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className="hover:text-gray-400" /></a>
            <a href="mailto:contact@dservices.tech"><FaEnvelope className="hover:text-red-400" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} D -SERVICES. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
