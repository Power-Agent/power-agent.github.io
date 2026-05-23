import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

const SectionHeader = ({ eyebrow, title, subtitle, className = "" }: SectionHeaderProps) => (
  <div className={`text-center ${className}`}>
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
