import { useState } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import FrostButton from '../components/shared-components/FrostButton';

const UpdateProfile = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: user?.displayName || '',
    photoURL: user?.photoURL || '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(formState)
      .then(() => {
        toast.success('Profile updated');
        navigate('/dashboard');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="mx-auto max-w-md space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <h1 className="text-3xl font-bold">Update profile</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="form-control">
          <span className="label-text text-slate-200">Name</span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="input input-bordered bg-slate-900/70"
          />
        </label>
        <label className="form-control">
          <span className="label-text text-slate-200">Photo URL</span>
          <input
            type="url"
            name="photoURL"
            value={formState.photoURL}
            onChange={handleChange}
            className="input input-bordered bg-slate-900/70"
          />
        </label>
        {error && <p className="text-sm text-red-300">{error}</p>}
        <FrostButton type="submit" className="w-full">
          Save changes
        </FrostButton>
      </form>
    </div>
  );
};

export default UpdateProfile;
