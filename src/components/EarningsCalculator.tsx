import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const EarningsCalculator = () => {
  const [callsPerWeek, setCallsPerWeek] = useState(10);
  
  const lowEstimate = callsPerWeek * 500 * 52;
  const highEstimate = callsPerWeek * 1500 * 52;

  return (
    <div className="bg-card border border-border rounded-lg p-8 cyber-grid">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Calculate Your Potential <span className="text-primary text-glow">Earnings</span>
      </h3>
      
      <div className="mb-8">
        <label className="block text-sm font-mono text-muted-foreground mb-4">
          Spam Calls Per Week: <span className="text-primary font-bold text-lg">{callsPerWeek}</span>
        </label>
        <Slider
          value={[callsPerWeek]}
          onValueChange={(value) => setCallsPerWeek(value[0])}
          min={1}
          max={50}
          step={1}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-secondary border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground font-mono mb-1">Conservative</p>
          <p className="text-2xl font-bold text-primary font-mono">
            ${lowEstimate.toLocaleString()}/yr
          </p>
        </div>
        <div className="bg-secondary border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground font-mono mb-1">Optimistic</p>
          <p className="text-2xl font-bold text-primary font-mono">
            ${highEstimate.toLocaleString()}/yr
          </p>
        </div>
      </div>

      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse font-bold">
        Start Hunting Spammers
      </Button>
    </div>
  );
};
