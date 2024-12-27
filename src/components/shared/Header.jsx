import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-white.png";
import { LocalStorageUtil } from "../../utils/localStorage";

export default function Header() {
  const route = useNavigate();
  const user = LocalStorageUtil.get("user");
  // console.log("user", user);
  const logOut = () => {
    LocalStorageUtil.remove("user");
    route("/login");
  };

  return (
    <div className="navbar bg-neutral text-neutral-content lg:px-8">
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
            className="menu menu-sm dropdown-content text-white bg-neutral  z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="font-bold">
              <Link to="/">HOME</Link>
            </li>
            {/* <li className="font-bold">
              <Link to="/about">ABOUT</Link>
            </li> */}
            {user && (
              <li className="font-bold">
                <Link to="/all-courses">COURSES</Link>
              </li>
            )}
            {user && (
              <li className="font-bold">
                <Link to="/create-course">CREATE COURSE</Link>
              </li>
            )}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold">
            <Link to="/">HOME</Link>
          </li>
          {/* <li className="font-bold">
            <Link to="/about">ABOUT</Link>
          </li> */}
          {user && (
            <li className="font-bold">
              <Link to="/all-courses">COURSES</Link>
            </li>
          )}
          {user && (
            <li className="font-bold">
              <Link to="/create-course">CREATE COURSE</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-white  z-[1] mt-5 w-52 p-4 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li className="bg-red-500 text-white">
                <a onClick={() => logOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-outline btn-accent">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
