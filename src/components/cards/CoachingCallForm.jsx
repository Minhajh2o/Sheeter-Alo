import { useState } from "react";
import FrostButton from "../shared-components/FrostButton";

const initialState = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  preferredDate: "",
  focusArea: "",
  notes: "",
};

const CoachingCallForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState(initialState);

  const updateField = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-slate-100 shadow-lg shadow-slate-900/20 sm:p-8"
    >
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-200">Book a coaching call</p>
        <h3 className="text-2xl font-semibold text-white">Plan your winter drive with a coordinator</h3>
        <p className="text-sm text-slate-300">
          Share your focus, and we will match you with a division lead for a quick 25-minute strategy sprint.
        </p>
      </div>

        {/* Name field */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-slate-200">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.fullName}
            onChange={updateField("fullName")}
            required
          />
        </div>

        {/* Organization field */}
        <div className="space-y-2">
          <label htmlFor="organization" className="text-sm font-medium text-slate-200">
            Organization / group
          </label>
          <input
            id="organization"
            type="text"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.organization}
            onChange={updateField("organization")}
            placeholder="School club, office team, etc."
            required
          />
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-200">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.email}
            onChange={updateField("email")}
            required
          />
        </div>

        {/* Phone number field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-200">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.phone}
            onChange={updateField("phone")}
            placeholder="+8801X-XXXXXXX"
            required
          />
        </div>

        {/* Preferred date field */}
        <div className="space-y-2">
          <label htmlFor="preferredDate" className="text-sm font-medium text-slate-200">
            Preferred date
          </label>
          <input
            id="preferredDate"
            type="date"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.preferredDate}
            onChange={updateField("preferredDate")}
            required
          />
        </div>

        {/* Focus area field */}
        <div className="space-y-2">
          <label htmlFor="focusArea" className="text-sm font-medium text-slate-200">
            Focus area
          </label>
          <select
            id="focusArea"
            className="select select-bordered w-full bg-slate-900/80"
            value={formData.focusArea}
            onChange={updateField("focusArea")}
            required
          >
            <option value="">Select one</option>
            <option value="campus">Campus drive</option>
            <option value="corporate">Corporate collection</option>
            <option value="community">Community mapping</option>
            <option value="logistics">Logistics support</option>
          </select>
        </div>
      </div>

        {/* Additional context field */}
      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium text-slate-200">
          Additional context
        </label>
        <textarea
          id="notes"
          rows={4}
          className="textarea textarea-bordered w-full bg-slate-900/70"
          value={formData.notes}
          onChange={updateField("notes")}
          placeholder="Share preferred time slots or unique logistics."
        />
      </div>

        {/* Submission section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-400">We respond within 12 hours for Dhaka-based drives, 24 hours nationwide.</p>
        <FrostButton type="submit" className="w-full sm:w-auto">
          Schedule the call
        </FrostButton>
      </div>
    </form>
  );
};

export default CoachingCallForm;
