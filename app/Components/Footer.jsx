'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">

          
          {/* Company Info */}
          <div className="flex flex-col items-start" data-aos="fade-up">
          <img width={70} height={70} className='pb-5' src="./walruslogo.png" alt="logo" />
            <p className="text-left text-md">
              Walrus Technical Services specializes in Pool MEP, Wellness Projects, Lighting, and Fabrication with 20+ years of experience.
            </p>
          </div>

          {/* Our Products */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Products</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a href="#faucets" className="hover:text-blue-600">Installation & Repair</a>
              </li>
              <li>
                <a href="#showers" className="hover:text-blue-600">MEP Works</a>
              </li>
              <li>
                <a href="#toilets" className="hover:text-blue-600">Rectification</a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-blue-600">Tiling & Civil Works</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a href="#home" className="hover:text-blue-600">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-left">
              <li>Location: HH Shaikh Bin Saqar Al Qassimi, Dubai, UAE P.O Box 4521</li>
              <li>Email: info@walrus.ae</li>
              <li>Contact: +971 507 304 759</li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-gray-600 hover:text-blue-600" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-gray-600 hover:text-pink-600" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaPinterestP className="text-2xl text-gray-600 hover:text-red-600" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl text-gray-600 hover:text-red-500" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-8">
          <p className="text-left text-sm text-gray-500">
            © 2024 yminnovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
