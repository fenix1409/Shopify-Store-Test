import { Link } from "react-router-dom";

const Footer = () => {
  const policies = [
    { name: "Privacy policy", link: "/privacy-policy" },
    { name: "Use of Cookies (CCPA)", link: "/cookies" },
    { name: "Terms of use", link: "/terms" },
    { name: "Shipping Policy", link: "/shipping" },
    { name: "Refund & Return Policy", link: "/refund" },
    { name: "Payment conditions", link: "/payment" },
    { name: "Ozerty No Limit", link: "/no-limit" }
  ];

  const support = [
    { name: "About us", link: "/about" },
    { name: "Contact us", link: "/contact" },
    { name: "All products", link: "/products" },
    { name: "Legal notice", link: "/legal" },
    { name: "FAQ", link: "/faq" },
    { name: "Ozerty keeps you safe", link: "/safety", isSafe: true },
    { name: "IP & DMCA Notice", link: "/dmca" }
  ];

  const contacts = [
    { day: "Monday", hours: "9:00am - 6:00pm" },
    { day: "Tuesday", hours: "9:00am - 6:00pm" },
    { day: "Wednesday", hours: "9:00am - 6:00pm" },
    { day: "Thursday", hours: "9:00am - 6:00pm" },
    { day: "Friday", hours: "9:00am - 6:00pm" },
    { day: "Saturday - Sunday", hours: "closed", isClosed: true }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

          <div data-aos="fade-up" data-aos-duration="1000" className="space-y-4">
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-3">POLICIES</h3>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1 text-sm md:text-base"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="space-y-4">
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-3">SUPPORT</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  {item.isSafe ? (
                    <div className="flex items-center gap-2 py-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm md:text-base">{item.name}</span>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-gray-300 hover:text-white transition-colors duration-200 block py-1 text-sm md:text-base"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="space-y-4">
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-3">CONTACT US</h3>
            <div className="space-y-3 text-gray-300">
              {contacts.map((contact) => (
                <div
                  key={contact.day}
                  className={`flex justify-between items-center text-sm md:text-base ${contact.isClosed ? 'text-red-300' : ''
                    }`}
                >
                  <span className="flex-1">{contact.day}</span>
                  <span className="flex-1 text-right">{contact.hours}</span>
                </div>
              ))}

              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-blue-400 text-sm flex-shrink-0"></i>
                  <Link
                    to="tel:+18007960461"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    Tel: +1 (800) 796-0461
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-blue-400 text-sm flex-shrink-0"></i>
                  <Link
                    to="mailto:contact@store-cad.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base break-all"
                  >
                    E-mail: contact@store-cad.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="space-y-4">
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-3">NEWSLETTER</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-sm leading-relaxed md:text-base">
                Stay in touch with us to receive our tips to help you improve your daily life and our promotions. When you subscribe, you'll receive a 10% discount coupon code, guaranteed spam-free.
              </p>

              <form className="space-y-3">
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-white">
                  Your email
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                    required
                  />
                  <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 whitespace-nowrap text-sm md:text-base hover:shadow-lg hover:shadow-blue-600/25">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;