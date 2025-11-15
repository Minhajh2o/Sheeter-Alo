const CampaignDetailsCard = ({ campaign }) => (
  <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-2">
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-[0.4em] text-sky-200">{campaign.division}</p>
      <h1 className="text-4xl font-black">{campaign.title}</h1>
      <p className="text-lg text-slate-100/90">{campaign.description}</p>
      <div className="space-y-2 text-sm text-slate-200">
        <p>
          Status:{" "}
          <span className="badge badge-info badge-outline">{campaign.status}</span>
        </p>
        <p>Contact: {campaign.contactInfo}</p>
        <p>Collection points: {campaign.collectionPoints.join(", ")}</p>
        <p>Top needs: {campaign.needs.join(", ")}</p>
      </div>
    </div>
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
      {campaign.image ? (
        <img src={campaign.image} alt={campaign.title} className="h-full w-full object-cover" />
      ) : (
        <p className="p-6 text-sm text-slate-200">
          Add a dramatic winter relief photo here — think foggy dawn, volunteers handing blankets, gentle snow overlay.
        </p>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent" />
    </div>
  </div>
);

export default CampaignDetailsCard;
