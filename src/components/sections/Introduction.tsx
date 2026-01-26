import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Brain, Workflow, Puzzle } from "lucide-react";

const repositories = [
  {
    name: "PowerFM",
    icon: Brain,
    description: "Fine-tuned LLMs for power system tasks, full domain-specific Foundation Models, and benchmarking for model performance",
    url: "https://github.com/Power-Agent/PowerFM",
  },
  {
    name: "PowerMCP",
    icon: Puzzle,
    description: "Protocols enabling LLMs to control and interact with power domain software and tools",
    url: "https://github.com/Power-Agent/PowerMCP",
  },
  {
    name: "PowerWF",
    icon: Workflow,
    description: "Modular agentic workflows for orchestrating models, tools, and decisions",
    url: "https://github.com/Power-Agent/PowerWF",
  },
];

const Introduction = () => {
  return (
    <section id="introduction" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Introduction
          </h2>
          <div className="text-left space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              PowerAgent is an open-source community dedicated to accelerating the development of LLM-powered Tools
              and Agentic AI in the power systems domain. We aim to bridge the gap between cutting-edge AI and the
              real-world needs of system operators, electric utilities, and researchers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe the future of agentic AI in the power domain will be driven by the combined development and
              coordination of three key components — <strong>Foundation Models (FM)</strong>, <strong>Model Context Protocol (MCP)</strong>, and <strong>Workflows (WF)</strong>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {repositories.map((repo) => {
            const Icon = repo.icon;
            return (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary group-hover:underline flex items-center gap-2">
                        {repo.name}
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{repo.description}</p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
