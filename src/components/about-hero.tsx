import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-4 sm:px-14 md:px-20 md:pt-6">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatePresence>
          <FadeUp key="about-title" duration={0.6}>
            <h2 className="text-5xl font-bold text-accent sm:text-6xl md:text-7xl">
              About
            </h2>
          </FadeUp>
          <FadeUp key="about-desc-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              The Cambridge Policy Hackathon (CPH) is a newly founded hackathon event running from 14 to 16 May in Cambridge, UK. During this 2.5 days competition event, students, researchers, and young professionals form multidisciplinary teams to develop evidence-based policies and/or tools to tackle the most pressing societal issues in Cambridge, the UK, or beyond. The challenges are provided by both government and industry stakeholders. At the core, the event champions research and policy development at the interdisciplinary intersection between technology and society. The event has already been succesfully held in{" "}
              <a
                href="https://amsterdam.dpi.network"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-4"
              >
                Amsterdam
              </a>{" "}
              and is inspired by the MIT Policy Hackathon.
            </p>
          </FadeUp>
          <FadeUp key="about-desc-2" duration={0.6} delay={0.4}>
            <p className="mt-6 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Over a focused weekend, teams work on one of the five policy themes,
              prototype solutions, and present to a panel of experts.
            </p>
          </FadeUp>
          <FadeUp key="about-desc-2" duration={0.6} delay={0.4}>
            <p className="mt-6 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Registrations close 2 May, 23:59 BST. Apply soon!
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </section>
  );
}
