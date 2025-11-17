import { divisionHighlights } from '../../data/homeContent';

const DivisionSpotlight = () => (
  <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100">
    <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Division spotlight</p>
    {divisionHighlights.map((highlight) => (
      <div key={highlight.title} className="space-y-1 rounded-2xl border border-slate-100/10 bg-slate-900/40 p-5">
        <h4 className="text-lg font-semibold">{highlight.title}</h4>
        <p className="text-sm text-slate-200/80">{highlight.description}</p>
      </div>
    ))}
  </div>
);

export default DivisionSpotlight;
