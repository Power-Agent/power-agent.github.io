import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Play } from "lucide-react";

const demos = [
  {
    title: "Grid Impact Evaluation",
    videoId: "LxF8RqsNf04",
    description: "This demo showcases how Agentic AI can streamline the grid impact evaluation process for large loads like data centers, automating analysis and report generation.",
  },
  {
    title: "PowerSkills + PowerMCP",
    videoId: "bxZu47f6fUE",
    description: "This demo shows how PowerSkills and PowerMCP can be combined to equip AI agents with specialized knowledge and structured instructions for power-system simulation, analysis, and optimization across a range of industry software tools. The final report will follow an industry-standard format.",
  },
  {
    title: "Contingency Evaluation",
    videoId: "MbF-SlBI4Ws",
    description: "An LLM automatically operates power system software (PowerWorld, pandapower) to perform contingency analysis and generate professional reports.",
  },
  {
    title: "Datacenter Siting Expert",
    videoId: "ZfVGsxCv0eg",
    description: "This tool leverages RAG to provide detailed information for potential datacenter locations, including local regulations, costs, and infrastructure.",
    link: {
      text: "Try it on Hugging Face",
      url: "https://huggingface.co/spaces/zhangqianleo/datacenterAgent",
    },
  },
  {
    title: "Load Growth Evaluation",
    videoId: "euFUvhhV5dM",
    description: "An LLM operates PowerWorld to evaluate different load growth scenarios and generate professional reports with recommendations.",
  },
  {
    title: "Electricity Market Expert",
    videoId: "ccY93ssvUwU",
    description: "An automated workflow that handles electricity market inquiries, generates professional responses, and supports human-in-the-loop review.",
  },
];

const Demos = () => {
  return (
    <section id="demos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Demos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See PowerAgent in action with real-world power systems applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {demos.map((demo) => (
            <Card key={demo.videoId} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Play className="h-5 w-5 text-primary" />
                  {demo.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative rounded-lg overflow-hidden bg-muted aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${demo.videoId}`}
                    title={demo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-muted-foreground">
                  {demo.description}
                  {demo.link && (
                    <>
                      {" "}
                      <a
                        href={demo.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                      >
                        {demo.link.text}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
