import { CardGrid } from "@/components/ui/CardGrid";
import { TECHNOLOGIES, type Technology } from "@/lib/technologies";

const TAG: Record<Technology["category"], string> = {
  priority: "Priority",
  stack: "Stack",
  deploy: "Deploy",
};

export function TechGrid() {
  return (
    <CardGrid
      ariaLabel="Technologies we build on"
      cards={TECHNOLOGIES.map((tech) => ({
        tag: TAG[tech.category],
        starred: tech.category === "priority",
        title: tech.name,
        body: tech.description,
        href: tech.href,
      }))}
    />
  );
}
