'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-5xl mx-auto px-4"> {/* Same width as navbar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">Hannu Salo</h1>
              <p className="text-xl">
                {t.heroSubtitle}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/portfolio" className="btn btn-primary">
                  {t.viewWork}
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  {t.getInTouch}
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              {/* Replace with your own studio/equipment image */}
              <Image
                src="/img/temp_studio.jpg" 
                alt="Music Studio"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl text-center mb-8">{t.featured}</h2>
        {/* <AudioPlayer url="/audio/featured-track.mp3" /> */}
        {/* More content here */}
      </section>
    </>
  );
}