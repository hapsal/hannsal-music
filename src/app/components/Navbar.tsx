'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link href="/" className="flex items-center">
              <Image 
                src="/img/hannsal_logo.jpg" 
                alt="Hannu Salo" 
                width={150} 
                height={40} 
                className="max-h-10 w-auto rounded md:max-h-20" 
                priority
              />
            </Link>
          </div>
          
          <div className="navbar-end lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="btn btn-ghost"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
          
          <div className="navbar-end hidden lg:flex items-center space-x-1">
            <div className="flex items-center">
              <Link href="/" className="px-2 py-1 hover:bg-base-200 rounded-md whitespace-nowrap">{t.home}</Link>
              <Link href="/services" className="px-2 py-1 hover:bg-base-200 rounded-md whitespace-nowrap">{t.services}</Link>
              <Link href="/portfolio" className="px-2 py-1 hover:bg-base-200 rounded-md whitespace-nowrap">{t.portfolio}</Link>
              <Link href="/about" className="px-2 py-1 hover:bg-base-200 rounded-md whitespace-nowrap">{t.about}</Link>
              <Link href="/contact" className="px-2 py-1 hover:bg-base-200 rounded-md whitespace-nowrap">{t.contact}</Link>
            </div>
            
            <Link href="/contact" className="btn btn-primary btn-sm whitespace-nowrap ml-1">{t.hireMe}</Link>
            <div className="ml-1">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-[64px] z-50 bg-base-100 shadow-lg animate-fadeIn">
          <div className="max-w-5xl mx-auto px-4">
            <ul className="menu menu-vertical w-full p-4">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>{t.home}</Link></li>
              <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>{t.services}</Link></li>
              <li><Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>{t.portfolio}</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>{t.about}</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t.contact}</Link></li>
              <li className="mt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary w-full">
                {t.hireMe}
                </Link>
              </li>
              <li className="mt-4">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}