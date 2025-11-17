import { useNavigate } from 'react-router';
import SectionHeading from '../components/shared-components/SectionHeading';
import HowToHelpCard from '../components/cards/HowToHelpCard';
import InfoChip from '../components/shared-components/InfoChip';
import FrostButton from '../components/shared-components/FrostButton';

const helpIdeas = [
  {
    step: 'A',
    title: 'Bundle Calendar',
    description: 'Plan one bundle every Friday night with your family and log it on the dashboard.',
  },
  {
    step: 'B',
    title: 'Corporate Corners',
    description: 'Set up a mini booth at work; we provide printable QR posters + pickup labels.',
  },
  {
    step: 'C',
    title: 'Neighborhood Scouts',
    description: 'Empower teens to map rooftops where extra sweaters are stored and ready to donate.',
  },
];

const resourceLinks = [
  'Volunteer onboarding call (every Tuesday, 8PM).',
  'Printable winter donation checklist.',
  'Division-wise WhatsApp coordinators list.',
];

const HowToHelp = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Guide"
        title="Layer kindness · Layer garments"
        subtitle="From student clubs to garment factories, anybody can activate a winter drive in 24 hours."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {helpIdeas.map((idea) => (
          <HowToHelpCard key={idea.step} {...idea} />
        ))}
      </div>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Quick coordination stats</h3>
          <div className="grid gap-4">
            <InfoChip label="Pickup Vans" value="12 nightly" icon="🚐" />
            <InfoChip label="City Drop Boxes" value="28 active" icon="📦" />
            <InfoChip label="Division Leads" value="8" icon="🧭" />
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/5 bg-white/10 p-6">
          <h4 className="text-lg font-semibold">Resources</h4>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-100">
            {resourceLinks.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
          <FrostButton className="w-full md:w-auto" onClick={() => navigate('/coaching-call')}>
            Book a coaching call
          </FrostButton>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;
