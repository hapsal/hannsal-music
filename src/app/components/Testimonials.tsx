'use client'

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 3 ? 0 : current + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    t.testimonial1,
    t.testimonial2,
    t.testimonial3,
    t.testimonial4
  ];
  
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
          {t.testimonialsTitle}
        </h2>
        
        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-base-100 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                        </svg>
                      </div>
                      
                      <p className="text-lg mb-6 italic font-inter">"{testimonial.text}"</p>
                      
                      <div className="flex items-center">
                        <div className="avatar">
                          <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image 
                              src={`/img/testimonial-${index + 1}.jpg`} 
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="ml-4 text-left">
                          <p className="font-bold font-inter">{testimonial.name}</p>
                          <p className="text-sm opacity-70 font-inter">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}