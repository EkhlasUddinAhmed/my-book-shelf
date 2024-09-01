import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, signOutSite } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOutSite();
      console.log("Sign Out Successsful");
    } catch (error) {
      console.log("Sign Out Failed");
    }
  };

  const listItems = (
    <>
      <li className="m-x-3">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="m-x-3">
        <NavLink to="/listedbooks">Listed Books</NavLink>
      </li>
      <li className="m-x-3">
        <NavLink to="/progresstoread">Progress to Read</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {listItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItems}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              <span className="text-blue-950">{user?.email}</span>
              <NavLink onClick={handleSignOut} to="">
                <button className="btn btn-active btn-neutral">LogOut</button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/registration">
                <button className="btn btn-primary">Registration</button>
              </NavLink>
              <NavLink to="/login">
                <button className="btn btn-secondary">LogIn</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
