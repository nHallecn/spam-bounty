import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Bot } from "lucide-react";
import { useState } from "react";

const personas = [
  {
    id: "grandpa",
    name: "The Confused Grandpa",
    description: "Rambles endlessly, asks them to repeat everything. Maximum time wasted.",
    icon: "👴",
  },
  {
    id: "executive",
    name: "The Busy Executive",
    description: "Agrees to everything but demands company details for 'records.' Extracts address for lawsuits.",
    icon: "💼",
  },
  {
    id: "yesman",
    name: "The Yes Man",
    description: "Eagerly agrees to every scam. Baits them into selling illegal services (TCPA violations).",
    icon: "👍",
  },
];

const Settings = () => {
  const [selectedPersona, setSelectedPersona] = useState("grandpa");

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          AI <span className="text-primary text-glow">Settings</span>
        </h1>
        <p className="text-muted-foreground">Configure your defender persona</p>
      </div>

      <Card className="border-border bg-card cyber-grid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            Choose Your Defender Persona
          </CardTitle>
          <CardDescription>
            Select the AI personality that will answer spam calls on your behalf
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPersona} onValueChange={setSelectedPersona} className="space-y-4">
            {personas.map((persona) => (
              <div
                key={persona.id}
                className={`flex items-start space-x-4 rounded-lg border p-4 transition-all ${
                  selectedPersona === persona.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={persona.id} id={persona.id} className="mt-1" />
                <Label htmlFor={persona.id} className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{persona.icon}</span>
                    <h3 className="font-bold text-lg">{persona.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{persona.description}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
