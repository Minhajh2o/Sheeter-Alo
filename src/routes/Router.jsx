import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Campaigns from "../pages/Campaigns";
import CampaignDetails from "../pages/CampaignDetails";
import winterCampaigns from "../data/campaign.json";
import ProtectedRoute from "./ProtectedRoute";
import HowToHelp from "../pages/HowToHelp";

const campaignDetailLoader = ({ params }) => {
  const campaign = winterCampaigns.find(
    (item) => item.id === Number(params.id)
  );
  if (!campaign) {
    throw new Response("Campaign not found", { status: 404 });
  }
  return campaign;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "campaigns", element: <Campaigns /> },
      {
        path: "campaigns/:id",
        loader: campaignDetailLoader,
        element: (
          <ProtectedRoute>
            <CampaignDetails />
          </ProtectedRoute>
        ),
      },
      { path: "how-to-help", element: <HowToHelp /> },
      {
        path: "update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Router;
