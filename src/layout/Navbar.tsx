import logoIcon from "../assets/Images/icons/logo.png";
import { Link } from "react-router-dom";
import UserDropdown from "./navbar/UserDropdown";
function Navbar() {
  return (
    <nav className="navbar shadow py-1 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="navbar-wrapper grid md:grid-cols-4 grid-cols-5 items-center">
          <div className="favicon col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logoIcon} alt="logo" width={100}/>
            </Link>
          </div>
          <div className="navbar-menu md:col-span-3 col-span-2">
            <div className="md:grid grid-cols-6 items-center">
              <div className="navbar-search col-span-2 hidden md:block"></div>
              <div className="col-span-2 justify-self-end"></div>
              <div className="col-span-2 hidden md:block">
                <div className="flex justify-end">
                    <UserDropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-mobile-menu col-span-1 md:hidden"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
