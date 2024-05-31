import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { Link } from 'react-router-dom';
import API_URL from "../../../config";


const AllTouristSpot = () => {
    const [tourData, setTourData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('asc');

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await fetch(`${API_URL}/getAllTooristData?sort=${sortBy}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('Fetched data:', data);
                setTourData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTourData();
    }, [sortBy]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value); // Update sorting order
    };

    return (
        <div>
            <Header></Header>


            <section>
                <div className="container relative md:mt-5 mt-16">
                    <div className="md:flex justify-center">
                        <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0 card bg-base-100 shadow-xl">
                            <div className="mt-6">


                                <div>
                                    <h5 className="text-lg font-semibold mb-6">My Post</h5>
                                    <div className="absolute top-0 right-0 mr-10 mt-4 flex items-center">
                                        <label className="block text-gray-700 text-sm font-bold mr-2">Sort by:</label>
                                        <select value={sortBy} onChange={handleSortChange} className="border border-gray-500 rounded-md px-4 py-2">
                                            <option value="asc">Ascending</option>
                                            <option value="desc">Descending</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                                    {loading ? (
                                        <div className="flex justify-center items-center h-full">
                                            <span className="loading loading-bars loading-lg"></span>
                                        </div>
                                    ) : (
                                        tourData && tourData.map((tourItem, index) => (
                                            <div key={index} className="group rounded-md shadow dark:shadow-gray-700">
                                                <Link key={tourItem._id} to={`/show-single-tourist-spot-details/${tourItem._id}`} className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                                    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
                                                        <img src={tourItem.image_url} className="scale-125 group-hover:scale-100 duration-500" alt="" />
                                                    </div>
                                                    <div className="p-3">
                                                        <p className="flex items-center text-slate-400 font-medium mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin text-red-500 size-4 me-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                            {tourItem.location} ({tourItem.country})
                                                        </p>
                                                        <div className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{tourItem.tourist_spot_name}</div>
                                                        <div className="pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800 mt-6">
                                                            <h5 className="text-lg font-medium text-red-500">{tourItem.average_cost} $/Day</h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer></Footer>
        </div>
    );
};

export default AllTouristSpot;