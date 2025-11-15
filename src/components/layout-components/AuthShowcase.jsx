const AuthShowcase = ({ title, subtitle, items }) => (
  <div className="space-y-6 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-900/30 to-slate-900/60 p-8 text-white shadow-2xl">
    <div className="space-y-2">
      <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Join the warmth wave</p>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-slate-200/80">{subtitle}</p>
    </div>
    <ul className="space-y-4">
      {items.map(({ icon: Icon, heading, description }) => (
        <li key={heading} className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
          {Icon && <Icon className="text-3xl text-sky-300 mt-1" />}
          <div className="space-y-0.5">
            <p className="text-lg font-semibold">{heading}</p>
            <p className="text-sm text-slate-200/80">{description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthShowcase;
