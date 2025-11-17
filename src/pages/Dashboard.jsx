import { Link } from 'react-router';
import { FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { useAuth } from '../provider/AuthProvider';
import SectionHeading from '../components/shared-components/SectionHeading';
import InfoChip from '../components/shared-components/InfoChip';
import FrostButton from '../components/shared-components/FrostButton';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Dashboard"
        title={`Welcome back, ${user?.displayName || 'Friend'}`}
        subtitle="Track your donation history, volunteer calls, and quick actions."
        alignment="left"
      />

      <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <img
            src={user?.photoURL || 'https://i.ibb.co/1dC4sHn/avatar-placeholder.png'}
            alt={user?.displayName || 'Profile'}
            className="h-28 w-28 rounded-full border-4 border-sky-300 object-cover"
          />
          <div>
            <p className="text-2xl font-bold">{user?.displayName}</p>
            <p className="text-slate-200">{user?.email}</p>
          </div>
          <Link to="/update-profile">
            <FrostButton>Update profile</FrostButton>
          </Link>
        </div>
        <div className="grid gap-4">
          <InfoChip label="Bundles pledged" value="12" icon={<FaPeopleGroup />} />
          <InfoChip label="Volunteer hours" value="36" icon={<MdOutlineVolunteerActivism />} />
          <InfoChip label="Upcoming pickups" value="2" icon={<FaLocationDot />} />
        </div>
      </div>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/40 p-8">
        <h3 className="text-xl font-semibold">Recent activity</h3>
        <div className="space-y-3 text-sm text-slate-200">
          <p className="flex items-center gap-2"><FaLocationDot className="text-sky-300" /> Confirmed pickup · Rangpur · 3 blankets</p>
          <p className="flex items-center gap-2"><MdOutlineVolunteerActivism className="text-sky-300" /> Joined Sylhet WhatsApp pod</p>
          <p className="flex items-center gap-2"><FaPeopleGroup className="text-sky-300" /> RSVP’d for Friday midnight distribution</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
