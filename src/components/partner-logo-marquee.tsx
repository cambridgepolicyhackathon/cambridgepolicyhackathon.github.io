import Image from "next/image";

import type { PartnerLogo } from "@/data/partners";

type PartnerLogoMarqueeProps = {
  logos: PartnerLogo[];
};

function LogoStrip({
  logos,
  keyPrefix,
  /** Second strip: same links but not in tab order (avoids duplicate focus while scrolling). */
  duplicate,
}: PartnerLogoMarqueeProps & { keyPrefix: string; duplicate?: boolean }) {
  return (
    <>
      {logos.map((logo) => {
        const cellClass =
          "flex h-14 w-[7.5rem] shrink-0 items-center justify-center opacity-90 transition-opacity hover:opacity-100 sm:h-16 sm:w-40";
        const image = (
          <Image
            src={logo.src}
            alt=""
            width={128}
            height={64}
            className="max-h-full max-w-full object-contain object-center dark:brightness-0 dark:invert"
            aria-hidden
          />
        );
        if (!logo.href) {
          return (
            <div key={`${keyPrefix}-${logo.src}`} className={cellClass}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="max-h-full max-w-full object-contain object-center dark:brightness-0 dark:invert"
              />
            </div>
          );
        }
        return (
          <a
            key={`${keyPrefix}-${logo.src}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            className={cellClass}
            aria-label={`${logo.alt} (opens in new tab)`}
          >
            {image}
          </a>
        );
      })}
    </>
  );
}

export default function PartnerLogoMarquee({ logos }: PartnerLogoMarqueeProps) {
  return (
    <div className="relative w-full" role="region" aria-label="Partner logos">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16"
        aria-hidden
      />
      <div className="overflow-hidden">
        {/* Reduced motion: static wrapped row, all links in tab order */}
        <div className="hidden flex-wrap justify-center gap-x-8 gap-y-6 motion-reduce:flex">
          <LogoStrip logos={logos} keyPrefix="static" />
        </div>
        {/* Continuous marquee: primary strip is tabbable; duplicate strip is mouse-only for same URLs */}
        <div className="flex w-max max-w-none animate-marquee-ltr motion-reduce:hidden">
          <div className="flex w-max items-center gap-x-10 pr-10 sm:gap-x-14 sm:pr-14">
            <LogoStrip logos={logos} keyPrefix="a" />
          </div>
          <div className="flex w-max items-center gap-x-10 pr-10 sm:gap-x-14 sm:pr-14">
            <LogoStrip logos={logos} keyPrefix="b" duplicate />
          </div>
        </div>
      </div>
    </div>
  );
}
