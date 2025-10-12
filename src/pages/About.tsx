import { Award, Users, Target, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VALUES = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every product is carefully selected and tested.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We're here to serve you every step of the way.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly seek new and better products to enhance your lifestyle.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty and transparency in everything we do.",
  },
];

const STATS = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
  { value: "50+", label: "Countries" },
  { value: "99%", label: "Satisfaction Rate" },
];

const About: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />

    <main className="flex-1">
      <section className="bg-gray-100 py-16">
        <div className="mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Store</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Your trusted destination for premium products since 2024
          </p>
        </div>
      </section>

      <section className="mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Store was founded with a simple mission: to bring high-quality, premium products to customers who appreciate excellence and craftsmanship.
              </p>
              <p>
                We carefully curate every item in our collection, ensuring that each product meets our rigorous standards for quality, design, and functionality. Our team of experts travels the world to discover the finest products and bring them directly to you.
              </p>
              <p>
                Today, we serve thousands of satisfied customers worldwide, and we're committed to continuing our tradition of excellence for years to come.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
            <span className="text-gray-500">About Us Image</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => (
              <div className="text-center" key={value.title}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div className="text-center" key={stat.label}>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default About;