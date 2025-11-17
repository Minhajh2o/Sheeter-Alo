import HeroSlider from "../components/layout-components/HeroSlider";
import SectionHeading from "../components/shared-components/SectionHeading";
import MissionStats from "../components/home-components/MissionStats";
import HowItWorksGrid from "../components/home-components/HowItWorksGrid";
import winterCampaigns from "../data/campaign.json";
import FeaturedCampaignsGrid from "../components/home-components/FeaturedCampaignsGrid";
import ImpactMetricsGrid from "../components/home-components/ImpactMetricsGrid";
import DivisionSpotlight from "../components/home-components/DivisionSpotlight";

const Home = () => {
  const featuredCampaigns = winterCampaigns.slice(0, 3);

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

      {/* Featured campaigns */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured campaigns"
          title="Start with the most urgent drives"
          subtitle="Every bundle you send lights up an entire bari (বাড়ি)."
        />
        <FeaturedCampaignsGrid campaigns={featuredCampaigns} />
      </section>

      {/* Impact metrics & Division spotlight */}
      <section className="grid gap-6 rounded-3xl border border-sky-100/10 bg-slate-900/40 p-8 md:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            alignment="left"
            eyebrow="Impact"
            title="Tangible warmth metrics"
            subtitle="Every number here is audited weekly with district coordinators."
          />
          <ImpactMetricsGrid />
        </div>
        <DivisionSpotlight />
      </section>

      {/* Volunteer stories */}
      <section className="space-y-8 rounded-3xl border border-white/10 bg-sky-500/10 p-8 text-center text-white">
        <SectionHeading
          eyebrow="Volunteer stories"
          title="Real voices from winter crews"
          subtitle="Rotating testimonials from coordinators across Bangladesh"
        />
        <VolunteerStoriesSlider />
      </section>
    </div>
  );
};

export default Home;
