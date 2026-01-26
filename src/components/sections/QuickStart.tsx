import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickStart = () => {
  return (
    <section id="quick-start" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Quick Start
          </h2>
          
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">PowerMCP Tutorial</CardTitle>
                </div>
                <a
                  href="https://raw.githubusercontent.com/Power-Agent/PowerMCP/main/PowerMCP_Tutorial.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Open PDF
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                className="w-full border-0"
                style={{ height: "70vh" }}
                src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/Power-Agent/PowerMCP/main/PowerMCP_Tutorial.pdf&embedded=true"
                title="PowerMCP Tutorial"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
