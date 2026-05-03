"use client";

import Image from "next/image";

import FadeUp from "@/animation/fade-up";

const FLYER_SRC = "/CPH_Flyer_03052026.png";
/** Intrinsic dimensions of `public/CPH_Flyer_03052026.png` (preserves aspect ratio for next/image). */
const FLYER_WIDTH = 2579;
const FLYER_HEIGHT = 3648;

export default function EventFlyer() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 sm:px-14 md:px-20">
      <FadeUp duration={0.6} whileInView>
        <h2 className="text-center text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
          Flyer
        </h2>
      </FadeUp>
      <FadeUp duration={0.6} delay={0.1} whileInView>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
          Share the word! :)
        </p>
      </FadeUp>

      <FadeUp duration={0.55} delay={0.15} whileInView>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3 shadow-md dark:border-zinc-700 dark:bg-zinc-800/50 sm:p-4 md:p-5">
            <a
              href={FLYER_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="group block outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={FLYER_SRC}
                alt="Cambridge Policy Hackathon event flyer — dates, venue summary, and how to take part"
                width={FLYER_WIDTH}
                height={FLYER_HEIGHT}
                sizes="(max-width: 640px) calc(100vw - 3rem), 42rem"
                className="h-auto w-full rounded-xl border border-zinc-200/80 bg-background shadow-sm transition duration-200 group-hover:border-accent/30 group-hover:shadow-lg dark:border-zinc-600/80 dark:group-hover:border-accent/40"
              />
              <span className="mt-3 block text-center text-sm font-semibold text-accent underline-offset-4 group-hover:underline">
                Open full-size flyer
              </span>
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
