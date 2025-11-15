import { Link, useRouteError } from 'react-router';
import FrostButton from '../components/shared-components/FrostButton';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white px-6">
      
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-sky-200">
          Winter winds carried us off-route
        </p>

        <h1 className="text-7xl font-black">404</h1>

        <p className="text-slate-300 text-lg max-w-md mx-auto">
          {error?.statusText || error?.message || 'Page not found'}
        </p>
      </div>

      <div className="mt-8">
        <Link to="/">
          <FrostButton>Back to Home</FrostButton>
        </Link>
      </div>
      
    </div>
  );
};

export default ErrorPage;
