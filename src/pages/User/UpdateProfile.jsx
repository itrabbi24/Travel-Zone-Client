import { useContext, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { AuthContext } from "../../providers/AuthProviders";
import { getAuth, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const auth = getAuth();

    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (name == "") {
            toast.error("Please Enter User Name !");
            return;
        }

        // Update profile
        updateProfile(auth.currentUser, {
            displayName: name || user.displayName,
            photoURL: photoURL || user.photoURL
        }).then(() => {
            console.log("Profile updated successfully!");
            toast.success("Profile Update Successfully !");
            user.get
        }).catch((error) => {
            console.error("Error updating profile: ", error);
            toast.success("Error updating profile: ", error);
        });
    };



    return (
        <div>
            <Header></Header>
            <div className="flex justify-center items-center flex-col">
                <div role="alert" className="alert alert-success mt-4 mb-4 text-white w-96">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Update Your Profile</span>
                </div>
                <div className="flex justify-center">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="avatar justify-center">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="Profile" className="w-10 rounded-full" />
                                ) : (
                                    <img src="/avater.jpg" alt="Default Profile" className="w-10 rounded-full" />
                                )}
                            </div>
                        </div>
                        <div className="card-body items-center">
                            <h2 className="card-title"><b>Name:</b> {user.displayName || "No User Name Found !!"}</h2>
                            <h2 className="card-title"><b>Email:</b> {user.email}</h2>
                            <div className="w-full mx-auto bg-white p-6">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo URL</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                                    </div>
                                    <button type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Update Profile</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;