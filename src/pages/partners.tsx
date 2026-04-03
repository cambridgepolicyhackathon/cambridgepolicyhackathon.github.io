import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

import FadeUp from "@/animation/fade-up";
import { PARTNER_PAGE_SECTIONS } from "@/data/partners";
import { siteMetadata } from "@/data/siteMetaData.mjs";

function PartnerCard(props: {
  src: string;
  name: string;
  href?: string;
  /** Single-card row: tight max width so the logo isn’t swimming in empty space. */
  narrow?: boolean;
  /** Few-card sections: less padding so cards feel proportional to the logos. */
  compact?: boolean;
}) {
  const { src, name, href, narrow, compact } = props;
  const logo = (
    <div
      className={`flex w-full items-center justify-center ${compact ? "h-14 sm:h-16" : "h-16 sm:h-20"}`}
    >
      <Image
        src={src}
        alt={href ? "" : name}
        width={160}
        height={80}
        className="max-h-full max-w-[200px] object-contain object-center dark:brightness-0 dark:invert"
      />
    </div>
  );
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-background shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700 ${
        compact ? "p-5 sm:p-6" : "p-8"
      } ${narrow ? "w-full max-w-[14rem]" : "w-full"}`}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} (opens in new tab)`}
          className="block text-inherit no-underline outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {logo}
        </a>
      ) : (
        logo
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <>
      <NextSeo
        title="Partners | Cambridge Policy Hackathon"
        description="Organisers, sponsors, and community partners supporting the Cambridge Policy Hackathon."
        canonical={`${siteMetadata.siteUrl}/partners`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/partners`,
          title: "Partners | Cambridge Policy Hackathon",
          description: "Organisers, sponsors, and community partners supporting the Cambridge Policy Hackathon.",
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
            We are very grateful for our partners who support us in our mission. Interested in becoming a partner? Please contact us at <a href="mailto:cambridgepolicyhackathon@gmail.com" className="text-accent underline">cambridgepolicyhackathon [@] gmail [dot] com</a>.
          </p>
        </FadeUp>
      </section>

      {PARTNER_PAGE_SECTIONS.map((section, sectionIndex) => (
        <section
          key={section.title}
          className="mx-auto max-w-7xl px-6 sm:px-14 md:px-20"
        >
          <div className={sectionIndex === 0 ? "mt-16 md:mt-20" : "mt-20 md:mt-28"}>
            <FadeUp duration={0.5}>
              <h2 className="text-center text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                {section.title}
              </h2>
              <div className="mx-auto mt-4 h-px max-w-xs bg-accent/40" aria-hidden />
            </FadeUp>
            <div
              className={
                section.partners.length === 1
                  ? "mt-6 grid grid-cols-1 justify-items-center gap-4 sm:mt-8"
                  : section.partners.length === 2
                    ? "mt-6 grid grid-cols-1 justify-items-center gap-4 sm:mx-auto sm:mt-8 sm:max-w-lg sm:grid-cols-2 sm:gap-5"
                    : "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {section.partners.map((partner, index) => (
                <FadeUp
                  key={partner.src}
                  duration={0.45}
                  delay={0.06 * index}
                  whileInView
                  className={section.partners.length === 1 ? "flex w-full justify-center" : undefined}
                >
                  <PartnerCard
                    src={partner.src}
                    name={partner.alt}
                    href={partner.href}
                    narrow={section.partners.length === 1}
                    compact={section.partners.length <= 2}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="h-24 md:h-32" aria-hidden />
    </>
  );
}
