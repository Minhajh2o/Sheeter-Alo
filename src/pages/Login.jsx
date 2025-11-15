import { Link, useLocation, useNavigate } from 'react-router';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope, FaLock, FaGoogle, FaTemperatureLow } from 'react-icons/fa6';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GiGloves } from 'react-icons/gi';
import { BsThermometerSnow } from 'react-icons/bs';
import FrostButton from '../components/shared-components/FrostButton';
import AuthShowcase from '../components/layout-components/AuthShowcase';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login, googleLogin, setAuthPersistence } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (!name) return;
    const newValue = type === 'checkbox' ? checked : value.trimStart();
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await setAuthPersistence(formData.rememberMe);
      await login({ email: formData.email, password: formData.password });
      toast.success('Welcome back to Sheeter Alo');
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      let message = 'An error occurred. Please try again.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        message = 'Invalid email or password';
      } else if (error.code === 'auth/too-many-requests') {
        message = 'Too many failed attempts. Please try again later.';
      }
      setErrors((prev) => ({ ...prev, password: message }));
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    try {
      await setAuthPersistence(formData.rememberMe);
      await googleLogin();
      toast.success('Google login successful');
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      const message = 'Google sign-in failed. Please try again.';
      setErrors((prev) => ({ ...prev, password: message }));
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHighlights = useMemo(
    () => [
      {
        icon: FaTemperatureLow,
        heading: 'Track live cold alerts',
        description: 'Login unlocks division-level frost updates pushed every 6 hours.',
      },
      {
        icon: GiGloves,
        heading: 'Save pickup presets',
        description: 'Store safe pickup zones so volunteers can coordinate faster.',
      },
      {
        icon: BsThermometerSnow,
        heading: 'Get emergency pings',
        description: 'Authenticated donors receive SMS when shelters run out of blankets.',
      },
    ],
    [],
  );

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <AuthShowcase
        title="Login to share warmth"
        subtitle="Personalize your donation journey, see urgent alerts, and keep winter heroes safe."
        items={loginHighlights}
      />

      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className='space-y-2'>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Secure access</p>
          <h1 className="text-3xl font-bold">Enter your credentials</h1>
          <p className="text-slate-200/80">Welcome back! Continue your Sheeter Alo mission.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="space-y-2 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-sky-400">
              <FaEnvelope className="text-xl text-sky-200" />
              <input
                type="email"
                name="email"
                className="flex-1 bg-transparent text-base text-white placeholder-slate-400 outline-none"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="text-xs text-red-300">{errors.email}</p>}
          </label>
          <label className="space-y-2 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Password</span>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <FaLock className="text-xl text-sky-200" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className={`w-full rounded-2xl border bg-slate-950/60 py-3 pl-12 pr-12 text-base text-white placeholder-slate-400 outline-none transition focus:border-sky-400 ${errors.password ? 'border-red-400/70' : 'border-white/10'}`}
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-200"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-300">{errors.password}</p>}
          </label>
          <div className="flex flex-wrap items-center justify-between text-sm text-slate-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                className="checkbox checkbox-sm border-white/30"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>
            <Link
              to={`/forgot-password${formData.email ? `?email=${encodeURIComponent(formData.email)}` : ''}`}
              className="link"
            >
              Forgot password?
            </Link>
          </div>
          <FrostButton type="submit" className="w-full" disabled={isLoading}>
            Login
          </FrostButton>
        </form>
        <p className="text-center text-sm text-slate-300">
            Need an account? <Link className="link" to="/register">Register</Link>
        </p>
        <button
          type="button"
          className="btn btn-outline flex w-full items-center justify-center gap-2 border-white/20 text-white"
          onClick={handleGoogle}
          disabled={isLoading}
        >
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
