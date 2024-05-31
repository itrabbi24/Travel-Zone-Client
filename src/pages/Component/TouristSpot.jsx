import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { FaArrowRight } from "react-icons/fa6";
import API_URL from "../../../config";

const TouristSpot = () => {
    const { country } = useParams();
    const [tourData, setTourData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('asc');
    document.title = 'Tourist Sport Of ' + country; // dynamic title

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await fetch(`${API_URL}/main-category/${country}?sort=${sortBy}`);
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
    }, [country, sortBy]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value); // Update sorting order
    };



    // const tourData = useLoaderData();
    // if(!tourData){
    // return <div className=" text-center mb-40"><span className="loading loading-spinner text-error"></span></div>
    // }



    return (
        <>
            <Header />

            <section className="relative table w-full items-center  bg-[url('/bg-2.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b "></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">Tourist Spot</h3>
                    </div>
                </div>
            </section>

            <br /><br />

            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (

                <div className='card bg-base-100 shadow-xl mb-4'>

                    <div className="absolute top-0 right-0 mr-10 mt-4 flex items-center">
                        <label className="block text-gray-700 text-sm font-bold mr-2">Sort by:</label>
                        <select value={sortBy} onChange={handleSortChange} className="border border-gray-500 rounded-md px-4 py-2">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <br /><br />

                    {tourData && (
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-6 mb-4 ml-4 mr-4 ">

                            {tourData.map((tourItem, index) => (
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
                                                <h5 className="text-lg font-medium text-red-500">{tourItem.average_cost}/Day</h5>
                                                <div className="text-slate-400 hover:text-red-500 flex items-center">
                                                    <button  to={`/show-single-tourist-spot-details/${tourItem._id}`} className="flex items-center">
                                                        View Details <FaArrowRight className="ml-1" />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <Footer />
        </>
    );
};

export default TouristSpot;
