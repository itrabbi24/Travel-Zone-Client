import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_URL from "../../../config";
import { Slide } from 'react-awesome-reveal';

const TopDestination = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data
        fetch(`${API_URL}/main-category`)
            .then(response => response.json())
            .then(data => {
                setDestinations(data);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    return (
        <>
            <section className="relative md:py-24 py-16 overflow-hidden bg-white">
                <Slide direction='right'>
                    <div className="container relative">
                        <div className="grid grid-cols-1 pb-8 text-center">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>
                            <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within the best budget!</p>
                        </div>
                        {loading ? (
                            // Centered loading spinner
                            <div className="flex justify-center items-center h-full">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        ) : (
                            <>
                                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
                                    {destinations.slice(0, 4).map(destination => (
                                        <Link key={destination._id} to={`/show-single-tourist-spot/${destination.country}`} className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                            <img src={destination.image_url} className="scale-125 group-hover:scale-100 duration-500" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                            <div className="absolute p-4 bottom-0 start-0">
                                                <p className="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{destination.country}</p>
                                                <p className="text-white/70 group-hover:text-white text-sm duration-500">{destination.tourist_spots.length} Place</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 justify-between gap-5 mt-5">
                                    {destinations.slice(4, 6).map(destination => (
                                        <Link key={destination._id} to={`/show-single-tourist-spot/${destination.country}`} className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                            <img src={destination.image_url} className="scale-125 group-hover:scale-100 duration-500" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                            <div className="absolute p-4 bottom-0 start-0">
                                                <p className="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{destination.country}</p>
                                                <p className="text-white/70 group-hover:text-white text-sm duration-500">{destination.tourist_spots.length} Place</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </Slide>
            </section>
        </>
    );
};

export default TopDestination;
