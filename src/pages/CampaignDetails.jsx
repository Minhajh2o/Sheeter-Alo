import { useLoaderData } from "react-router";
import CampaignDetailsCard from "../components/cards/CampaignDetailsCard";
import DonationForm from "../components/cards/DonationForm";

const CampaignDetails = () => {
  const campaign = useLoaderData();

  return (
    <div className="space-y-10">
      <CampaignDetailsCard campaign={campaign} />
      <DonationForm />
    </div>
  );
};

export default CampaignDetails;
