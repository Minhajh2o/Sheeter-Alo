import { Link } from 'react-router';
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

const Register = () => {
 
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <AuthShowcase
        title="Create your donor profile"
        subtitle="Unlock personalized dashboards, progress tracking, and collaborative drives."
      />
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Step into the circle</p>
          <h1 className="text-3xl font-bold">Register in minutes</h1>
          <p className="text-slate-200/80">Fill the details below so we can tailor pickup logistics for you.</p>
        </div>
        <form className="flex flex-col space-y-3">
            {/* Name input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Name</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-sky-400">
              <FaUserLarge className="text-xl text-sky-200" />
              <input
                type="text"
                name="name"
                className="flex-1 bg-transparent text-base text-white placeholder-slate-400 outline-none"
                placeholder="Afyah Islam"
                autoComplete="name"
                required
              />
            </div>
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
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
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
                name="password"
                className={`w-full rounded-2xl border bg-slate-950/60 py-3 pl-12 pr-12 text-base text-white placeholder-slate-400 outline-none transition focus:border-sky-400`}
                autoComplete="new-password"
                required
                placeholder="Create a strong passphrase"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-200"
                aria-label="Toggle password visibility"
              >
              <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />
              </button>
            </div>
            <p className="text-xs text-slate-400">Must include uppercase, lowercase, and 6+ characters.</p>
          </label>
            {/* Confirm Password input */}
          <label className="flex flex-col space-y-1 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Confirm Password</span>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <FaLock className="text-xl text-sky-200" />
              </div>
              <input
                name="confirmPassword"
                className={`w-full rounded-2xl border bg-slate-950/60 py-3 pl-12 pr-12 text-base text-white placeholder-slate-400 outline-none transition focus:border-sky-400`}
                autoComplete="new-password"
                required
                placeholder="Re-enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-200"
                aria-label="Toggle confirm password visibility"
              >
              </button>
            </div>
          </label>
          <div className="space-y-2 text-sm text-slate-100 mt-2">
            <label className="flex items-start gap-3 text-left">
              <input
                type="checkbox"
                name="acceptTerms"
                className="checkbox checkbox-sm border-white/30"
              />
              <span className="text-slate-200/90">
                I accept the{' '}
                <Link className="link" to="/terms">
                  terms &amp; conditions
                </Link>{' '}
                and consent to Sheeter Alo.
              </span>
            </label>
          </div>
          <FrostButton type="submit" className="w-full" >
          </FrostButton>
        </form>
        <button
          type="button"
          className="btn btn-outline flex w-full items-center justify-center gap-2 border-white/20 text-white"
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
