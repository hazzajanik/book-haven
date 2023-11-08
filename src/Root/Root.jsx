import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>

                <Flowbite>
                    <DarkThemeToggle></DarkThemeToggle>
                </Flowbite>

            </Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;