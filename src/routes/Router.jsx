import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
    },
]);

export default Router;