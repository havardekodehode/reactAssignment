import { ReactNode } from "react";

import { NavBar } from "../Header/NavBar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
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
