'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './contexts/LanguageContext';
import AudioPlayer from './components/AudioPlayer';

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-5xl mx-auto px-4"> {/* Same width as navbar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold font-heading text-primary">Hannu Salo</h1>
              <p className="text-xl font-inter">
                {t.heroSubtitle}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/portfolio" className="btn btn-primary font-inter">
                  {t.viewWork}
                </Link>
                <Link href="/contact" className="btn btn-outline font-inter">
                  {t.getInTouch}
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
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
        <h2 className="text-3xl text-center mb-8 font-heading">{t.featured}</h2>
          <AudioPlayer 
            url="/audio/featured-track.mp3" 
            title="New Lives"
            artist="HANNSAL"
            coverArt="/img/temp_song.jpg"  // Optional: Add album artwork
          />
          <div className="text-center mt-4">
            <p className="text-sm opacity-75">Kuuntele viimeisin julkaisuni</p>
          </div>
        </section>
    </>
  );
}