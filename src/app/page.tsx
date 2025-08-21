import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-5xl mx-auto px-4"> {/* Same width as navbar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">Hannu Salo</h1>
              <p className="text-xl">
                Elevate your sound with professional mixing, mastering, and production services.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/portfolio" className="btn btn-primary">
                  View My Work
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="relative w-[600px] h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
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
        <h2 className="text-3xl text-center mb-8">Featured Work</h2>
        {/* <AudioPlayer url="/audio/featured-track.mp3" /> */}
        {/* More content here */}
      </section>
    </>
  );
}