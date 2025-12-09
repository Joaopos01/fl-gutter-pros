import { useEffect, useState, useRef } from "react";
import { TrendingUp, Clock, ThumbsUp, Award } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: TrendingUp,
    value: 2500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful installations across Florida",
  },
  {
    icon: Clock,
    value: 4,
    suffix: "h",
    label: "Average Installation",
    description: "Fast, efficient service for most homes",
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-service surveys",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted expertise in Florida",
  },
];

const AnimatedCounter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const TransparencyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparency You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real projects. We believe in complete transparency about our work and results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Bars Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Our Performance Metrics
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">On-Time Completion</span>
                <span className="text-primary font-semibold">96%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: isVisible ? "96%" : "0%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">Customer Referral Rate</span>
                <span className="text-primary font-semibold">89%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 delay-200"
                  style={{ width: isVisible ? "89%" : "0%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">5-Star Reviews</span>
                <span className="text-primary font-semibold">94%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 delay-300"
                  style={{ width: isVisible ? "94%" : "0%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyStats;
