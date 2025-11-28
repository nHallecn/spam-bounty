import { useEffect, useState } from "react";
import { DollarSign, Clock } from "lucide-react";

export const LiveCounter = () => {
  const [damages, setDamages] = useState(1240000);
  const [timeWasted, setTimeWasted] = useState(4000);

  useEffect(() => {
    const damageInterval = setInterval(() => {
      setDamages(prev => prev + Math.floor(Math.random() * 1500));
    }, 3000);

    const timeInterval = setInterval(() => {
      setTimeWasted(prev => prev + Math.floor(Math.random() * 2));
    }, 2000);

    return () => {
      clearInterval(damageInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg p-6 cyber-grid">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 glow-pulse">
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-mono">Total Damages Identified</p>
            <p className="text-3xl font-bold text-primary text-glow animate-counter font-mono">
              ${damages.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 glow-pulse">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-mono">Spammer Time Wasted</p>
            <p className="text-3xl font-bold text-primary text-glow animate-counter font-mono">
              {timeWasted.toLocaleString()} hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
