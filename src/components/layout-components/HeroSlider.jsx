import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import FrostButton from '../shared-components/FrostButton';

const slides = [
  {
    id: 1,
    title: 'Wrap Rangpur in Warmth',
    description: 'Deliver 2,000 winter bundles before the mercury dips below 10°C.',
    image: 'https://i.ibb.co.com/cSJ3zN4F/Rangpur.png',
  },
  {
    id: 2,
    title: 'Smiles Across Hill Tracts',
    description: 'Support Indigenous families with insulated layers and bamboo-fiber blankets.',
    image: 'https://i.ibb.co.com/VYPhChXY/Hill-Tract.png',
  },
  {
    id: 3,
    title: 'Night Shelters Need You',
    description: 'Street-connected children in Dhaka deserve cozy sweaters this week.',
    image: 'https://i.ibb.co.com/0VCwdCLr/Night-Shelter.png',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6 animate__animated animate__fadeIn">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Winter of Care · ২০২৫</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            {slides[current].title}
          </h1>
          <p className="text-lg text-slate-100/90">{slides[current].description}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/campaigns">
              <FrostButton>View Campaigns</FrostButton>
            </Link>
            <Link to="/how-to-help">
              <FrostButton variant="ghost">How to Help</FrostButton>
            </Link>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40">
          {slides[current].image ? (
            <img src={slides[current].image} alt={slides[current].title} className="h-full w-full object-cover" />
          ) : (
            <p className="p-6 text-sm text-slate-200">
              Insert a cinematic winter photo for “{slides[current].title}” here (wide shot, frosty color grading).
            </p>
          )}
        </div>
      </div>
      <div className="mt-10 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2 flex-1 rounded-full transition ${
              index === current ? 'bg-sky-400' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
