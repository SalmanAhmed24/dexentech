import { IndustryJsonLd } from "@/components/industry/IndustryJsonLd";
import { IndustryTemplate } from "@/components/industry/IndustryTemplate";
import { shortTermRentals as data } from "@/lib/industries/short-term-rentals";
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
