const variantStyles = {
  primary: 'bg-sky-500/90 hover:bg-sky-400 text-white border-none shadow-sky-500/30',
  ghost: 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur',
  outline: 'border-2 border-sky-400 text-sky-100 hover:bg-sky-400/20',
};

const FrostButton = ({ children, variant = 'primary', className = '', ...rest }) => (
  <button
    className={`btn rounded-full px-6 transition-all duration-300 ${variantStyles[variant]} ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default FrostButton;
