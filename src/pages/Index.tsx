import { Button } from "@/components/ui/button";
import { LiveCounter } from "@/components/LiveCounter";
import { HowItWorks } from "@/components/HowItWorks";
import { EarningsCalculator } from "@/components/EarningsCalculator";
import heroImage from "@/assets/hero-cyberpunk.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Don't Block Spammers.{" "}
            <span className="text-primary text-glow">Bankrupt Them.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our AI answers your spam calls, tricks them into breaking the law, 
            and helps you collect <span className="text-primary font-bold">$500-$1,500</span> per call.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse font-bold text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Live Counter */}
      <section className="container mx-auto px-6 -mt-12 relative z-20">
        <LiveCounter />
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <HowItWorks />
      </section>

      {/* Earnings Calculator */}
      <section className="container mx-auto px-6 py-16 max-w-3xl">
        <EarningsCalculator />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="font-mono text-sm">
            Protected by federal law: TCPA (Telephone Consumer Protection Act) & FDCPA (Fair Debt Collection Practices Act)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
