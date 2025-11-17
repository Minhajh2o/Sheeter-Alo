import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import toast from 'react-hot-toast';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa6';
import { MdOutlineLockReset } from 'react-icons/md';
import FrostButton from '../components/shared-components/FrostButton';
import AuthShowcase from '../components/layout-components/AuthShowcase';
import { useAuth } from '../provider/AuthProvider';

const ForgotPassword = () => {
  const { resetPassword, rememberedEmail } = useAuth();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState(() => searchParams.get('email') || rememberedEmail || '');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    resetPassword(email)
      .then(() => {
        toast.success('Password reset link sent');
        window.location.href = 'https://mail.google.com';
      })
      .catch((err) => setError(err.message));
  };

  const resetHighlights = useMemo(
    () => [
      {
        icon: MdOutlineLockReset,
        heading: 'One-tap Gmail redirect',
        description: 'We take you straight to Gmail so you never lose your reset link.',
      },
      {
        icon: FaPaperPlane,
        heading: 'Encrypted reset emails',
        description: 'All reset emails are sealed with Firebase security best practices.',
      },
    ],
    [],
  );

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <AuthShowcase
        title="Reset your password"
        subtitle="Confirm your email and we will deliver a secure reset link."
        items={resetHighlights}
      />
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className='space-y-2'>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Recover access</p>
          <h1 className="text-3xl font-bold">Check your inbox</h1>
          <p className="text-slate-200/80">We will route you to Gmail after sending the link.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <label className="flex flex-col space-y-2 text-sm text-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 transition focus-within:border-sky-400">
              <FaEnvelope className="text-xl text-sky-200" />
              <input
                type="email"
                className="flex-1 bg-transparent text-base text-white placeholder-slate-400 outline-none"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>
          </label>
          {error && <p className="text-sm text-red-300">{error}</p>}
          <FrostButton type="submit" className="w-full">
            Send reset link
          </FrostButton>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
