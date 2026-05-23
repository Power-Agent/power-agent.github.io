import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const teamSections = [
  {
    title: "Leads",
    subsections: [
      {
        title: "Faculty Leads",
        members: [{ name: "Le Xie", url: "https://seas.harvard.edu/person/le-xie" }],
      },
      {
        title: "Student Leads",
        members: [{ name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-harvard/" }],
      },
    ],
  },
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
      { name: "Leo Winiecki", url: "https://www.linkedin.com/in/leo-winiecki-3337b716a/" },
    ],
  },
];

import SeasLogo from "@/assets/images/seaslogo.png";
import PaiLogo from "@/assets/images/pailogo_black.png";

const CoreTeam = () => {
  return (
    <section id="core-team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            className="mb-8"
            eyebrow="Meet the Team"
            title="Core Team"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamSections.map((section) => (
              <Card key={section.title} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
                    {section.title}
                  </h3>

                  {section.subsections ? (
                    <div className="space-y-4">
                      {section.subsections.map((sub) => (
                        <div key={sub.title}>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            {sub.title}
                          </h4>
                          <ul className="space-y-2">
                            {sub.members.map((member) => (
                              <li key={member.name}>
                                <a
                                  href={member.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                                >
                                  {member.name}
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {section.members?.map((member) => (
                        <li key={member.name}>
                          <a
                            href={member.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                          >
                            {member.name}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
