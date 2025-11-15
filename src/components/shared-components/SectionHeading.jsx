const alignmentMap = {
  center: 'text-center',
  left: 'text-left',
  right: 'text-right',
};

const SectionHeading = ({ eyebrow, title, subtitle, alignment = 'center' }) => {
  const containerClass = `space-y-3 ${alignmentMap[alignment] || alignmentMap.center}`;
  const subtitleClass = `text-slate-200/80 max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`;

  return (
    <div className={containerClass}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-slate-50 drop-shadow-lg">{title}</h2>
      {subtitle && <p className={subtitleClass.trim()}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
