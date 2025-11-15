import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import {
  FaEnvelope,
  FaLock,
  FaRegImage,
  FaUserLarge,
  FaGoogle,
  FaSnowflake,
} from 'react-icons/fa6';
import { FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { LuHeartHandshake, LuSparkles, LuMapPin } from 'react-icons/lu';
import FrostButton from '../components/shared-components/FrostButton';
import AuthShowcase from '../components/layout-components/AuthShowcase';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const {
    register: createUser,
    updateUser: updateUserProfile,
    googleLogin: signInWithGoogle,
  } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (!name) return;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    else if (!/(?=.*[a-z])/.test(formData.password)) newErrors.password = 'Password must have a lowercase letter';
    else if (!/(?=.*[A-Z])/.test(formData.password)) newErrors.password = 'Password must have an uppercase letter';

    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await createUser({
        name: formData.name.trim(),
        email: formData.email,
        photoURL: formData.photoURL,
        password: formData.password,
      });

      if (formData.photoURL || formData.name.trim()) {
        await updateUserProfile({
          name: formData.name.trim(),
          photoURL: formData.photoURL || null,
        });
      }

      toast.success('Account created successfully!', {
        position: 'top-right',
        duration: 3000,
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
      let message = 'Registration failed. Please try again.';
      if (error.code === 'auth/email-already-in-use') {
        message = 'This email is already registered';
        setErrors((prev) => ({ ...prev, email: message }));
      } else if (error.code === 'auth/weak-password') {
        message = 'Password is too weak';
        setErrors((prev) => ({ ...prev, password: message }));
      } else {
        setErrors((prev) => ({ ...prev, password: message }));
      }
      toast.error(message, {
        position: 'top-right',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      toast.success('Account created successfully with Google!', {
        position: 'top-right',
        duration: 3000,
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
      const message = 'Google sign-up failed. Please try again.';
      setErrors((prev) => ({ ...prev, password: message }));
      toast.error(message, {
        position: 'top-right',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const registerHighlights = useMemo(
    () => [
      {
        icon: LuHeartHandshake,
        heading: 'Impactful storytelling',
        description: 'Profiles let us tag your donations to the exact community you care about.',
      },
      {
        icon: PiUsersThreeDuotone,
        heading: 'Volunteer corridors',
        description: 'Bring friends — team dashboards unlock once you create an account.',
      },
      {
        icon: LuMapPin,
        heading: 'Hyperlocal drop zones',
        description: 'Mark precise pickup coordinates so couriers know exactly where to hand off.',
      },
      {
        icon: LuSparkles,
        heading: 'Priority alerts',
        description: 'Registered donors get frostbite risk push notifications per division.',
      },
      {
        icon: FaSnowflake,
        heading: 'Seasonal badges',
        description: 'Earn winter badges each time you support a new division and unlock exclusive care guides.',
      },
    ],
    [],
  );

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <AuthShowcase
        title="Create your donor profile"
        subtitle="Unlock personalized dashboards, progress tracking, and collaborative drives."
        items={registerHighlights}
      />
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Step into the circle</p>
          <h1 className="text-3xl font-bold">Register in minutes</h1>
          <p className="text-slate-200/80">Fill the details below so we can tailor pickup logistics for you.</p>
        </div>
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            {/* Name input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Name</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-sky-400">
              <FaUserLarge className="text-xl text-sky-200" />
              <input
                type="text"
                name="name"
                className="flex-1 bg-transparent text-base text-white placeholder-slate-400 outline-none"
                value={formData.name}
                onChange={handleChange}
                placeholder="Afyah Islam"
                autoComplete="name"
                required
              />
            </div>
            {errors.name && <p className="text-xs text-red-300">{errors.name}</p>}
          </label>
            {/* Email input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-sky-400">
              <FaEnvelope className="text-xl text-sky-200" />
              <input
                type="email"
                name="email"
                className="flex-1 bg-transparent text-base text-white placeholder-slate-400 outline-none"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            {errors.email && <p className="text-xs text-red-300">{errors.email}</p>}
          </label>
          {/* Photo URL input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Photo URL</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-sky-400">
              <FaRegImage className="text-xl text-sky-200" />
              <input
                type="url"
                name="photoURL"
                className="flex-1 bg-transparent text-base text-white placeholder-slate-400 outline-none"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="https://images.example/avatar.jpg"
              />
            </div>
          </label>
            {/* Password input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
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
                autoComplete="new-password"
                required
                placeholder="Create a strong passphrase"
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
            <p className="text-xs text-slate-400">Must include uppercase, lowercase, and 6+ characters.</p>
            {errors.password && <p className="text-xs text-red-300">{errors.password}</p>}
          </label>
            {/* Confirm Password input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Confirm Password</span>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <FaLock className="text-xl text-sky-200" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                className={`w-full rounded-2xl border bg-slate-950/60 py-3 pl-12 pr-12 text-base text-white placeholder-slate-400 outline-none transition focus:border-sky-400 ${errors.confirmPassword ? 'border-red-400/70' : 'border-white/10'}`}
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
                placeholder="Re-enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-200"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-xs text-red-300">{errors.confirmPassword}</p>}
            {!errors.confirmPassword &&
              formData.confirmPassword &&
              formData.password &&
              formData.password === formData.confirmPassword && (
                <p className="flex items-center gap-2 text-xs text-emerald-300 mb-2">
                  <FaCheckCircle /> Passwords match
                </p>
              )}
          </label>
          <div className="space-y-2 text-sm text-slate-100 mt-2">
            <label className="flex items-start gap-3 text-left">
              <input
                type="checkbox"
                name="acceptTerms"
                className="checkbox checkbox-sm border-white/30"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <span className="text-slate-200/90">
                I accept the{' '}
                <Link className="link" to="/terms">
                  terms &amp; conditions
                </Link>{' '}
                and consent to Sheeter Alo.
              </span>
            </label>
            {errors.acceptTerms && <p className="text-xs text-red-300">{errors.acceptTerms}</p>}
          </div>
          <FrostButton type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Registering…' : 'Register'}
          </FrostButton>
        </form>
        <button
          type="button"
          className="btn btn-outline flex w-full items-center justify-center gap-2 border-white/20 text-white"
          onClick={handleGoogleSignup}
          disabled={isLoading}
        >
          <FaGoogle /> Continue with Google
        </button>
        <p className="text-sm text-slate-300 text-center">
          Already have an account? <Link className="link" to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
