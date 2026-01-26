import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

import PowerAgentLogo from "@/assets/images/logo2.png";
import SeasLogo from "@/assets/images/seaslogo.png";
import PaiLogo from "@/assets/images/pailogo_black.png";

const navigation = [
  { name: "Introduction", href: "#introduction" },
  { name: "Vision", href: "#vision" },
  { name: "Demos", href: "#demos" },
  { name: "Community", href: "#community" },
  { name: "Team", href: "#core-team" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />

      {/* Navigation Bar */}
      <nav className="relative z-20 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-4">
            <img src={PowerAgentLogo} alt="PowerAgent Logo" className="w-12 h-12 rounded-lg object-contain" />
            <span className="font-bold text-2xl hidden sm:block">PowerAgent</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* GitHub Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Power-Agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="default" className="hidden sm:flex gap-3 bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20 text-secondary-foreground text-lg px-6 py-6 h-12">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-secondary-foreground/10">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://github.com/Power-Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors py-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-none">
            <span className="text-primary">Power</span>Agent
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-secondary-foreground/90 font-light max-w-4xl mx-auto mb-16">
            Open-Source Agentic AI for the Power Grids
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#introduction">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">
                Explore the Community
              </Button>
            </a>
            <a
              href="https://github.com/Power-Agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 bg-secondary-foreground/5 border-secondary-foreground/20 hover:bg-secondary-foreground/10 text-secondary-foreground">
                <Github className="h-6 w-6" />
                GitHub Repositories
              </Button>
            </a>
          </div>

        </div>

        {/* Maintenance Info - Pill */}
        <div className="flex flex-col items-center mt-24 mb-0">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary">
            <span className="text-lg font-semibold text-center px-2">
              Maintained by the Power and AI Initiative (PAI) at Harvard SEAS
            </span>
          </div>
        </div>
      </div>

      {/* Affiliate Logos - Full Row Background */}
      <div className="w-full bg-white py-6 mt-4 border-y border-secondary/10 flex items-center justify-center gap-12 relative z-20">
        <a
          href="https://seas.harvard.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity h-12 md:h-16 flex items-center justify-center"
        >
          <img src={SeasLogo} alt="Harvard SEAS" className="h-full object-contain" />
        </a>
        <div className="w-px h-8 bg-secondary/10" />
        <a
          href="https://pai.seas.harvard.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity h-12 md:h-16 flex items-center justify-center"
        >
          <img src={PaiLogo} alt="Power & AI Initiative" className="h-full object-contain" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </header>
  );
};

export default Header;
