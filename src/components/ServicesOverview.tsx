import { Wrench, Droplets, Sparkles, Shield, ArrowDownToLine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Gutter Installation",
    description: "Custom seamless gutters designed for Florida's heavy rain and humidity.",
    gradient: "from-primary/20 to-teal-500/10",
    iconBg: "bg-primary",
  },
  {
    icon: Droplets,
    title: "Gutter Repair",
    description: "Fixing leaks, sagging sections, joint failures and storm damage.",
    gradient: "from-blue-500/20 to-primary/10",
    iconBg: "bg-blue-500",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description: "Safe, thorough interior and exterior cleaning to prevent roof and foundation damage.",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconBg: "bg-amber-500",
  },
  {
    icon: Shield,
    title: "Gutter Guards",
    description: "Premium guard systems that reduce debris and minimize maintenance.",
    gradient: "from-emerald-500/20 to-primary/10",
    iconBg: "bg-emerald-500",
  },
  {
    icon: ArrowDownToLine,
    title: "Downspouts & Drainage",
    description: "Professional drainage solutions to protect your home from water overflow.",
    gradient: "from-purple-500/20 to-indigo-500/10",
    iconBg: "bg-purple-500",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Complete gutter solutions for Florida homeowners — from installation to maintenance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-border/50 bg-gradient-to-br ${service.gradient} shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 hover:border-primary/30`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm" />
              <CardHeader className="relative z-10">
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
