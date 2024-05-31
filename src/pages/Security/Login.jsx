import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
    const { signIn, setLoginSuccess, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    document.title = 'Sign In';



    const handleLogin = async event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email == "") {
            toast.error("Please Enter Valid Email");
            return;
        } else if (password == "") {
            toast.error("Please Enter Valid Password !");
            return;
        } else if (email === "" && password === "") {
            toast.error("Please Enter email and password both for login !");
            return;
        }

        try {
            const result = await signIn(email, password);
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            // Redirect to home page after login success
            navigate(location?.state ? location.state : '/');
            // Show toastr login success
            // toast.success("Login Success");
            setLoginSuccess(true);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // Show toastr login success
                // Redirect to home page after login success
                navigate(location?.state ? location.state : '/');
                // toast.success("Login Success With G-Mail");
                setLoginSuccess(true);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // Redirect to home page after login success
                navigate(location?.state ? location.state : '/');
                // Show toastr login success
                // toast.success("Login Success With Github");
                setLoginSuccess(true);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };


    return (
        <>
            <Header />


            <section className="md:h-screen flex items-center relative overflow-hidden zoom-image">
                {/* <div className="absolute inset-0 z-0 bg-[url('bg-7.jpg')] bg-no-repeat bg-center bg-cover"></div> */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-1" id="particles-snow"></div> */}
                <div className="container relative z-2">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-lg">
                            {/* <a href="index.html"><img src="/logo-icon.png" className="mx-auto" alt="" /></a> */}
                            <h5 className="my-6 text-xl font-semibold text-center">Login</h5>
                            <form className="text-start" onSubmit={handleLogin}>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold">Email Address:</label>
                                        <input type="text" name="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-semibold">Password:</label>
                                        <div className="relative">
                                            <input
                                                type={passwordVisible ? "text" : "password"}
                                                name="password"
                                                className="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-1/2 transform -translate-y-1/2 right-3 focus:outline-none"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {passwordVisible ? (
                                                    <FaEye />
                                                ) : (
                                                    <IoIosEyeOff />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <button type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full">
                                            <span className="inline-block mr-2">Login / Sign in</span>
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Don't have an account ?</span>   <NavLink to="/sign-up" className="text-black dark:text-white font-bold">Sign Up</NavLink>
                                    </div>
                                    <div className="p-5">
                                        {/* <div className="grid grid-cols-2 gap-1">
                                            <button type="button" onClick={handleGoogleSignIn} className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
                                                Google
                                            </button>
                                            <button type="button" onClick={handleGitHubSignIn} className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
                                                GitHub
                                            </button>
                                        </div> */}

                                        <div className="btn-wrapper text-center">
                                            <button onClick={handleGitHubSignIn} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                                <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github</button>
                                            <button onClick={handleGoogleSignIn} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                                <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google </button>

                                        </div>
                                    </div>
                                    <NavLink to="/" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <span className="inline-block ml-1">Back to Home Page</span>
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <Footer></Footer>
        </>
    );
};

export default Login;
