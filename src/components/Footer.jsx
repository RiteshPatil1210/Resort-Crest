import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Crest The Grand</h2>
          <p className="text-sm leading-relaxed">
            Crest the Grand Hotel of Dreams, Nashik, India.
            Experience luxury, comfort, and exceptional service minutes from the city center.
          </p>
          <div className="mt-4 flex gap-4 text-lg">
            <a href="#" className="hover:text-yellow-500" title="Website">🌐</a>
            <a href="#" className="hover:text-yellow-500" title="Facebook">📘</a>
            <a href="#" className="hover:text-yellow-500" title="Instagram">📸</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl italic font-semibold mb-3">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>📞 +91 74996 57848</li>
            <li>📞 +91 95183 77707</li>
            <li>📧 crestdarrit@gmail.com</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">LinkedIn</a></li>
          </ul>
        </div>

        {/* Address / Location */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Directions to Reach</h2>
          <p className="text-sm leading-relaxed">
            Crest The Grand Hotel of Dreams, near K.K. Wagh College, Hirawadi, Nashik, Maharashtra - 422009, India.
          </p>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm">
        ©️ 2025 Crest The Grand Hotels of Dreams. Developed by 
        <a href="https://Crest.in" className="text-yellow-400 ml-1 hover:underline" target="_blank" rel="noopener noreferrer">Team Crest</a>
      </div>
    </footer>
  );
}

export default Footer;