import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitPullRequest, Mail, Bell, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const Contribute = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfW93GmaOHHSm_447kk_mQgSN9ZudPFCV7CROQ9bdPrAMMtLA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "entry.1572849290": email,
          }),
        }
      );
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contribute" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GitPullRequest className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How to Contribute
            </h2>
          </div>
          
          <Card className="border-border mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                PowerAgent is a collaborative community-driven initiative. Users are encouraged to{" "}
                <a
                  href="https://docs.github.com/en/get-started/quickstart/fork-a-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  fork <ExternalLink className="h-3 w-3" />
                </a>{" "}
                benchmark repositories, modify them, and contribute enhancements back to the broader community via{" "}
                <a
                  href="https://docs.github.com/en/pull-requests/collaborating/getting-started/about-pull-requests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  pull requests <ExternalLink className="h-3 w-3" />
                </a>
                .
              </p>
              <p className="text-muted-foreground">
                To join the PowerAgent community core team or ask questions, please reach out to the administrator:{" "}
                <a
                  href="mailto:qianzhang@g.harvard.edu"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="h-4 w-4" />
                  Qian Zhang
                </a>
              </p>
            </CardContent>
          </Card>
          
          {/* Newsletter Subscription */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Stay Updated</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for updates and announcements.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
                <Button type="submit" disabled={isSubmitting} className="whitespace-nowrap">
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
