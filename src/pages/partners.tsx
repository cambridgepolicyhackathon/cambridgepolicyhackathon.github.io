import { NextSeo } from "next-seo";

import FadeUp from "@/animation/fade-up";
import { PARTNERS } from "@/data/partners";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Partners() {
  return (
    <>
      <NextSeo
        title="Partners | Cambridge Policy Hackathon"
        description="Our partners who support the Cambridge Policy Hackathon and policy innovation."
        canonical={`${siteMetadata.siteUrl}/partners`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/partners`,
          title: "Partners | Cambridge Policy Hackathon",
          description: "Our partners supporting the Cambridge Policy Hackathon.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-14 md:px-20">
        <FadeUp duration={0.6}>
          <h1 className="text-center text-5xl font-bold text-accent sm:text-6xl md:text-7xl">
            Partners
          </h1>
        </FadeUp>
        <FadeUp duration={0.6} delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            We are grateful to our partners for their support in making the
            hackathon possible.
          </p>
        </FadeUp>
      </section>
      <section className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <FadeUp key={partner.name} duration={0.5} delay={0.1 * index} whileInView>
              <div className="rounded-2xl border border-zinc-200 bg-background p-8 shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700">
                <h3 className="text-xl font-bold text-accent">{partner.name}</h3>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {partner.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
