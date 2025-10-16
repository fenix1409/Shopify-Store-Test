import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import promoBeautyImage from "../../assets/promo-beauty.jpg";
import promoEarbudsImage from "../../assets/promo-earbuds.jpg";
import promoFashionImage from "../../assets/promo-fashion.jpg";
import promoGiftsImage from "../../assets/promo-gifts.jpg";

const CategoryGrid = () => {
    return (
        <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Beauty Collection */}
            <Link 
              to="/collection?category=Beauty" 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={promoBeautyImage}
                alt="Beauty products collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-3 transform group-hover:translate-y-[-5px] transition-transform duration-300">Beauty</h3>
                <div className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  Shop now <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </Link>

            {/* Unique Gifts */}
            <Link 
              to="/collection?category=Kids & Toys" 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={promoGiftsImage}
                alt="Unique gifts collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-3 transform group-hover:translate-y-[-5px] transition-transform duration-300">Unique Gifts</h3>
                <div className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  Shop now <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </Link>

            {/* Earbuds - Featured */}
            <Link 
              to="/collection?category=Electronics" 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 md:row-span-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img
                src={promoEarbudsImage}
                alt="Wireless earbuds collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-8 right-8 transform group-hover:scale-110 transition-transform duration-300">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  New Arrivals
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-medium mb-2 text-orange-300 transform group-hover:translate-y-[-2px] transition-transform duration-300">New in</p>
                <h3 className="text-5xl font-bold mb-6 transform group-hover:translate-y-[-5px] transition-transform duration-300">Earbuds</h3>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-700">
                  Shop now
                </Button>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </Link>

            {/* Fashion Collection */}
            <Link 
              to="/collection?category=Clothing" 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 md:col-span-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src={promoFashionImage}
                alt="Fashion collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-8 left-8 transform group-hover:scale-110 transition-transform duration-300">
                <span className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  Shop the Look
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-medium mb-2 text-orange-300 transform group-hover:translate-y-[-2px] transition-transform duration-300">New Collection</p>
                <h3 className="text-5xl font-bold mb-6 transform group-hover:translate-y-[-5px] transition-transform duration-300">Fashion</h3>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-700">
                  Shop now
                </Button>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CategoryGrid