import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, ExternalLink } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Community
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Like other open-source communities, PowerAgent is built by and for the community. GitHub was chosen
              as the home of this initiative to enable transparent, global collaboration. Maintained by the{" "}
              <a 
                href="https://pai.seas.harvard.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Power and AI Initiative (PAI)
              </a>{" "}
              at Harvard SEAS, all contributions are reviewed to ensure they are relevant and
              open-source, utility, and integrity. We invite researchers, engineers, and developers across
              disciplines to take part in shaping this ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Simple and Unrestricted Access
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To keep PowerAgent accessible with minimal effort, all current benchmarks are maintained and tested
                  using Cursor, one of the most popular AI coding IDEs. All PowerAgent code is distributed under the MIT license.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Join the Conversation</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with other developers, ask questions, and share your ideas.
                </p>
                <a
                  href="https://join.slack.com/t/poweragentslack/shared_invite/zt-3c14g1lv4-LfwB2DQU1_ZwTyxJO6k_5Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Join Slack Community
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
          
          {/* Academic Citation */}
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">For Academic Use</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Please cite the following{" "}
                <a 
                  href="https://ieeexplore.ieee.org/document/11131348" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  paper <ExternalLink className="h-3 w-3" />
                </a>
                :
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 py-2 bg-muted/30 rounded-r-lg">
                <p className="text-sm text-muted-foreground italic">
                  Qian Zhang and Le Xie. "PowerAgent: A Road Map Toward Agentic
                  Intelligence in Power Systems: Foundation Model, Model Context Protocol, and Workflow," in IEEE
                  Power and Energy Magazine, vol. 23, no. 5, pp. 93-101, 2025.
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;
