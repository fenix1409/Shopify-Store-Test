import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import heroBanner from "../../assets/hero-banner.jpg";
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-start overflow-hidden bg-gray-50">
            <div className="absolute inset-0">
                <img
                    src={heroBanner}
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
                        Summer
                        <span className="block text-5xl md:text-6xl lg:text-7xl text-white mt-2" data-aos="fade-up" data-aos-delay="300">
                            Collection 2024
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                        Discover premium quality products with exclusive discounts. Limited time offers await!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start" data-aos="fade-up" data-aos-delay="500">
                        <Button asChild size="lg" className="gap-3 bg-white text-gray-900 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" >
                            <Link to="/collection">
                                Shop Collection
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg px-8 py-4 rounded-none transition-all duration-300"
                        >
                            <Link to="/about">View Lookbook</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero