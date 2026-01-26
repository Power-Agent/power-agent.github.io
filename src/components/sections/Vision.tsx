import { Card, CardContent } from "@/components/ui/card";
import visionImg from "@/assets/images/vision.png";

const Vision = () => {
  return (
    <section id="vision" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Vision
          </h2>

          {/* Vision Statement */}
          <Card className="mb-8 border-l-4 border-l-primary bg-primary/5 max-w-none">
            <CardContent className="py-8 text-center">
              <p className="text-xl md:text-2xl text-foreground font-semibold inline-block">
                Toward General Intelligence for Power Grids through Open-Source Community
              </p>
            </CardContent>
          </Card>

          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            We are building a comprehensive ecosystem based on three interconnected layers: workflow automation,
            tool integration, and domain-specialized foundation models. Through this layered architecture, we
            aim to deliver scalable and intelligent solutions, accelerate the deployment of agentic AI systems,
            and foster an open, collaborative community within the power sector.
          </p>

          {/* Vision Diagram */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-4 md:p-8 flex justify-center">
            <img
              src={visionImg}
              alt="PowerAgent Vision Diagram"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
