import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Scale } from "lucide-react";

const legalInfo = [
  {
    title: "TCPA - Telephone Consumer Protection Act",
    subtitle: "Federal law restricting robocalls and telemarketing",
    content: [
      "Prohibits automated calls without prior consent",
      "Violations can result in $500-$1,500 per call",
      "Applies to robocalls, auto-dialers, and prerecorded messages",
      "Companies must maintain Do Not Call lists",
    ],
  },
  {
    title: "FDCPA - Fair Debt Collection Practices Act",
    subtitle: "Federal law protecting consumers from abusive debt collectors",
    content: [
      "Prohibits harassment, threats, and deceptive practices",
      "Collectors cannot contact you at work if prohibited",
      "Cannot threaten arrest or legal action they won't take",
      "Violations carry penalties of up to $1,000 per call",
    ],
  },
];

const Legal = () => {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Legal <span className="text-primary text-glow">Library</span>
        </h1>
        <p className="text-muted-foreground">Understanding your rights under federal law</p>
      </div>

      <div className="space-y-6">
        {legalInfo.map((law, index) => (
          <Card key={index} className="border-border bg-card cyber-grid">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Scale className="h-6 w-6 text-primary" />
                {law.title}
              </CardTitle>
              <CardDescription className="text-base">{law.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {law.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        <Card className="border-primary bg-primary/5 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-glow">
              <BookOpen className="h-6 w-6" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              These federal laws give you the right to sue violators and collect damages. 
              ReverseDial helps you identify violations, gather evidence, and generate demand letters 
              to enforce your rights under the law.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              <strong>Disclaimer:</strong> This platform provides tools and information but is not a law firm. 
              Consult with an attorney for legal advice specific to your situation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Legal;
