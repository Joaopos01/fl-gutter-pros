import { Calendar, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Schedule a Free Inspection",
    description: "Contact us to schedule a convenient time for our team to assess your gutters.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Receive a Detailed Estimate",
    description: "Get a clear, written estimate with honest pricing — no hidden fees.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "We Handle the Rest",
    description: "Choose your date and our expert team delivers clean, precise workmanship.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Getting your gutters serviced has never been easier. Three simple steps to protect your home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
              )}

              <div className="relative z-10 mb-6 mx-auto flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-8 w-8" />
              </div>

              <span className="mb-2 block text-sm font-bold text-primary">{step.number}</span>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
