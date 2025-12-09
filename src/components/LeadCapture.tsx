import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  "Gutter Installation",
  "Gutter Repair",
  "Gutter Cleaning",
  "Gutter Guards",
  "Downspouts & Drainage",
  "Other",
];

const LeadCapture = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Get Your Free Estimate Today
            </h2>
            <p className="mb-6 text-lg text-primary-foreground/80">
              Fast responses for all Florida ZIP codes. No obligation, no pressure — just honest pricing
              for quality gutter services.
            </p>
            <ul className="space-y-3 text-primary-foreground/90">
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20 text-sm">✓</span>
                100% Free Estimates
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20 text-sm">✓</span>
                Response Within 24 Hours
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20 text-sm">✓</span>
                Licensed & Insured Professionals
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-card p-6 shadow-elevated md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-background"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="bg-background"
              />
            </div>

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="bg-background"
            />

            <Input
              name="address"
              placeholder="Address or ZIP Code"
              required
              className="bg-background"
            />

            <Select name="service">
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea
              name="message"
              placeholder="Tell us about your project (optional)"
              rows={3}
              className="bg-background"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Request Free Estimate"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
