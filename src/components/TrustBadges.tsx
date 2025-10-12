import { Shield, Truck, RefreshCw, CreditCard } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: CreditCard,
      title: "Money Back",
      description: "100% money-back guarantee",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow group"
        >
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
            <badge.icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-base mb-1 text-gray-900">{badge.title}</h3>
          <p className="text-xs text-gray-500">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;