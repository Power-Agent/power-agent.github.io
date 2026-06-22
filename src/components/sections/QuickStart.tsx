import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";

const QuickStart = () => {
  return (
    <section id="quick-start" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            className="mb-8"
            eyebrow="Recent Release"
            title="Recent Release"
            subtitle="PowerMCP New Feature Release: Pip Install, Auto Setup, and PowerIO Integration"
          />
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/xwTcNZLmIW8"
                  title="PowerMCP New Feature Release"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
