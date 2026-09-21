import { StackDiagram } from "@/components/services/StackDiagram";
import { SplitHeading } from "@/components/services/sections";

export function StackSection() {
  return (
    <section
      aria-labelledby="stack"
      className="relative isolate overflow-hidden border-y border-line-subtle py-16 md:py-24"
    >
      <div className="shell">
        <SplitHeading
          id="stack"
          eyebrow="Platforms used"
          title={
            <>
              The stack that
              <br />
              runs the work
            </>
          }
          note="We select tools based on durability and operator ownership — not vendor lock-in."
        />
        <div className="mt-12 md:mt-16">
          <StackDiagram />
        </div>
      </div>
    </section>
  );
}
