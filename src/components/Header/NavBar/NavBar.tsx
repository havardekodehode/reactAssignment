import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import siteTitle from "../../../assets/siteTitle.png";
import "./NavBar.css";

export function NavBar() {
    return (
        <div className="navBar">
            <Logo />
            <img className="logoTitle" src={siteTitle} />
            <Menu />
        </div>
    );
}
