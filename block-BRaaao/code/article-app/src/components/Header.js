import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return <header className="flex space-between align-center">
        <Logo />
        <Navigation />
    </header>
}

export default Header;