import React from "react";
import { NavBar } from "../Header/NavBar/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;
