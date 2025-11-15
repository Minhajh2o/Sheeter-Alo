const HowToHelpCard = ({ step, title, description }) => (
  <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/80 text-2xl font-bold text-white">
      {step}
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-slate-200/80">{description}</p>
    </div>
  </div>
);

export default HowToHelpCard;
