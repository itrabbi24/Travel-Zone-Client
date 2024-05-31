import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { useState, useEffect, useContext } from "react";
import API_URL from "../../../config";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProviders";


const AddTouristSpot = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    document.title = 'Add Tourist Spot'; // dynamic title

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`${API_URL}/main-category`);
                if (!response.ok) {
                    throw new Error("Failed to fetch countries");
                }
                const data = await response.json();
                setCountries(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        let isValid = true;

        if (!formData.get('imageURL').trim()) {
            toast.error('Image URL is required');
            isValid = false;
        } else if (!formData.get('tourists_spot_name').trim()) {
            toast.error('Tourist Spot Name is required');
            isValid = false;
        } else if (!formData.get('location').trim()) {
            toast.error('Location is required');
            isValid = false;
        } else if (!formData.get('short_description').trim()) {
            toast.error('Short Description is required');
            isValid = false;
        } else if (!formData.get('average_cost').trim()) {
            toast.error('Average Cost is required');
            isValid = false;
        } else if (!formData.get('seasonality').trim()) {
            toast.error('Seasonality is required');
            isValid = false;
        } else if (!formData.get('totaVisitorsPerYear').trim()) {
            toast.error('Yearly Visitor is required');
            isValid = false;
        } else if (!formData.get('countryDropdown').trim()) {
            toast.error('Country is required');
            isValid = false;
        } else if (!formData.get('travel_time').trim()) {
            toast.error('Travel time is required');
            isValid = false;
        }

        if (isValid) {
            try {
                const formDataWithUser = {
                    ...Object.fromEntries(formData),
                    displayName: user.displayName,
                    UserEmail: user.email
                };
                // console.log(formDataWithUser);


                // Send the data to the API
                const response = await fetch(`${API_URL}/insertTouristDataByUser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataWithUser)
                });


                if (!response.ok) {
                    toast.error('Failed to insert data');
                }
                toast.success('Data inserted successfully');
                form.reset(); // Reset the form
            } catch (error) {
                // error message
                console.error('Error inserting data:', error);
                toast.error('Failed to insert data');
            }
        }
    };


    return (
        <div>
            <Header></Header>



            <div className="max-w-2xl mx-auto bg-white p-16 rounded-3xl mt-5">
                <b className="text-3xl">Add New Tourist Spot</b><br /><br />
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                            <input type="url" placeholder="Enter Image URL" name="imageURL" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
                            <select
                                name="countryDropdown"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                className="input input-bordered w-full max-w-xs"
                            >
                                <option value="">Select</option>
                                {loading ? (
                                    <option value="" disabled>Loading...</option>
                                ) : (
                                    countries.map((country) => (
                                        <option key={country._id} value={country.country}>
                                            {country.country}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tourist Spot Name</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Tourist Spot Name" name="tourists_spot_name" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Location" name="location" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Description</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Short Description" name="short_description" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Average Cost</label>
                            <input type="number" className="input input-bordered w-full max-w-xs" placeholder="Average Cost" name="average_cost" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seasonality</label>
                            <select className="input input-bordered w-full max-w-xs" name="seasonality">
                                <option value="">Select Seasonality</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly Visitor</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Yearly Visitor" name="totaVisitorsPerYear" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Travel Time</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Yearly Visitor" name="travel_time" />
                        </div>
                    </div>

                    <button type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Add</button>
                </form>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddTouristSpot;