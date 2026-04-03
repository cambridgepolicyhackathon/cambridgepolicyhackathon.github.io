import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import PartnerLogoMarquee from "@/components/partner-logo-marquee";
import { PARTNER_LOGOS } from "@/data/partners";

export default function LandingHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mobile browsers often ignore autoplay; calling play() on mount fixes it when muted + playsInline
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <section
      className="relative flex min-h-screen h-screen w-full -mt-[9rem] flex-col overflow-hidden px-6 sm:px-14 md:px-20"
      aria-label="Hero"
    >
      {/* Background video at 20% opacity */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-20"
          aria-hidden
        >
          <source src="/cambridge-vid.mp4" type="video/mp4" />
        </video>
        {/* Bottom fade: tall, soft gradient so it continues down and eases out (no hard cut) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75vh] min-h-[420px] w-full"
          style={{
            backgroundImage: `linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.97) 18%, hsl(var(--background) / 0.85) 38%, hsl(var(--background) / 0.5) 60%, transparent 100%)`,
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-20 pointer-events-none sm:pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center pb-4 sm:pb-6">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <Image
                src="/CPH-mid.png"
                alt="Cambridge Policy Hackathon"
                width={480}
                height={160}
                className="h-auto w-full max-w-xl py-2 sm:max-w-2xl md:max-w-xl -ml-4"
                priority
              />
              <span className="mt-2 block text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Turn evidence into impact.
              </span>
            </FadeUp>
            <FadeUp key="cta" duration={0.6} delay={0.2}>
              <div className="pointer-events-auto mt-6 inline-block">
                <Link
                  href="https://forms.gle/6oxXgxNfRUd4PkCt7"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg transition-colors duration-200 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                >
                  Apply now
                </Link>
              </div>
            </FadeUp>
          </AnimatePresence>
          {/* Scrolling partners — part of centered hero block so it sits higher than bottom-pinned */}
          <div className="pointer-events-auto relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2 sm:mt-14">
            <PartnerLogoMarquee logos={PARTNER_LOGOS} />
          </div>
        </div>
      </div>
    </section>
  );
}
