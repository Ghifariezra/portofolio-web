import { useEffect, StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "@shared/Navbar";
import Footer from "@shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Root = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in',
        });
    }, []);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;