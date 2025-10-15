import { Link } from 'react-router-dom'
import tshirtImage from "../../assets/tshirt-organic.jpg";
import smartwatchImage from "../../assets/smartwatch-pro.jpg";
import buildingBlocksImage from "../../assets/building-blocks.jpg";
import sunglassesImage from "../../assets/sunglasses-designer.jpg";
import carAccessoriesImage from "../../assets/carAccessories.jpg";
import petSuppliesImage from "../../assets/petSupplies.jpg";

const ShowcaseProducts = () => {
  const categories = [
    {
      title: "Winter clothing",
      subtitle: "For you, we always select the best.",
      image: tshirtImage,
      bgColor: "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800",
      accentColor: "from-blue-500 to-purple-600",
      link: "/collection/winter-clothing"
    },
    {
      title: "For your car",
      subtitle: "We have what you need.",
      image: carAccessoriesImage,
      bgColor: "bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900",
      accentColor: "from-gray-600 to-blue-700",
      link: "/collection/car-accessories"
    },
    {
      title: "Gadgets",
      subtitle: "Connect yourself!",
      image: smartwatchImage,
      bgColor: "bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800",
      accentColor: "from-emerald-500 to-green-600",
      link: "/collection/gadgets"
    },
    {
      title: "Toys and plushs",
      subtitle: "For your kids, all to play",
      image: buildingBlocksImage,
      bgColor: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      accentColor: "from-orange-400 to-pink-500",
      link: "/collection/toys"
    },
    {
      title: "Pet lover?",
      subtitle: "Your animal deserves a treat.",
      image: petSuppliesImage,
      bgColor: "bg-gradient-to-br from-purple-500 via-pink-600 to-rose-600",
      accentColor: "from-purple-400 to-rose-500",
      link: "/collection/pet-supplies"
    },
    {
      title: "Style Essentials",
      subtitle: "Complete your perfect look",
      image: sunglassesImage,
      bgColor: "bg-gradient-to-br from-indigo-600 via-purple-700 to-violet-800",
      accentColor: "from-indigo-500 to-violet-600",
      link: "/collection/fashion"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Elegant Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Featured Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selections designed to elevate your lifestyle
          </p>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              to={category.link}
              className="group relative h-96 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-3"
            >
              {/* Main Background */}
              <div className={`absolute inset-0 ${category.bgColor} opacity-95 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Animated Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.02] bg-[length:50px_50px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]" />

              {/* Content Container */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-white mb-4 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed font-light">
                    {category.subtitle}
                  </p>
                </div>

                {/* Image with Floating Effect */}
                <div className="flex justify-end">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-6 bg-white/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-700" />
                    
                    {/* Image Container */}
                    <div className="relative bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-all duration-500">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-36 h-36 object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>

                {/* Elegant CTA Arrow */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                    <svg 
                      className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/10 to-white/5 bg-origin-border opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="rounded-3xl bg-gradient-to-br from-transparent via-transparent to-transparent h-full w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <Link
            to="/collections"
            className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-gray-900 to-black text-white text-xl font-light rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl group"
          >
            <span className="tracking-wide">View All Collections</span>
            <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseProducts;