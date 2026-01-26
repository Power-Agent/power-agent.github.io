import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Users } from "lucide-react";

const teamSections = [
  {
    title: "Faculty Leads",
    members: [
      { name: "Le Xie", url: "https://seas.harvard.edu/person/le-xie" },
    ],
  },
  {
    title: "PowerSkills",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-75323111b/" },
      { name: "Muhy Eddin Za'ter", url: "https://scholar.google.com/citations?user=_IFFYFAAAAAJ&hl=en" },
      { name: "Matheus Duarte", url: "https://www.linkedin.com/in/matheusduarte/" },
    ],
  },
  {
    title: "PowerMCP",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-75323111b/" },
      { name: "Muhy Eddin Za'ter", url: "https://scholar.google.com/citations?user=_IFFYFAAAAAJ&hl=en" },
      { name: "Stephen Jenkins", url: "https://www.linkedin.com/in/stephenjenkins2/" },
      { name: "Maanas Goel", url: "https://www.linkedin.com/in/maanas-goel/" },
    ],
  },
  {
    title: "PowerFM",
    members: [
      { name: "Shaohuai Liu", url: "https://liushaohuai5.github.io/" },
      { name: "Alban Puech", url: "https://www.linkedin.com/in/alban-puech-280500187/" },
      { name: "Lin Dong", url: "https://www.linkedin.com/in/lin-dong-464a08222/" },
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-75323111b/" },
    ],
  },
  {
    title: "PowerWF",
    members: [
      { name: "Lin Dong", url: "https://www.linkedin.com/in/lin-dong-464a08222/" },
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-75323111b/" },
    ],
  },
  {
    title: "PowerAgent Platform",
    members: [
      { name: "Qian Zhang", url: "https://www.linkedin.com/in/qian-zhang-75323111b/" },
      { name: "Karina Chung", url: "https://www.linkedin.com/in/karina-chung/" },
      { name: "Skyler Liu", url: "https://www.linkedin.com/in/skylerliu/" },
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Core Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamSections.map((section) => (
              <Card key={section.title} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.members.map((member) => (
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
