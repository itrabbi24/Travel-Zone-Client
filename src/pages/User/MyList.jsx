import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import API_URL from "../../../config";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState([]);
    const [fetchedCountries, setFetchedCountries] = useState([]);

    const [loading, setLoading] = useState(true);
    const [editItem, setEditItem] = useState(null);
    document.title = 'Edit and delete her own data'; // dynamic title
    // const [formData, setFormData] = useState({
    //     imageURL: '',
    //     tourists_spot_name: '',
    //     location: '',
    //     short_description: '',
    //     average_cost: '',
    //     seasonality: '',
    //     totaVisitorsPerYear: '',
    //     countryDropdown: '',
    //     travel_time: ''
    // });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`${API_URL}/main-category`);
                if (!response.ok) {
                    throw new Error("Failed to fetch countries");
                }
                const data = await response.json();
                setFetchedCountries(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        fetchData();
    });

    // featch page load with data
    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/getUserWiseData/${user.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setUserData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    //===== show modal with data
    const handleEdit = (item) => {
        setEditItem(item); // Set the item being edited
        // setFormData({ ...item }); // Set form data to item's data
        document.getElementById('my_modal_1').showModal(); // Open the modal
    };

    //========== delete
    const handleDelete = async (id) => {
        // Use SweetAlert for confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`${API_URL}/deleteUserOwnDataAPI/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        // Item deleted successfully
                        toast.success('Item deleted successfully');
                        fetchData(); // Refresh data
                    } else {
                        toast.error('Failed to delete item');
                    }
                } catch (error) {
                    console.error('Error deleting item:', error);
                    toast.error('Failed to delete item');
                }
            }
        });
    };


    //============= Edit Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/updateLoginUserOwnData/${editItem._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editItem)
            });
            if (response.ok) {
                // updated successfully
                toast.success('Updated successfully');
                document.getElementById('my_modal_1').close(); // Close the modal
                fetchData(); // Refresh data
            } else {
                toast.error('Failed to update item');
            }
        } catch (error) {
            console.error('Error updating item:', error);
            toast.error('Failed to update item');
        }
    };




    return (
        <>

            <Header></Header>



            <div className="bg-white p-8 rounded-md w-full">
                <div className="flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-3xl text-center">Welcome, {user.displayName}</h2>
                    </div>
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Tourist Spot Name</th>
                                        <th>Country Name</th>
                                        <th>Location</th>
                                        <th>Short Description</th>
                                        <th>Average Cost</th>
                                        <th>Seasonality</th>
                                        <th>Travel Time</th>
                                        <th>Total Visitors Per Year</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="10">Loading...</td>
                                        </tr>
                                    ) : (
                                        userData.map((item) => (
                                            <tr key={item._id}>
                                                <td>
                                                    <img src={item.imageURL} alt="Tourist Spot" width="50" className="round-" />
                                                </td>
                                                <td>{item.tourists_spot_name}</td>
                                                <td>{item.countryDropdown}</td>
                                                <td>{item.location}</td>
                                                <td>{item.short_description}</td>
                                                <td>{item.average_cost}</td>
                                                <td>{item.seasonality}</td>
                                                <td>{item.travel_time}</td>
                                                <td>{item.totaVisitorsPerYear}</td>
                                                <td className="space-x-4">
                                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(item._id)}>Delete</button>
                                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(item)}>Edit</button>

                                                </td>

                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                    <h3 className="font-bold text-xl">Edit Item</h3>
                    <br />
                    <hr />
                    <br />
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                            <input type="url" placeholder="Enter Image URL" name="imageURL" className="input input-bordered w-full max-w-xs" value={editItem?.imageURL || ''} onChange={(e) => setEditItem({ ...editItem, imageURL: e.target.value })} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country Name</label>
                            <select
                                name="countryDropdown"
                                className="input input-bordered w-full max-w-xs"
                                value={editItem?.countryDropdown || ''}
                                onChange={(e) => setEditItem({ ...editItem, countryDropdown: e.target.value })}
                            >
                                <option value="">Select Country</option>
                                {fetchedCountries.map((country) => (
                                    <option key={country._id} value={country.country}>
                                        {country.country}
                                    </option>
                                ))}
                            </select>



                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tourist Spot Name</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Tourist Spot Name" name="tourists_spot_name" value={editItem?.tourists_spot_name || ''} onChange={(e) => setEditItem({ ...editItem, tourists_spot_name: e.target.value })} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Location" name="location" value={editItem?.location || ''} onChange={(e) => setEditItem({ ...editItem, location: e.target.value })} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Description</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Short Description" name="short_description" value={editItem?.short_description || ''} onChange={(e) => setEditItem({ ...editItem, short_description: e.target.value })} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Average Cost</label>
                            <input type="number" className="input input-bordered w-full max-w-xs" placeholder="Average Cost" name="average_cost" value={editItem?.average_cost || ''} onChange={(e) => setEditItem({ ...editItem, average_cost: e.target.value })} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seasonality</label>
                            <select className="input input-bordered w-full max-w-xs" name="seasonality" value={editItem?.seasonality || ''} onChange={(e) => setEditItem({ ...editItem, seasonality: e.target.value })}>
                                <option value="">Select Seasonality</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly Visitor</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Yearly Visitor" name="totaVisitorsPerYear" value={editItem?.totaVisitorsPerYear || ''} onChange={(e) => setEditItem({ ...editItem, totaVisitorsPerYear: e.target.value })} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Travel Time</label>
                            <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Travel Time" name="travel_time" value={editItem?.travel_time || ''} onChange={(e) => setEditItem({ ...editItem, travel_time: e.target.value })} />
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn mr-2" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                        <button className="btn btn-primary" onClick={handleSubmit}>Update</button>
                    </div>
                </div>
            </dialog>







            <Footer></Footer>
        </>
    );
};

export default MyList;
