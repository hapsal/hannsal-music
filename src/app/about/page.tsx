// src/app/about/page.tsx
'use client'

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-primary/10 to-base-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-primary">{t.aboutTitle}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 font-inter">
            {t.aboutSubtitle}
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/img/testimonial-4.jpg"
                alt="Hannu Salo"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading text-secondary">{t.myStory}</h2>
              <p className="text-lg mb-8 font-inter">{t.myStoryContent}</p>
              
              <h2 className="text-3xl font-bold mb-6 font-heading text-secondary">{t.myApproach}</h2>
              <p className="text-lg font-inter">{t.myApproachContent}</p>
            </div>
          </div>
        
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">{t.getInTouch}</h2>
            <Link href="/contact" className="btn btn-primary btn-lg font-inter">
              {t.contactMe}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}