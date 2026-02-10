import { NextSeo } from "next-seo";

import FadeUp from "@/animation/fade-up";
import TeamCard from "@/components/team/team-card";
import { TEAM_MEMBERS } from "@/data/team";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Team() {
  return (
    <>
      <NextSeo
        title="Team | Cambridge Policy Hackathon"
        description="Meet the team behind the Cambridge Policy Hackathon."
        canonical={`${siteMetadata.siteUrl}/team`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/team`,
          title: "Team | Cambridge Policy Hackathon",
          description: "Meet the team behind the Cambridge Policy Hackathon.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-14 md:px-20">
        <FadeUp duration={0.6}>
          <h1 className="text-center text-5xl font-bold text-accent sm:text-6xl md:text-7xl">
            Team
          </h1>
        </FadeUp>
        <FadeUp duration={0.6} delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            The people who make the Cambridge Policy Hackathon happen.
          </p>
        </FadeUp>
      </section>
      <section className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
