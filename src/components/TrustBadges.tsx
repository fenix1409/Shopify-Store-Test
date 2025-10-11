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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <badge.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
