"use client";

import Image from "next/image";

import FadeUp from "@/animation/fade-up";
import { CHALLENGE_CASES, type ChallengeCase } from "@/data/challenge-cases";
import { classNames } from "@/utility/classNames";

function LogoCell({ c }: { c: ChallengeCase }) {
  if (c.logoSrc) {
    return (
      <div className="flex h-14 w-full items-center justify-center sm:h-16">
        <Image
          src={c.logoSrc}
          alt={c.partnerName}
          width={160}
          height={80}
          className="max-h-full w-auto max-w-[180px] object-contain object-center dark:brightness-0 dark:invert lg:max-w-[150px]"
        />
      </div>
    );
  }

  return (
    <div className="flex h-14 w-full items-center justify-center sm:h-16">
      <div className="inline-flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-100">
        {c.partnerName}
      </div>
    </div>
  );
}

export default function ChallengeCases() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 sm:px-14 md:px-20">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50/70 px-6 py-12 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/20 sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-10 h-56 w-72 rounded-full bg-accent/5 blur-3xl"
          aria-hidden
        />

        <FadeUp duration={0.6} whileInView>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/70 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur dark:bg-zinc-900/30">
              Form a team • Pick a case • Make impact
            </div>
            <h2 className="mt-5 text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
              Challenge cases
            </h2>
            <div className="mx-auto mt-4 h-px max-w-xs bg-accent/40" aria-hidden />
          </div>
        </FadeUp>
        <FadeUp duration={0.6} delay={0.1} whileInView>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Five policy challenges by major public and private organisations you can choose from and tackle over the weekend.
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {CHALLENGE_CASES.map((c, idx) => (
            <FadeUp key={c.id} duration={0.45} delay={0.06 * idx} whileInView>
              <div
                className={classNames(
                  "group flex h-full min-h-[220px] flex-col rounded-2xl border border-zinc-200 bg-background p-6 text-center shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg dark:border-zinc-700 dark:hover:border-accent/40 sm:p-7 lg:p-5"
                )}
              >
                <LogoCell c={c} />
                <h3 className="mt-4 text-base font-semibold text-accent sm:text-lg">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
                  {c.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

