import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
     

            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                <div className="text-center">
                    <a href="index.html"><img src="/logo-icon.png" className="mx-auto" alt=""/></a>
                </div>
                <div className="title-heading text-center my-auto">
                    <img src="/maintenance.svg" className="mx-auto w-96" alt=""/>
                        <h1 className="my-6 md:text-4xl text-3xl font-bold">Page Not Found?</h1>
                        <p className="text-slate-400">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>

                        <div className="mt-4">
                            
                            <Link to="/"><button  className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Back to Home</button></Link>
                        </div>
                </div>
                <div className="text-center">

                    <p className="mb-0 text-slate-400">© <script>document.write(new Date().getFullYear())</script>2024 Travel Zone. </p>
                </div>
            </div>
        </div>
    );
};

export default Error;