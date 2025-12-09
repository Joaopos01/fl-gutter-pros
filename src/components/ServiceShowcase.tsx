import { useState } from "react";
import { Play, CheckCircle2, Users, Wrench, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const showcaseFeatures = [
  {
    icon: Users,
    title: "Professional Team",
    description: "Licensed, trained, and uniformed installers",
  },
  {
    icon: Wrench,
    title: "Quality Equipment",
    description: "Industry-leading tools and seamless gutter machines",
  },
  {
    icon: ShieldCheck,
    title: "Clean Installation",
    description: "Meticulous attention to detail and cleanup",
  },
];

const galleryImages = [
  {
    src: "/placeholder.svg",
    alt: "Professional gutter installation process",
    title: "Precision Installation",
  },
  {
    src: "/placeholder.svg",
    alt: "Seamless gutter machine on-site",
    title: "On-Site Fabrication",
  },
  {
    src: "/placeholder.svg",
    alt: "Finished gutter system detail",
    title: "Quality Finish",
  },
  {
    src: "/placeholder.svg",
    alt: "Team installing gutters safely",
    title: "Safe Practices",
  },
];

const ServiceShowcase = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // Replace with actual video URL from backend
  const showcaseVideoUrl: string | undefined = undefined;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the professionalism and precision that sets Clean Cut Gutters apart. Watch our team deliver exceptional results.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <Card className="overflow-hidden border-border/50">
            <div className="relative aspect-video bg-muted">
              {showcaseVideoUrl ? (
                <video
                  src={showcaseVideoUrl}
                  className="w-full h-full object-cover"
                  controls={isVideoPlaying}
                  poster="/placeholder.svg"
                  onClick={() => setIsVideoPlaying(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-foreground font-medium">Service Showcase Video</p>
                  <p className="text-muted-foreground text-sm">Coming soon — See our team at work</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {showcaseFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Project Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to experience our professional service?
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Schedule Your Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
