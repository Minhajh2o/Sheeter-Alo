import { useEffect, useState } from 'react';
import { volunteerStories } from '../../data/homeContent';

const VolunteerStoriesSlider = () => {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % volunteerStories.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextStory = () => setActiveStory((prev) => (prev + 1) % volunteerStories.length);
  const previousStory = () =>
    setActiveStory((prev) => (prev - 1 + volunteerStories.length) % volunteerStories.length);

  const active = volunteerStories[activeStory];

  return (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed text-slate-100/95" aria-live="polite">
        “{active.quote}”
      </p>
      <p className="text-sm uppercase tracking-[0.4em] text-slate-200">
        {active.author} · {active.role} · {active.division}
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previousStory}
          aria-label="Previous volunteer story"
          className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white/10"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextStory}
          aria-label="Next volunteer story"
          className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white/10"
        >
          ›
        </button>
      </div>
      <div className="flex items-center justify-center gap-2">
        {volunteerStories.map((story, index) => (
          <button
            key={story.id}
            type="button"
            className={`h-2 w-8 rounded-full transition ${index === activeStory ? 'bg-white' : 'bg-white/30'}`}
            aria-label={`Show story from ${story.author}`}
            // onClick={() => setActiveStory(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerStoriesSlider;
