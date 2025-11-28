import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Play, AlertCircle, Lock } from "lucide-react";
import { useState } from "react";

const BountyDetail = () => {
  const { id } = useParams();
  const [showPaywall, setShowPaywall] = useState(false);

  const caseData = {
    id,
    callerId: "+1 (555) 123-4567",
    duration: "4:32",
    date: "2025-11-28",
    violation: "High",
    payout: "$1,200",
    transcript: [
      { speaker: "AI", text: "Hello?" },
      { speaker: "Spammer", text: "This is the IRS. You owe $5,000 in back taxes." },
      { speaker: "AI", text: "Oh no! What happens if I don't pay?" },
      { 
        speaker: "Spammer", 
        text: "We will send police to arrest you immediately if you don't pay right now.",
        violation: "FDCPA § 806 - Harassment & False Threats"
      },
      { speaker: "AI", text: "I'm at work right now, can I call you back?" },
      { 
        speaker: "Spammer", 
        text: "No! Pay now or we're calling your employer.",
        violation: "FDCPA § 805(b) - Prohibited Communications"
      },
    ],
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Case <span className="text-primary text-glow font-mono">#{caseData.id}</span>
        </h1>
        <p className="text-muted-foreground">Complete violation analysis and evidence</p>
      </div>

      <div className="grid gap-6 mb-6">
        {/* Case Details */}
        <Card className="border-border bg-card cyber-grid">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Case Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground font-mono mb-1">Caller ID</p>
              <p className="font-mono font-bold">{caseData.callerId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-mono mb-1">Date</p>
              <p className="font-mono font-bold">{caseData.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-mono mb-1">Duration</p>
              <p className="font-mono font-bold">{caseData.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-mono mb-1">Potential Payout</p>
              <p className="font-mono font-bold text-primary text-xl">{caseData.payout}</p>
            </div>
          </CardContent>
        </Card>

        {/* Audio Player */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              Audio Recording
            </CardTitle>
            <CardDescription>Listen to the AI wasting the spammer's time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary rounded-lg p-8 text-center border border-border">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse">
                <Play className="h-5 w-5 mr-2" />
                Play Recording
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transcript with Violations */}
        <Card className="border-border bg-card cyber-grid">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Transcript & Evidence
            </CardTitle>
            <CardDescription>Illegal phrases highlighted with law violations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {caseData.transcript.map((line, index) => (
              <div key={index} className={`p-4 rounded-lg ${line.violation ? 'bg-destructive/10 border border-destructive' : 'bg-secondary'}`}>
                <p className="font-bold text-sm mb-1 font-mono text-primary">{line.speaker}:</p>
                <p className="mb-2">{line.text}</p>
                {line.violation && (
                  <Badge variant="destructive" className="font-mono text-xs">
                    ⚠️ {line.violation}
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Generate Demand Letter */}
        <Card className="border-primary bg-primary/5 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-glow">
              <FileText className="h-6 w-6" />
              Demand Letter
            </CardTitle>
            <CardDescription>Auto-generated legal demand based on violations</CardDescription>
          </CardHeader>
          <CardContent>
            {!showPaywall ? (
              <Button 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse font-bold text-lg"
                onClick={() => setShowPaywall(true)}
              >
                Generate Demand Letter
              </Button>
            ) : (
              <div className="bg-secondary/50 rounded-lg p-8 text-center border border-border backdrop-blur-sm relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background rounded-lg" />
                <Lock className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Unlock Your Demand Letter</h3>
                <p className="text-muted-foreground mb-4">
                  Subscribe to unlock unlimited demand letters or pay a 30% success fee
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Subscribe - $29/mo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary">
                    Success Fee - 30%
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BountyDetail;
