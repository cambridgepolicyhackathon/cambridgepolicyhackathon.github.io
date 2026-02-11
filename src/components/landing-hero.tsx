import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";

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
      className="relative flex min-h-screen h-screen w-full -mt-[9rem] items-center overflow-hidden px-6 sm:px-14 md:px-20"
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
        {/* Bottom fade into sections below */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 min-h-[200px] bg-gradient-to-t from-background to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 w-full pt-20 pointer-events-none sm:pt-24">
        <div className="mx-auto max-w-7xl">
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
                Leverage data and policy to make an impact
              </span>
            </FadeUp>
            <FadeUp key="cta" duration={0.6} delay={0.2}>
              <div className="pointer-events-auto mt-6 inline-block">
                <Link
                  href="https://google.com/"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg transition-colors duration-200 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                >
                  Apply now
                </Link>
              </div>
              {/* Partner logos: first at left, last at right, same size each */}
              <div className="pointer-events-none mt-10 flex w-full max-w-7xl flex-wrap items-center justify-between gap-6">
                {[
                  { src: "/UoC.png", alt: "University of Cambridge" },
                  { src: "/CJBS.png", alt: "CJBS" },
                  { src: "/CSaP.png", alt: "CSaP" },
                  { src: "/EA-cam.png", alt: "EA Cambridge" },
                  { src: "/DPIN.png", alt: "DPIN" },
                ].map((logo) => (
                  <div key={logo.src} className="flex h-14 w-28 shrink-0 items-center justify-center sm:h-16 sm:w-32">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={64}
                      className="max-h-full max-w-full object-contain object-center opacity-90 dark:brightness-0 dark:invert"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
