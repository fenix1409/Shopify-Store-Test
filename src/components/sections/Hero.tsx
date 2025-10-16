import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import heroBanner from "../../assets/hero-banner.jpg";
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ["Style", "Quality", "Innovation", "Elegance"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
            <div className="absolute inset-0">
                <img
                    src={heroBanner}
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20" />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-start space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full" data-aos="fade-up" data-aos-delay="100">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-medium">New Collection Launch</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight" data-aos="fade-up" data-aos-delay="200">
                                Summer
                                <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                                    Collection 2024
                                </span>
                            </h1>

                            <div className="flex items-center gap-3 text-2xl md:text-3xl text-white/80" data-aos="fade-up" data-aos-delay="300">
                                <span>Experience</span>
                                <div className="h-10 overflow-hidden">
                                    <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateY(-${currentWord * 100}%)` }}>
                                        {words.map((word) => (
                                            <div key={word} className="h-10 font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                                {word}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="400">
                            Discover premium quality products with exclusive discounts.
                            <span className="block text-cyan-200 font-semibold mt-2">
                                Limited time offers await!
                            </span>
                        </p>

                        <div className="flex flex-wrap gap-8" data-aos="fade-up" data-aos-delay="500">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">50%</div>
                                <div className="text-white/60 text-sm">Off Selected Items</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">24h</div>
                                <div className="text-white/60 text-sm">Flash Sale</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">Free</div>
                                <div className="text-white/60 text-sm">Shipping</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-start" data-aos="fade-up" data-aos-delay="600">
                            <Button asChild size="lg" className="group gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-0" >
                                <Link to="/collection">
                                    Shop Collection
                                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <Link to="/about" className="flex items-center gap-2">
                                    <Play className="h-5 w-5" />
                                    View Lookbook
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="800">
                <div className="flex flex-col items-center gap-2 text-white/60">
                    <span className="text-sm">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero