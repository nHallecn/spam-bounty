import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const mockCalls = [
  { id: 1, callerId: "+1 (555) 123-4567", duration: "4:32", violation: "High", payout: "$1,200" },
  { id: 2, callerId: "+1 (555) 987-6543", duration: "2:15", violation: "Medium", payout: "$800" },
  { id: 3, callerId: "+1 (555) 246-8135", duration: "6:48", violation: "High", payout: "$1,500" },
  { id: 4, callerId: "+1 (555) 369-2580", duration: "1:45", violation: "Low", payout: "$500" },
  { id: 5, callerId: "+1 (555) 147-2589", duration: "5:20", violation: "High", payout: "$1,350" },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Command <span className="text-primary text-glow">Center</span>
        </h1>
        <p className="text-muted-foreground">Your intercepted spam calls and detected violations</p>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden cyber-grid">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="font-mono text-foreground">Caller ID</TableHead>
              <TableHead className="font-mono text-foreground">Duration</TableHead>
              <TableHead className="font-mono text-foreground">Violation</TableHead>
              <TableHead className="font-mono text-foreground">Potential Payout</TableHead>
              <TableHead className="font-mono text-foreground">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCalls.map((call) => (
              <TableRow key={call.id} className="border-b border-border hover:bg-muted/50">
                <TableCell className="font-mono">{call.callerId}</TableCell>
                <TableCell className="font-mono">{call.duration}</TableCell>
                <TableCell>
                  <Badge 
                    variant={call.violation === "High" ? "default" : call.violation === "Medium" ? "secondary" : "outline"}
                    className={call.violation === "High" ? "bg-primary text-primary-foreground border-primary" : ""}
                  >
                    {call.violation}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-primary font-bold">{call.payout}</TableCell>
                <TableCell>
                  <Link to={`/bounty/${call.id}`}>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Eye className="h-4 w-4 mr-2" />
                      View Case
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
