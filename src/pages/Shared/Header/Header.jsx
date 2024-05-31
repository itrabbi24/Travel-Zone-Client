import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Toaster } from 'react-hot-toast';
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";



const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <>

            <Toaster position="top-right" />
            {/* ------------------ Top Bar ------------------ */}


            <div className="w-full float-left top-bar-con main-box rounded-lg">
                <div className="container mx-auto">
                    <div className="top-bar-inner-con flex items-center justify-between">
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2 lg:mr-0" />
                            <a href="mailto:help@travelzone.com" className="ml-1">  help@travelzone.com</a>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneSquareAlt className="mr-2 lg:mr-0" />
                            <a href="tel:+8801324719167" className="ml-1">+88 01324719167</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* ------------------ Header ------------------ */}


            {/* <div className="navbar bg-base-200 max-w-screen-xl mx-auto w-full"> */}
            <div className="navbar max-w-screen-xl mx-auto w-full rounded-lg z-[1000] relative">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/All-Tourist-Spot'>All Tourists Spot</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Add-Tourist-Spot'>Add Tourists Spot</NavLink>
                            </li>
                            <li>
                                <NavLink to='/My-List'>My List </NavLink>
                            </li>
                            <li>
                                <NavLink to='/ContactUs'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><img className="h-9" src="/logo-icon.png" alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/All-Tourist-Spot'>All Tourists Spot</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Add-Tourist-Spot'>Add Tourists Spot</NavLink>
                        </li>
                        <li>
                            <NavLink to='/My-List'>My List </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ContactUs'>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end items-center space-x-2 hidden lg:flex">
                    <div className="flex-none">
                        {/* Toggle button here */}
                        <button className="btn btn-square btn-ghost">
                            <label className="swap swap-rotate w-12 h-12">
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    // show toggle image based on localstorage theme
                                    checked={theme === "light" ? false : true}
                                />
                                {/* light theme sun image */}
                                <IoSunnySharp className="w-8 h-8 swap-on" />
                                {/* dark theme moon image */}
                                <FaRegMoon className="w-8 h-8 swap-off" />
                            </label>
                        </button>
                    </div>

                    
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-md skeleton shrink-0">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" title={user?.displayName} className="w-10 rounded-md" />
                                    ) : (
                                        <img src="/avater.jpg" alt="Default Profile" className="w-10 rounded-md" />
                                    )}
                                </div>
                            </div>

                            {user.displayName ? (
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <div className="badge badge-accent">{user.displayName}</div>
                                    <br />
                                    <li><Link to="/Update-Profile">Update Profile</Link></li>
                                    <hr />
                                    <li><a onClick={logOut}>Logout</a></li>
                                </ul>
                            ) : (
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <div className="badge badge-accent" title={user.email}>{user.email}</div>
                                    <br />
                                    <li><Link to="/Update-Profile">Update Profile</Link></li>
                                    <hr />
                                    <li><a onClick={logOut}>Logout</a></li>
                                </ul>
                            )}


                        </div>
                    ) : (
                        <div className="navbar-end space-x-2">
                            <NavLink className="btn btn-outline btn-success" to="/sign-in">Sign In</NavLink>
                            <NavLink className="btn btn-outline btn-error" to="/sign-up">Sign Up</NavLink>
                        </div>
                    )}
                </div>

            </div>

        </>
    );
};

export default Header;