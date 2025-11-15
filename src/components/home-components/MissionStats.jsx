import InfoChip from '../shared-components/InfoChip';

const missionStats = [
  { label: 'Divisions Covered', value: '08', icon: '❄️' },
  { label: 'Volunteers', value: '1,200+', icon: '🤝' },
  { label: "This Week's Goal", value: '4,500 items', icon: '🧥' },
];

const MissionStats = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {missionStats.map((stat) => (
      <InfoChip key={stat.label} {...stat} />
    ))}
  </div>
);

export default MissionStats;
