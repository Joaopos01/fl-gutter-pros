import { Shield, ClipboardCheck, Wrench, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const maintenanceChecklist = [
  "Inspect gutters for debris and blockages",
  "Check downspouts for proper flow",
  "Examine seams and joints for leaks",
  "Verify hangers and brackets are secure",
  "Clear any vegetation growth",
  "Test drainage during rain simulation",
];

const warranties = [
  {
    icon: Shield,
    title: "Material Warranty",
    description: "5-year warranty on all gutter materials against defects and corrosion.",
  },
  {
    icon: Wrench,
    title: "Workmanship Guarantee",
    description: "2-year guarantee on installation quality and craftsmanship.",
  },
];

const WarrantySection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Don't Disappear After Installation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment extends beyond the installation. Enjoy peace of mind with our comprehensive warranty coverage and post-sale support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {warranties.map((item, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-foreground">Maintenance Checklist</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Keep your gutters in top condition with our recommended maintenance steps:
              </p>
              <ul className="space-y-3">
                {maintenanceChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
