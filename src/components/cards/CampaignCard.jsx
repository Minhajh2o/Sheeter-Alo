import { Link } from 'react-router';
import FrostButton from '../shared-components/FrostButton';

const CampaignCard = ({ campaign }) => (
  <article className="group flex flex-col rounded-3xl border border-white/10 bg-linear-to-b from-slate-900/70 to-slate-900/40 p-4 text-white shadow-2xl shadow-slate-900/60">
    <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-800/70">
      {campaign.image ? (
        <img src={campaign.image} alt={campaign.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center text-center text-sm text-slate-300">
          <span className="text-lg font-semibold">Image Coming Soon</span>
          <p className="text-xs">Use a {campaign.division} winter relief shot</p>
        </div>
      )}
      <span className="badge badge-info absolute left-4 top-4 bg-sky-500/80 text-white backdrop-blur">
        {campaign.status}
      </span>
    </div>
    <div className="space-y-3 p-4">
      <h3 className="text-2xl font-bold">{campaign.title}</h3>
      <p className="text-sm text-slate-200/80">{campaign.description}</p>
      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-300">
        <span className="rounded-full border border-slate-500/40 px-3 py-1">{campaign.division}</span>
        <span className="rounded-full border border-slate-500/40 px-3 py-1">Needs: {campaign.needs.slice(0, 2).join(', ')}</span>
      </div>
    </div>
    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-200">
      <span>{campaign.contactInfo}</span>
      <Link to={`/campaigns/${campaign.id}`}>
        <FrostButton className="animate__animated animate__fadeInUp" variant="primary">
          Donate Now
        </FrostButton>
      </Link>
    </div>
  </article>
);

export default CampaignCard;
