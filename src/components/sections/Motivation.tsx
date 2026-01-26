import { Card, CardContent } from "@/components/ui/card";

const Motivation = () => {
  return (
    <section id="motivation" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Motivation
          </h2>
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The rapid rise of LLMs and agentic frameworks has opened new frontiers in intelligent software.
                Inspired by the success of open-source initiatives in LLMs (like{" "}
                <a 
                  href="https://deepseek.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  DeepSeek
                </a>{" "}
                and{" "}
                <a 
                  href="https://www.llama.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Llama
                </a>
                ) and agentic control protocols (especially Anthropic's{" "}
                <a 
                  href="https://www.anthropic.com/news/model-context-protocol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  MCP
                </a>{" "}
                community), we believe it's time to bring the same spirit of innovation and openness to the power systems domain.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
