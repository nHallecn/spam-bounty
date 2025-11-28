import { PhoneForwarded, Bot, FileText } from "lucide-react";

const steps = [
  {
    icon: PhoneForwarded,
    title: "Forward Calls",
    description: "You reject the call; our AI picks it up instantly.",
  },
  {
    icon: Bot,
    title: "The Trap",
    description: "Our AI agent engages them, baits them into threats, and records the violation.",
  },
  {
    icon: FileText,
    title: "The Payday",
    description: "We generate the legal demand letter. You send it. You get paid.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It <span className="text-primary text-glow">Works</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:glow-pulse">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-5xl font-bold text-primary/20 font-mono">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
