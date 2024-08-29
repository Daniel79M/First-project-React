import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Registration from './Pages/Registration/Registration.jsx';
import OtpCode from './Pages/OtpCode/OtpCode.jsx';
import Dashboad from './Components/Dasboard/Dashboad.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/otp-code",
    element: <OtpCode />,
  },
  {
    path: "/Dashboard",
    element: <Dashboad />,
  },

  // modification de l'erreur 
  // {
  //   path: "/*",
  //   element: <h2 Url not fond />,
  // },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
