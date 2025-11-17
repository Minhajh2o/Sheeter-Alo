import ImpactCard from '../cards/ImpactCard';

const impactStats = [
  { label: 'Bundles Delivered', value: '18,420', detail: 'Last 30 days' },
  { label: 'Pickup Spots', value: '64', detail: 'Across eight divisions' },
  { label: 'Community Partners', value: '37', detail: 'Local NGOs + youth clubs' },
  { label: 'Emergency Calls', value: '312', detail: 'Answered in 24h' },
];

const ImpactMetricsGrid = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {impactStats.map((stat) => (
      <ImpactCard key={stat.label} {...stat} />
    ))}
  </div>
);

export default ImpactMetricsGrid;
