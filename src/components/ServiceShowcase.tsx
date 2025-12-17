import { useState } from "react";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceShowcase = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // Replace with actual video URL from backend
  const showcaseVideoUrl: string | undefined = undefined;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Watch Us Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the professionalism and precision that sets Clean Cut Gutters apart. Watch our team deliver exceptional results.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-elevated">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-teal-500/5">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition-transform cursor-pointer group">
                    <Play className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-foreground font-medium">Service Showcase Video</p>
                  <p className="text-muted-foreground text-sm">Coming soon — See our team at work</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to experience our professional service?
          </p>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition-shadow"
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
