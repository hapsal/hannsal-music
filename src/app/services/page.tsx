'use client'

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';

export default function ServicesPage() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-primary/10 to-base-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-primary">{t.servicesTitle}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 font-inter">
            {t.servicesSubtitle}
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        
            {/* Production Service */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <figure className="px-6 pt-6">
                <Image
                  src="/img/production_temp.jpg"
                  alt="Music Production"
                  width={600}
                  height={300}
                  className="rounded-xl object-cover h-60 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-heading text-secondary">{t.productionTitle}</h2>
                <p className='font-inter'>{t.productionDesc}</p>
                <div className="mt-4 font-semibold text-accent font-inter">
                  {t.productionPrice}
                </div>
                
              </div>
            </div>
            
            {/* Mixing Service */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <figure className="px-6 pt-6">
                <Image
                  src="/img/mixconsole_temp.jpg"
                  alt="Mixing Console"
                  width={600}
                  height={300}
                  className="rounded-xl object-cover h-60 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-heading text-secondary">{t.mixingTitle}</h2>
                <p className='font-inter'>{t.mixingDesc}</p>
                <div className="mt-4 font-semibold text-accent font-inter">
                  {t.mixingPrice}
                </div>
              </div>
            </div>

            {/* Live Mixing Service */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <figure className="px-6 pt-6">
                <Image
                  src="/img/live-mixing.jpg"
                  alt="Live Mixing Console"
                  width={600}
                  height={300}
                  className="rounded-xl object-cover h-60 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-heading text-secondary">{t.liveMixingTitle}</h2>
                <p className='font-inter'>{t.liveMixingDesc}</p>
                <div className="mt-4 font-semibold text-accent font-inter">
                  {t.liveMixingPrice}
                </div>
              </div>
            </div>
            
            {/* Mastering Service */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <figure className="px-6 pt-6">
                <Image
                  src="/img/temp_mastering.jpg"
                  alt="Mastering Equipment"
                  width={600}
                  height={300}
                  className="rounded-xl object-cover h-60 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-heading text-secondary">{t.masteringTitle}</h2>
                <p className='font-inter'>{t.masteringDesc}</p>
                <div className="mt-4 font-semibold text-accent font-inter">
                  {t.masteringPrice}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">{t.interestedIn}</h2>
          <Link href="/contact" className="btn btn-primary btn-lg font-inter">
            {t.getQuote}
          </Link>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <Testimonials />
      </section>
    </>
  );
}