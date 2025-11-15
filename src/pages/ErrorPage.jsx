import { Link, useRouteError } from 'react-router';
import FrostButton from '../components/shared-components/FrostButton';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Winter winds carried us off-route</p>
        <h1 className="text-6xl font-black">404</h1>
        <p className="text-slate-300">{error?.statusText || error?.message || 'Page not found'}</p>
      </div>
      <Link to="/">
        <FrostButton>Back to Home</FrostButton>
      </Link>
    </div>
  );
};

export default ErrorPage;
