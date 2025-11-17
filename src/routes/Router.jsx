import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import Campaigns from '../pages/Campaigns';
import CampaignDetails from '../pages/CampaignDetails';
import HowToHelp from '../pages/HowToHelp';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import UpdateProfile from '../pages/UpdateProfile';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import winterCampaigns from '../data/campaign.json';
import CoachingCall from '../pages/CoachingCall';

const campaignDetailLoader = ({ params }) => {
    const campaign = winterCampaigns.find((item) => item.id === Number(params.id));
    if (!campaign) {
        throw new Response('Campaign not found', { status: 404 });
    }
    return campaign;
};

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'campaigns', element: <Campaigns /> },
            {
                path: 'campaigns/:id',
                loader: campaignDetailLoader,
                element: (
                    <ProtectedRoute>
                        <CampaignDetails />
                    </ProtectedRoute>
                ),
            },
            { path: 'how-to-help', element: <HowToHelp /> },
            {
                path: 'coaching-call',
                element: (
                    <ProtectedRoute>
                        <CoachingCall />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'update-profile',
                element: (
                    <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                ),
            },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'forgot-password', element: <ForgotPassword /> },
        ],
    },
    { path: '*', element: <ErrorPage /> },
]);

export default Router;