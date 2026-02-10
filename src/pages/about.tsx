import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import FadeUp from "@/animation/fade-up";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Cambridge Policy Hackathon"
        description="Learn about the Cambridge Policy Hackathon – where policymakers, researchers, and technologists come together to tackle real-world challenges."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About | Cambridge Policy Hackathon",
          description:
            "Learn about the Cambridge Policy Hackathon and how you can get involved.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Cambridge Policy Hackathon",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Cambridge Policy Hackathon, policy, hackathon, innovation, Cambridge",
          },
        ]}
      />
      <AboutHero />
      {/* <section className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
        <FadeUp duration={0.6} whileInView>
          <h2 className="mb-12 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-8xl">
            Our mission
          </h2>
          <p className="mx-auto max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            We believe that the best solutions come from bringing together
            diverse perspectives. Our hackathon creates a space for
            cross-sector collaboration and rapid prototyping to address
            pressing policy challenges.
          </p>
        </FadeUp>
      </section> */}
    </>
  );
}
