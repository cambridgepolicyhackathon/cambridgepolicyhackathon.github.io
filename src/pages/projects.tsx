import { NextSeo } from "next-seo";

import FadeUp from "@/animation/fade-up";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects | Cambridge Policy Hackathon"
        description="Cambridge Policy Hackathon – past projects and outcomes."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Projects | Cambridge Policy Hackathon",
          description: "Cambridge Policy Hackathon – past projects and outcomes.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-14 md:px-20">
        <FadeUp duration={0.6}>
          <h1 className="text-center text-5xl font-bold text-accent sm:text-6xl md:text-7xl">
            Projects
          </h1>
        </FadeUp>
        <FadeUp duration={0.6} delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Past hackathon projects and outcomes will be shared here. Check back
            after the event.
          </p>
        </FadeUp>
      </section>
    </>
  );
}
