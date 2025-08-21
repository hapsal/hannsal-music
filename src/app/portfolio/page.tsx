'use client'

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-primary/10 to-base-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.portfolioTitle}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            {t.portfolioSubtitle}
          </p>
        </div>
      </section>
      
      {/* Filter Buttons */}
      <section className="py-8 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
            >
              {t.allProjects}
            </button>
            <button 
              onClick={() => setFilter('mixing')}
              className={`btn ${filter === 'mixing' ? 'btn-primary' : 'btn-outline'}`}
            >
              {t.mixing}
            </button>
            <button 
              onClick={() => setFilter('production')}
              className={`btn ${filter === 'production' ? 'btn-primary' : 'btn-outline'}`}
            >
              {t.production}
            </button>
            <button 
              onClick={() => setFilter('mastering')}
              className={`btn ${filter === 'mastering' ? 'btn-primary' : 'btn-outline'}`}
            >
              {t.mastering}
            </button>
            <button 
              onClick={() => setFilter('session')}
              className={`btn ${filter === 'session' ? 'btn-primary' : 'btn-outline'}`}
            >
              {t.session}
            </button>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="card bg-base-200 shadow-xl overflow-hidden">
                <figure className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="text-base-content/70">{project.artist}</p>
                  <p>{project.description[language as 'en' | 'fi']}</p>
                  <div className="card-actions justify-end mt-4">
                    <Link 
                      href={`/portfolio/${project.id}`} 
                      className="btn btn-primary"
                    >
                      {t.projectDetails}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}