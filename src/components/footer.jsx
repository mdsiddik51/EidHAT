"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
              <span className="text-3xl">🐄</span>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight">EIDHAT</h2>
              <p className="text-sm text-white/80">
                Premium Qurbani Marketplace
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-white/80 max-w-sm">
            Buy and sell healthy cows, goats, sheep, and camels online with
            trusted sellers across Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Social links</h3>

          <ul className="space-y-3 text-white/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition-colors">
                twitter
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition-colors">
                instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">About</h3>

          <ul className="space-y-3 text-white/80">
            <li>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Healthy Animals
                </h3>
                <p className="text-white text-sm">
                  Verified and healthy Qurbani animals from trusted sellers
                  across Bangladesh.
                </p>
              </div>
            </li>

            <li>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Trusted Platform
                </h3>
                <p className="text-white text-sm">
                  Safe and reliable marketplace with transparent pricing and
                  secure booking.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>

          <div className="space-y-4 text-white/80">
            <p>📍 Rangpur, Bangladesh</p>
            <p>📧 support@eidhat.com</p>
            <p>📞 +880 1234-567890</p>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 mt-5 border border-white/10">
              <p className="font-semibold text-white mb-1">Eid-ul-Adha 2026</p>

              <p className="text-sm text-white/70">
                Trusted marketplace for your blessed Qurbani.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 mt-14 pt-6 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} EIDHAT. All rights reserved.</p>

        <p className="mt-2">
          Made with <span className="text-red-300">♥</span> in Bangladesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
