import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import siteTitle from "../../../assets/siteTitle.png";
import "./NavBar.css";

export function NavBar() {
    return (
        <div className="navBar">
            <Logo />
            <div className="titleContainer">
                <img className="logoTitle" src={siteTitle} />
            </div>
            <Menu />
        </div>
    );
}
