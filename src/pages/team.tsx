import { NextSeo } from "next-seo";

import FadeUp from "@/animation/fade-up";
import TeamCard from "@/components/team/team-card";
import { TEAM_MEMBERS, type TeamRole } from "@/data/team";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const ROLES: TeamRole[] = ["Co-organizer", "Challenge Director", "Advisor"];

export default function Team() {
  const membersByRole = ROLES.map((role) => ({
    role,
    members: TEAM_MEMBERS.filter((m) => m.role === role),
  }));

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
          <p className="mx-auto mt-6 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            The people who make the Cambridge Policy Hackathon happen.
          </p>
        </FadeUp>
      </section>
      <section className="mx-auto mt-12 max-w-7xl px-6 pb-20 sm:px-14 md:mt-16 md:px-20">
        {membersByRole.map(({ role, members }, index) => (
          <FadeUp key={role} duration={0.6}>
            <div
              className={
                index > 0 ? "pt-24 sm:pt-28" : undefined
              }
            >
              <h2 className="mb-8 pt-10 text-center text-2xl font-semibold text-accent sm:text-3xl first:pt-0">
                {role}s
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, i) => (
                  <TeamCard key={member.name} member={member} index={i} />
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </section>
    </>
  );
}
