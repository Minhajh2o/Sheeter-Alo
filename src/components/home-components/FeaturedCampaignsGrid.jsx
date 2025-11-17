import CampaignCard from '../cards/CampaignCard';

const FeaturedCampaignsGrid = ({ campaigns }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {campaigns.map((campaign) => (
      <CampaignCard key={campaign.id} campaign={campaign} />
    ))}
  </div>
);

export default FeaturedCampaignsGrid;
