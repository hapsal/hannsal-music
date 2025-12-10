'use client'

import { useParams } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import SpotifyEmbed from '../../components/SpotifyEmbed';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
  const { id } = useParams() as { id: string };
  const { t, language } = useLanguage();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/portfolio" className="btn btn-primary mt-8">
          {t.moreProjects}
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Details */}
            <div>
              <h1 className="text-4xl font-bold mb-2 font-heading">{project.title}</h1>
              <h2 className="text-2xl text-primary mb-6 font-heading">{project.artist}</h2>
              
              <div className="mb-8">
                <p className="text-lg mb-6 font-inter">{project.description[language as 'en' | 'fi']}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm opacity-70 font-heading">{t.clientName}</h3>
                    <p className='font-inter'>{project.clientName}</p>
                  </div>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm opacity-70 font-heading">{t.projectType}</h3>
                    <p className='font-inter'>{t[project.category]}</p>
                  </div>
                  <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm opacity-70 font-heading">{t.releaseDate}</h3>
                    <p className='font-inter'>{new Date(project.releaseDate).toLocaleDateString(language === 'fi' ? 'fi-FI' : 'en-US')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <a 
                  href={`https://open.spotify.com/${project.spotifyType}/${project.spotifyId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary font-inter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                  </svg>
                  {t.listenOnSpotify}
                </a>
              </div>
              
              <Link href="/portfolio" className="btn btn-outline font-inter">
                ← {t.moreProjects}
              </Link>
            </div>
            
            {/* Spotify Embed */}
            <div>
              <div className="sticky top-24">
              <SpotifyEmbed 
                spotifyId={project.spotifyId}
                spotifyType="track" 
                title="Lost in furr"
                artist="HANNSAL"
                imageUrl="/img/lost.jpg"
              />
                
                <div className="mt-8 relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover font-inter" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}