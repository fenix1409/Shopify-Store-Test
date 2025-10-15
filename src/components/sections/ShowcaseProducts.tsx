import { Link } from 'react-router-dom'
import tshirtImage from "../../assets/tshirt-organic.jpg";
import smartwatchImage from "../../assets/smartwatch-pro.jpg";
import buildingBlocksImage from "../../assets/building-blocks.jpg";
import sunglassesImage from "../../assets/sunglasses-designer.jpg";
import yogaMatImage from "../../assets/yoga-mat.jpg";
import plantersImage from "../../assets/planters-ceramic.jpg";

const ShowcaseProducts = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        data-aos="fade-up"
                        to="/collection"
                        className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] " />
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white mb-2">Winter Clothing</h3>
                                <p className="text-gray-300 text-lg">For you, we always select the best</p>
                            </div>
                            <div className="mt-auto flex items-end justify-end">
                                <img
                                    src={tshirtImage}
                                    alt="Clothing"
                                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link
                        data-aos="fade-up"
                        to="/collection"
                        className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] " />
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white mb-2">Gadgets</h3>
                                <p className="text-gray-300 text-lg">Connect yourself</p>
                            </div>
                            <div className="mt-auto flex items-end justify-end">
                                <img
                                    src={smartwatchImage}
                                    alt="Gadgets"
                                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link
                        data-aos="fade-up"
                        to="/collection"
                        className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] " />
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white mb-2">Toys and Plushs</h3>
                                <p className="text-gray-300 text-lg">For your kids, all to play</p>
                            </div>
                            <div className="mt-auto flex items-end justify-end">
                                <img
                                    src={buildingBlocksImage}
                                    alt="Toys"
                                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link
                        data-aos="fade-up"
                        to="/collection"
                        className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] " />
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white mb-2">Style Essentials</h3>
                                <p className="text-gray-300 text-lg">Complete your look</p>
                            </div>
                            <div className="mt-auto flex items-end justify-end">
                                <img
                                    src={sunglassesImage}
                                    alt="Accessories"
                                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link
                        data-aos="fade-up"
                        to="/collection"
                        className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] " />
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white mb-2">Active Lifestyle</h3>
                                <p className="text-gray-300 text-lg">Gear up for adventure</p>
                            </div>
                            <div className="mt-auto flex items-end justify-end">
                                <img
                                    src={yogaMatImage}
                                    alt="Sports"
                                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link
                        data-aos="fade-up"
                        to="/collection"
                        className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] " />
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white mb-2">Home & Garden</h3>
                                <p className="text-gray-300 text-lg">Make your space beautiful</p>
                            </div>
                            <div className="mt-auto flex items-end justify-end">
                                <img
                                    src={plantersImage}
                                    alt="Home"
                                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseProducts