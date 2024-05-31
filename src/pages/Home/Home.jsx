import './../../App.css';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../Shared/Header/Header';
import Banner from '../Shared/Banner/Banner';
import WhatWeSay from '../Component/WhatWeSay';
import Whychooseus from '../Component/Whychooseus';
import Footer from '../Shared/Footer/Footer';
import TopDestination from '../Component/TopDestination';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLocation } from 'react-router-dom';
import TravelPlan from '../Component/TravelPlan';

const Home = () => {
    document.title = 'Travel Zone - Home'; // dynamic title
    const { loginSuccess, setLoginSuccess } = useContext(AuthContext);
    const { logoutSuccess, setLogoutSuccess } = useContext(AuthContext);
    const location = useLocation();

    // login toastr
    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'Travel Zone | Home';
        }

        if (loginSuccess) {
            toast.success("Login Success");
            setLoginSuccess(false);
        }
    }, [location.pathname, loginSuccess, setLoginSuccess]);


    //logout success
    useEffect(() => {
        if (logoutSuccess) {
            toast.success("Logout Success");
            setLogoutSuccess(false);
        }
    }, [logoutSuccess, setLogoutSuccess]);

    return (
        <div>
             <Toaster position="top-right" />
            
            
            <Header></Header>
            <Banner></Banner>

            <WhatWeSay></WhatWeSay>
            <TopDestination></TopDestination>

            <Whychooseus></Whychooseus>
            <TravelPlan></TravelPlan>

            <Footer></Footer>

        </div>
    );
};

export default Home;