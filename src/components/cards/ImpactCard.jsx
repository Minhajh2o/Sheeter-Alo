const ImpactCard = ({ label, value, detail }) => (
  <div className="rounded-3xl border border-sky-100/20 bg-slate-900/30 p-6 text-white shadow-2xl shadow-slate-950/40 space-y-2">
    <p className="text-sm uppercase tracking-[0.2em] text-sky-200">{label}</p>
    <p className="text-4xl font-black text-sky-50">{value}</p>
    <p className="text-sm text-slate-300">{detail}</p>
  </div>
);

export default ImpactCard;
