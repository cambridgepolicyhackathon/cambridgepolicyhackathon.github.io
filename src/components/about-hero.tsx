import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-14 md:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatePresence>
          <FadeUp key="about-title" duration={0.6}>
            <h1 className="text-5xl font-bold text-accent sm:text-6xl md:text-7xl">
              About the Hackathon
            </h1>
          </FadeUp>
          <FadeUp key="about-desc-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              The Cambridge Policy Hackathon (CPH) is a newly founded hackathon event in Cambridge, UK. During this 2.5 days competition event, students and young professionals form multidisciplinary teams to develop data-informed policies and / or policy tools to help with solving the most pressing societal issues in Cambridge, the UK, or beyond. The challenges are provided by both government and industry stakeholders. At the core, the event champions research and policy development at the interdisciplinary intersection between technology and society. The event has already been succesfully held in Amsterdam and is inspired by the MIT Policy Hackathon, which is a similar competition held annually at the Massachusetts Institute of Technology.
            </p>
          </FadeUp>
          <FadeUp key="about-desc-2" duration={0.6} delay={0.4}>
            <p className="mt-6 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Over a focused weekend, teams work on pressing policy problems,
              prototype solutions, and present to a panel of experts.
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </section>
  );
}
