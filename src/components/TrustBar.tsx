import { Shield, MapPin, Clock, DollarSign } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: MapPin, text: "Florida-Based" },
  { icon: Clock, text: "10+ Years Experience" },
  { icon: DollarSign, text: "Honest Pricing" },
];

const TrustBar = () => {
  return (
    <section className="bg-primary py-4">
      <div className="container-narrow mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-primary-foreground">
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
