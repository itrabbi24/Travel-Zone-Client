import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/Root";
import Login from "../pages/Security/Login";
import Register from "../pages/Security/Register";
// import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import Error from "../pages/Component/Error";
// import TopDestination from "../pages/Component/TopDestination";
import TouristSpot from "../pages/Component/TouristSpot";
import ViewSingleTouristSpot from "../pages/Component/ViewSingleTouristSpot";
// import ForSale from "../pages/Component/ForSale";
// import AboutUs from "../pages/Component/AboutUs";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/User/UpdateProfile";

import AddTouristSpot from "../pages/User/AddTouristSpot";

import AllTouristSpot from "../pages/Component/AllTouristSpot";
import MyList from "../pages/User/MyList";
import ContactUs from "../pages/Component/ContactUs";
// import ContactUs from "../pages/Component/ContactUs";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-in',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <Register></Register>
            },
            {
                path: '/show-single-tourist-spot/:country',
                element: <TouristSpot></TouristSpot>
            },
            {
                path: '/show-single-tourist-spot-details/:id',
                element: <PrivateRoute><ViewSingleTouristSpot></ViewSingleTouristSpot></PrivateRoute>
            },
            {
                path: '/All-Tourist-Spot',
                element: <AllTouristSpot></AllTouristSpot>
            },
            {
                path: '/ContactUs',
                element: <ContactUs></ContactUs>
            },

            {
                path: '/Update-Profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/My-List',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            }
            ,
            {
                path: '/Add-Tourist-Spot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            }
        ]
    }
]);

export default router;