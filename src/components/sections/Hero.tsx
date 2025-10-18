import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import heroBanner from "../../assets/hero-banner.jpg";
import { ArrowRight, ShoppingBag, Star, Truck, Shield, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    // Benefit-focused rotating words
    const words = ["Confidence", "Quality", "Value", "Style"];

    // Countdown timer for urgency
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Rotating benefit words
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            {/* Performance-optimized background */}
            <div className="absolute inset-0">
                <img
                    src={heroBanner}
                    alt="Summer Collection 2024 - Premium Fashion & Accessories"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width="1920"
                    height="1080"
                />
                {/* Conversion-focused overlay - directs attention to CTA */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/40" />
            </div>

            {/* Subtle performance animations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Conversion-focused content */}
                    <div className="text-start space-y-8">
                        {/* Social proof & urgency */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <div 
                                className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-100 px-4 py-2 rounded-full"
                                data-aos="fade-up"
                            >
                                <Star className="h-4 w-4 fill-green-400" />
                                <span className="text-sm font-medium">4.9/5 • 2,458 Reviews</span>
                            </div>
                            
                            {/* Flash sale countdown */}
                            <div 
                                className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-100 px-4 py-2 rounded-full"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <Clock className="h-4 w-4" />
                                <span className="text-sm font-medium">
                                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                                </span>
                            </div>
                        </div>

                        {/* Main headline with benefit-focused messaging */}
                        <div className="space-y-6">
                            <h1 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Summer Essentials
                                <span className="block text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
                                    Collection 2024
                                </span>
                            </h1>
                            
                            {/* Benefit-driven subheading */}
                            <div 
                                className="flex items-center gap-3 text-xl md:text-2xl text-blue-100"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <span>Shop with</span>
                                <div className="h-8 overflow-hidden">
                                    <div 
                                        className="transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateY(-${currentWord * 100}%)` }}
                                    >
                                        {words.map((word) => (
                                            <div 
                                                key={word} 
                                                className="h-8 font-semibold text-white"
                                            >
                                                {word}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefit-oriented description */}
                        <p 
                            className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Curated premium products designed for your lifestyle. 
                            <span className="block text-white font-medium mt-2">
                                Exclusive launch discounts + free express shipping.
                            </span>
                        </p>

                        {/* Trust signals & value props */}
                        <div 
                            className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <Truck className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">Free Shipping</div>
                                    <div className="text-xs text-blue-200">Over $50</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <Shield className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">30-Day Returns</div>
                                    <div className="text-xs text-blue-200">No Questions</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                                    <Star className="h-5 w-5 text-amber-400" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">Premium Quality</div>
                                    <div className="text-xs text-blue-200">Guaranteed</div>
                                </div>
                            </div>
                        </div>

                        {/* Primary CTA section */}
                        <div 
                            className="space-y-4"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                {/* Primary CTA - Emphasize action */}
                                <Button 
                                    asChild 
                                    size="lg" 
                                    className="group gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none"
                                >
                                    <Link to="/collection">
                                        <ShoppingBag className="h-5 w-5" />
                                        Shop The Collection
                                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                
                                {/* Secondary CTA - Less prominent */}
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold text-lg px-6 py-4 rounded-lg transition-all duration-300 flex-1 sm:flex-none"
                                >
                                    <Link to="/collection?view=best-sellers">
                                        View Best Sellers
                                    </Link>
                                </Button>
                            </div>
                            
                            {/* Trust reinforcement */}
                            <div className="flex items-center gap-3 text-sm text-blue-200">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>Secure checkout • SSL encrypted • 24/7 support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Product showcase with social proof */}
                    <div 
                        className="relative"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-2xl">
                            <img
                                src={heroBanner}
                                alt="Featured Product - Summer Collection"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                            
                            {/* Floating product cards with social proof */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-2xl border">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex -space-x-2">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-2 border-white" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-600">+42 bought today</span>
                                </div>
                                <div className="text-lg font-bold text-gray-900">$49.99</div>
                                <div className="text-xs text-green-600 font-semibold">In stock • Free shipping</div>
                            </div>
                            
                            {/* Sale badge */}
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg px-4 py-2 shadow-lg">
                                <div className="text-sm font-bold">FLASH SALE</div>
                                <div className="text-xs">50% OFF</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - subtle */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-blue-200/60">
                    <span className="text-sm">Discover more</span>
                    <div className="w-6 h-10 border border-blue-200/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-blue-200/60 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero