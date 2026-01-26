import { ExternalLink } from "lucide-react";

import PowerAgentLogo from "@/assets/images/logo2.png";
import SeasLogo from "@/assets/images/seaslogo.png";
import PaiLogo from "@/assets/images/pailogo_black.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/70 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={PowerAgentLogo} alt="PowerAgent Logo" className="w-10 h-10 rounded-lg object-contain" />
              <span className="font-bold text-xl text-secondary-foreground">PowerAgent</span>
            </div>
            <p className="text-sm max-w-md mb-4">
              An open-source community dedicated to accelerating the development of LLM-powered
              tools and Agentic AI in the power systems domain.
            </p>
            <p className="text-sm">
              Maintained by the{" "}
              <a
                href="https://pai.seas.harvard.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Power and AI Initiative (PAI)
              </a>
              {" "}at Harvard SEAS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#introduction" className="hover:text-secondary-foreground transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-secondary-foreground transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-secondary-foreground transition-colors">
                  Demos
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-secondary-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#core-team" className="hover:text-secondary-foreground transition-colors">
                  Core Team
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Power-Agent/PowerFM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-foreground transition-colors inline-flex items-center gap-1"
                >
                  PowerFM <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Power-Agent/PowerMCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-foreground transition-colors inline-flex items-center gap-1"
                >
                  PowerMCP <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Power-Agent/PowerWF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-foreground transition-colors inline-flex items-center gap-1"
                >
                  PowerWF <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://join.slack.com/t/poweragentslack/shared_invite/zt-3c14g1lv4-LfwB2DQU1_ZwTyxJO6k_5Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-foreground transition-colors inline-flex items-center gap-1"
                >
                  Slack Community <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Harvard Required Footer */}
      <div className="bg-secondary border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-secondary-foreground/60">
            <p>© 2026 President and Fellows of Harvard College</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="https://trademark.harvard.edu/pages/trademark-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-foreground transition-colors"
              >
                Trademark Notice
              </a>
              <a
                href="https://accessibility.huit.harvard.edu/digital-accessibility-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-foreground transition-colors"
              >
                Accessibility Policy
              </a>
              <a
                href="https://www.harvard.edu/privacy-statement/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-foreground transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
