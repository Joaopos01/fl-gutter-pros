import { Wrench, Droplets, Sparkles, Shield, ArrowDownToLine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Gutter Installation",
    description: "Custom seamless gutters designed for Florida's heavy rain and humidity.",
  },
  {
    icon: Droplets,
    title: "Gutter Repair",
    description: "Fixing leaks, sagging sections, joint failures and storm damage.",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description: "Safe, thorough interior and exterior cleaning to prevent roof and foundation damage.",
  },
  {
    icon: Shield,
    title: "Gutter Guards",
    description: "Premium guard systems that reduce debris and minimize maintenance.",
  },
  {
    icon: ArrowDownToLine,
    title: "Downspouts & Drainage",
    description: "Professional drainage solutions to protect your home from water overflow.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Complete gutter solutions for Florida homeowners — from installation to maintenance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border bg-card shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
