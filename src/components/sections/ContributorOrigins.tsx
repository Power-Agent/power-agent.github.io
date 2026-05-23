import { GraduationCap, Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

import harvard from "@/assets/images/logos/harvard.png";
import tamu from "@/assets/images/logos/tamu.png";
import mit from "@/assets/images/logos/mit.png";
import princeton from "@/assets/images/logos/princeton.png";
import eth from "@/assets/images/logos/eth.png";
import upenn from "@/assets/images/logos/upenn.png";
import uw from "@/assets/images/logos/uw.png";
import unm from "@/assets/images/logos/unm.png";
import polimi from "@/assets/images/logos/polimi.png";
import cuboulder from "@/assets/images/logos/cuboulder.png";
import larochelle from "@/assets/images/logos/larochelle.png";

import isone from "@/assets/images/logos/isone.png";
import ercot from "@/assets/images/logos/ercot.png";
import miso from "@/assets/images/logos/miso.webp";
import epri from "@/assets/images/logos/epri.jpg";
import wsp from "@/assets/images/logos/wsp.svg";
import qualus from "@/assets/images/logos/qualus.svg";
import snorkel from "@/assets/images/logos/snorkel.svg";
import enliteai from "@/assets/images/logos/enliteai.svg";
import ubitech from "@/assets/images/logos/ubitech.png";
import amptimal from "@/assets/images/logos/amptimal.svg";

type Org = { name: string; url: string; logo: string };

const academic: Org[] = [
  { name: "Harvard University", url: "https://www.harvard.edu", logo: harvard },
  { name: "MIT", url: "https://www.mit.edu", logo: mit },
  { name: "Princeton University", url: "https://www.princeton.edu", logo: princeton },
  { name: "University of Pennsylvania", url: "https://www.upenn.edu", logo: upenn },
  { name: "ETH Zürich", url: "https://ethz.ch", logo: eth },
  { name: "Texas A&M University", url: "https://www.tamu.edu", logo: tamu },
  { name: "University of Washington", url: "https://www.washington.edu", logo: uw },
  { name: "University of Colorado Boulder", url: "https://www.colorado.edu", logo: cuboulder },
  { name: "University of New Mexico", url: "https://www.unm.edu", logo: unm },
  { name: "Politecnico di Milano", url: "https://www.polimi.it", logo: polimi },
  { name: "La Rochelle Université", url: "https://www.univ-larochelle.fr", logo: larochelle },
];

const industry: Org[] = [
  { name: "ISO New England", url: "https://www.iso-ne.com", logo: isone },
  { name: "ERCOT", url: "https://www.ercot.com", logo: ercot },
  { name: "MISO", url: "https://www.misoenergy.org", logo: miso },
  { name: "EPRI", url: "https://www.epri.com", logo: epri },
  { name: "WSP", url: "https://www.wsp.com", logo: wsp },
  { name: "Qualus", url: "https://qualuscorp.com", logo: qualus },
  { name: "Snorkel AI", url: "https://snorkel.ai", logo: snorkel },
  { name: "EnliteAI", url: "https://www.enlite.ai", logo: enliteai },
  { name: "UBITECH", url: "https://ubitech.eu", logo: ubitech },
  { name: "Amptimal", url: "https://amptimal.com", logo: amptimal },
];

const LogoTile = ({ org, hidden = false }: { org: Org; hidden?: boolean }) => (
  <a
    href={org.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-hidden={hidden}
    tabIndex={hidden ? -1 : 0}
    title={org.name}
    className="group mx-3 flex h-[124px] w-[196px] shrink-0 flex-col items-center justify-center rounded-2xl border border-border/70 bg-card px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
  >
    <div className="flex flex-1 items-center justify-center">
      <img
        src={org.logo}
        alt={`${org.name} logo`}
        loading="lazy"
        className="max-h-14 max-w-[144px] object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <span className="mb-4 line-clamp-2 text-center text-[11px] font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
      {org.name}
    </span>
  </a>
);

const MarqueeRow = ({
  items,
  reverse = false,
  duration = 40,
}: {
  items: Org[];
  reverse?: boolean;
  duration?: number;
}) => (
  <div className="marquee-row marquee-fade overflow-hidden py-2">
    <div
      className={reverse ? "marquee-track-reverse" : "marquee-track"}
      style={{ animationDuration: `${duration}s` }}
    >
      {[...items, ...items].map((org, i) => (
        <LogoTile key={`${org.name}-${i}`} org={org} hidden={i >= items.length} />
      ))}
    </div>
  </div>
);

const RowLabel = ({
  icon: Icon,
  label,
}: {
  icon: typeof GraduationCap;
  label: string;
}) => (
  <div className="container mx-auto mb-4 flex items-center gap-3 px-4">
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-semibold text-foreground shadow-sm">
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </span>
    <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
  </div>
);

const ContributorOrigins = () => {
  return (
    <section id="contributor-origins" className="relative overflow-hidden py-20 md:py-28">
      {/* atmospheric backdrop */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        <SectionHeader
          className="container mx-auto mb-14 px-4"
          eyebrow="Global Network"
          title={
            <>
              Where Our <span className="text-primary">Contributors</span> Come From
            </>
          }
          subtitle="PowerAgent unites researchers and engineers from leading universities and energy-sector organizations around the globe."
        />

        <div className="space-y-12">
          <div>
            <RowLabel icon={GraduationCap} label="Academic" />
            <MarqueeRow items={academic} duration={48} />
          </div>

          <div>
            <RowLabel icon={Building2} label="Industry" />
            <MarqueeRow items={industry} reverse duration={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorOrigins;
