import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const teamLeads = [
  { role: "Faculty Lead", name: "Le Xie", url: "https://seas.harvard.edu/person/le-xie" },
  {
    role: "Student Lead",
    name: "Qian Zhang",
    url: "https://www.linkedin.com/in/qian-zhang-harvard/",
  },
];

const teamSections = [
  {
    title: "PowerMCP",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-75323111b/" },
      { name: "Steven Black", url: "https://www.linkedin.com/in/steven-black-09322b31/" },
      { name: "Paulo Radatz", url: "https://www.linkedin.com/in/pauloradatz/" },
      { name: "Andrea Pomarico", url: "https://www.linkedin.com/in/andrea-pomarico-2695a2218/" },
      { name: "Muhy Eddin Za'ter", url: "https://scholar.google.com/citations?user=_IFFYFAAAAAJ&hl=en" },
      { name: "Luan Lopes dos Santos", url: "https://www.linkedin.com/in/luan-lopes/" },
      { name: "Stephen Jenkins", url: "https://www.linkedin.com/in/stephenjenkins2/" },
      { name: "Maanas Goel", url: "https://www.linkedin.com/in/maanas-goel/" },
      { name: "Shen Wang", url: "https://www.linkedin.com/in/swang16/" },
      { name: "Drew Gray", url: "https://www.linkedin.com/in/drew-gray-b09ba426/" },
      { name: "Samuel Talkington", url: "https://samueltalkington.com/" },
      { name: "Laura Hwa", url: "https://www.linkedin.com/in/laurahwa/" },
      { name: "Leo Winiecki", url: "https://www.linkedin.com/in/leo-winiecki-3337b716a/" },
    ],
  },
  {
    title: "PowerFM",
    members: [
      { name: "Shaohuai Liu", url: "https://liushaohuai5.github.io/" },
      { name: "Yuting Cai", url: "https://www.linkedin.com/in/yuting-cai/" },
      { name: "Alban Puech", url: "https://www.linkedin.com/in/alban-puech-280500187/" },
      { name: "Lin Dong", url: "https://www.linkedin.com/in/lin-dong-464a08222/" },
      { name: "Costas Mylonas", url: "https://www.linkedin.com/in/costas-mylonas-a0ab761b6/" },
      { name: "Magda Foti", url: "https://www.linkedin.com/in/magda-foti/" },
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-harvard/" },
    ],
  },
  {
    title: "PowerSkills",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-harvard/" },
      { name: "Matheus Duarte", url: "https://www.linkedin.com/in/matheusduarte/" },
      { name: "Muhy Eddin Za'ter", url: "https://scholar.google.com/citations?user=_IFFYFAAAAAJ&hl=en" },
    ],
  },
  {
    title: "PowerWF",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-harvard/" },
      { name: "Lin Dong", url: "https://www.linkedin.com/in/lin-dong-464a08222/" },
    ],
  },
  {
    title: "PowerAgent Platform",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-harvard/" },
      { name: "Karina Chung", url: "https://www.linkedin.com/in/karina-chung/" },
      { name: "Skyler Liu", url: "https://www.linkedin.com/in/skylerliu/" },
      { name: "Xiaoyang Wang", url: "https://www.linkedin.com/in/xiaoyang-wang-a04658339/" },
      { name: "Lloyd Pasley", url: "https://www.supernaenergy.com/" },
    ],
  },
];

const sectionSlug = (title: string) => title.toLowerCase().replaceAll(" ", "-");

const sectionSpans: Record<string, string> = {
  PowerMCP: "md:col-span-2 lg:col-span-8",
  PowerFM: "lg:col-span-4",
  PowerSkills: "lg:col-span-4",
  PowerWF: "lg:col-span-4",
  "PowerAgent Platform": "lg:col-span-4",
};

const CoreTeam = () => {
  return (
    <section id="core-team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            className="mb-6"
            eyebrow="Meet the Team"
            title="Core Team"
          />

          <div
            data-testid="team-leads"
            className="core-team-enter mx-auto mb-10 flex max-w-2xl flex-col items-center justify-center gap-5 border-y border-border/70 py-5 sm:flex-row sm:gap-0"
          >
            {teamLeads.map((lead) => (
              <div
                key={lead.role}
                className="flex items-center gap-3 px-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-border"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {lead.role}
                </span>
                <a
                  href={lead.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {lead.name}
                  <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
                </a>
              </div>
            ))}
          </div>

          <div
            data-testid="team-grid"
            className="core-team-enter core-team-enter-delay grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-12"
          >
            {teamSections.map((section) => (
              <article
                key={section.title}
                data-testid={`team-${sectionSlug(section.title)}`}
                className={`group/team rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40 ${sectionSpans[section.title]}`}
              >
                <h3 className="mb-4 border-b border-border pb-3 text-lg font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul
                  className={`grid gap-x-6 gap-y-2.5 ${
                    section.title === "PowerMCP" ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {section.members.map((member) => (
                    <li key={member.name}>
                      <a
                        href={member.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/member inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                      >
                        {member.name}
                        <ExternalLink className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover/member:-translate-y-0.5 group-hover/member:translate-x-0.5 motion-reduce:transform-none" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
