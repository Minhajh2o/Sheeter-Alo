import HeroSlider from "../components/layout-components/HeroSlider";
import SectionHeading from '../components/shared-components/SectionHeading';
import MissionStats from '../components/home-components/MissionStats';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Banner */}
      <HeroSlider />

      {/* Our Promise */}
      <section className="space-y-8 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
        <SectionHeading
          eyebrow="Our Promise"
          title="Sheeter Alo (শীতের আলো) spreads soft light through winter nights"
          subtitle="We mobilize donors, volunteers, and rural networks so every child in Bangladesh has something warm to wear when the mercury drops."
        />
        <MissionStats />
      </section>

      {/* How to help */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="How to help"
          title="Three simple steps to send warmth"
          subtitle="Our micro-components keep the flow effortless so you can focus on generosity."
        />
        <HowItWorksGrid />
      </section>
    </div>
  );
};

export default Home;