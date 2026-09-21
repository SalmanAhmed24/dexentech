import { IndustryJsonLd } from "@/components/industry/IndustryJsonLd";
import { IndustryTemplate } from "@/components/industry/IndustryTemplate";
import { industrialPartsDistributors as data } from "@/lib/industries/industrial-parts-distributors";
import { industryMetadata } from "@/lib/industries/page";

export const metadata = industryMetadata(data);

export default function Page() {
  return (
    <>
      <IndustryTemplate data={data} />
      <IndustryJsonLd data={data} />
    </>
  );
}
