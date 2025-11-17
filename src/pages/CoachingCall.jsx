import { useState } from 'react';
import { useNavigate } from 'react-router';
import CoachingCallForm from '../components/cards/CoachingCallForm';
import SectionHeading from '../components/shared-components/SectionHeading';
import FrostButton from '../components/shared-components/FrostButton';

const CoachingCall = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => {
    setShowConfirmation(true);
  };

  const closeModal = () => {
    setShowConfirmation(false);
    navigate('/');
  };

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Coaching"
        title="Plan a winter drive with our coordinators"
        subtitle="Secure a private 25-minute sprint call to map logistics, volunteers, and impact goals."
      />

      <CoachingCallForm onSubmitSuccess={handleSuccess} />

        {/* Confirmation modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-lg space-y-6 rounded-3xl border border-white/15 bg-slate-900/95 p-8 text-center"
          >
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Request received</p>
              <h3 className="text-2xl font-semibold text-white">We&apos;re lining up your call</h3>
              <p className="text-sm text-slate-300">
                A coordinator will reach out with confirmed timing shortly. Check your inbox and WhatsApp for details.
              </p>
            </div>
            <FrostButton type="button" className="w-full" onClick={closeModal}>
              Return to home
            </FrostButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachingCall;
