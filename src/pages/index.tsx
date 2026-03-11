import Head from "next/head";

import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import LandingHero from "@/components/landing-hero";
import ScheduleDiagram from "@/components/schedule-diagram";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Cambridge Policy Hackathon"
        description="Cambridge Policy Hackathon – where policymakers, researchers, and technologists come together to make impact now."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Cambridge Policy Hackathon",
          description:
            "Cambridge Policy Hackathon – Make impact now. Join us to tackle real-world policy challenges.",
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
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      {/* Continuation of hero fade so it eases into the next section (no hard cut) */}
      <div
        className="pointer-events-none h-12 w-full sm:h-16"
        style={{
          marginTop: "-1px",
          backgroundImage: `linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0.6) 50%, transparent 100%)`,
        }}
        aria-hidden
      />
      <AboutHero />
      <ScheduleDiagram />
    </>
  );
}
