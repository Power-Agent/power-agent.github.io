import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const tutorialUrl =
  "https://github.com/Power-Agent/PowerMCP/blob/main/PowerMCP_Tutorial.pdf";

const QuickStart = () => {
  return (
    <section id="quick-start" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            className="mb-8"
            eyebrow="Get Started"
            title="Quick Start"
          />
          
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">PowerMCP Tutorial</CardTitle>
                    <CardDescription>PowerMCP_Tutorial.pdf</CardDescription>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2 self-start sm:self-auto"
                >
                  <a href={tutorialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Open tutorial
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
