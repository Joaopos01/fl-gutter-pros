import { useState } from "react";
import { MessageCircle, X, Wrench, Calculator, Phone, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ChatStep = "initial" | "services" | "estimate" | "contact";

interface QuickOption {
  icon: React.ElementType;
  label: string;
  action: ChatStep | "call" | "scroll";
}

const InteractiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>("initial");

  const initialOptions: QuickOption[] = [
    { icon: Wrench, label: "What service do you need?", action: "services" },
    { icon: Calculator, label: "Quick estimate in 1 minute", action: "estimate" },
    { icon: Phone, label: "Talk to us now", action: "call" },
  ];

  const serviceOptions = [
    "Gutter Installation",
    "Gutter Repair",
    "Gutter Cleaning",
    "Gutter Guards",
    "Downspouts & Drainage",
  ];

  const handleOptionClick = (action: QuickOption["action"]) => {
    if (action === "call") {
      window.location.href = "tel:+15555555555";
    } else if (action === "scroll") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      setCurrentStep(action);
    }
  };

  const handleServiceSelect = (service: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setCurrentStep("initial");
    }
  };

  const goBack = () => {
    setCurrentStep("initial");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 md:w-96 shadow-2xl border-border animate-in slide-in-from-bottom-4">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Clean Cut Gutters
            </CardTitle>
            <p className="text-sm text-primary-foreground/80 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Usually responds in minutes
            </p>
          </CardHeader>
          <CardContent className="p-4">
            {currentStep === "initial" && (
              <div className="space-y-3">
                <p className="text-foreground font-medium mb-4">
                  Hi! 👋 How can we help you today?
                </p>
                {initialOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option.action)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors text-left group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground flex-1">{option.label}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            )}

            {currentStep === "services" && (
              <div className="space-y-3">
                <button
                  onClick={goBack}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-2"
                >
                  ← Back
                </button>
                <p className="text-foreground font-medium mb-3">
                  Select the service you need:
                </p>
                {serviceOptions.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceSelect(service)}
                    className="w-full p-3 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors text-left"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}

            {currentStep === "estimate" && (
              <div className="space-y-4">
                <button
                  onClick={goBack}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-2"
                >
                  ← Back
                </button>
                <p className="text-foreground font-medium">
                  Get a quick estimate! 🚀
                </p>
                <p className="text-muted-foreground text-sm">
                  Fill out our quick form and receive a detailed estimate within minutes.
                </p>
                <Button
                  className="w-full"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                    setCurrentStep("initial");
                  }}
                >
                  Get Free Estimate
                </Button>
                <p className="text-center text-muted-foreground text-xs">
                  Or call us directly: (555) 555-5555
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default InteractiveChat;
