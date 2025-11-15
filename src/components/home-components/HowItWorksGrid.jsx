import HowToHelpCard from '../cards/HowToHelpCard';
import { howItWorks } from '../../data/homeContent';

const HowItWorksGrid = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {howItWorks.map((item) => (
      <HowToHelpCard key={item.step} {...item} />
    ))}
  </div>
);

export default HowItWorksGrid;
