import { useState, useEffect } from 'react';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { useParams } from 'react-router-dom';
import API_URL from "../../../config";

const ViewSingleTouristSpot = () => {
    const { id } = useParams();
    const [touristSpotData, setTouristSpotData] = useState(null);


    useEffect(() => {
        const fetchTouristSpotData = async () => {
            try {
                const response = await fetch(`${API_URL}/single-tourist-data-view/${id}`);
                console.log(response);
                if (!response.ok) {
                    throw new Error('Failed to fetch tourist spot data');
                }
                const data = await response.json();
                setTouristSpotData(data);
                document.title = 'Tourist Spot Of ' + data.tourist_spot_name; // Set dynamic title

            } catch (error) {
                console.error('Error fetching tourist spot data:', error);
            }
        };
        fetchTouristSpotData();
    }, [id]);


    return (
        <>
            <Header />

            <section className="flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded-3xl bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    {touristSpotData && (
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img src={touristSpotData.image_url} className="w-full relative z-10 rounded-3xl" alt={touristSpotData.tourist_spot_name} />
                                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-2xl mb-5">{touristSpotData.tourist_spot_name}</h1>
                                    <hr />
                                    <ul>
                                        <li><b>Country Name: </b> {touristSpotData.country} </li>
                                        <li><b>Travel Time: </b> {touristSpotData.travel_time} </li>
                                        <li><b>Visitor Per Year: </b> {touristSpotData.total_visitors_per_year} </li>
                                        <li><b>Seasonality: </b> {touristSpotData.seasonality} </li>
                                    </ul><br />
                                    <p className="text-sm">{touristSpotData.short_description}
                                    </p>
                                </div>
                                <div>
                                    <div className="inline-block align-bottom mr-5">
                                        <span className="text-2xl leading-none align-baseline">Average Cost: {touristSpotData.average_cost}</span>
                                        <span className="font-bold text-5xl leading-none align-baseline">/Day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ViewSingleTouristSpot;




{/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
        </a>
    </div>
</div> */}