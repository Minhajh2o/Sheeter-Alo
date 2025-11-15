const InfoChip = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 shadow-inner shadow-slate-950/60">
    {icon && <span className="text-xl text-sky-300">{icon}</span>}
    <div>
      <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  </div>
);

export default InfoChip;
