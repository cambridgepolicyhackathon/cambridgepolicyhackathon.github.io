import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { NextSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { FAQ_ITEMS } from "@/data/faq";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <NextSeo
        title="FAQ | Cambridge Policy Hackathon"
        description="Frequently asked questions about the Cambridge Policy Hackathon."
        canonical={`${siteMetadata.siteUrl}/faq`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/faq`,
          title: "FAQ | Cambridge Policy Hackathon",
          description: "Frequently asked questions about the hackathon.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-14 md:px-20">
        <FadeUp duration={0.6}>
          <h1 className="text-center text-5xl font-bold text-accent sm:text-6xl md:text-7xl">
            FAQ
          </h1>
        </FadeUp>
        <FadeUp duration={0.6} delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Common questions about the event. Can&apos;t find your answer?{" "}
            <a href="mailto:cambridgepolicyhackathon@gmail.com" className="font-semibold text-accent underline underline-offset-4">
              Get in touch
            </a>
            .
          </p>
        </FadeUp>
      </section>
      <section className="mx-auto my-40 max-w-3xl px-6 sm:px-14 md:my-60 md:px-20">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FadeUp key={index} duration={0.4} delay={0.05 * index} whileInView>
              <div
                className="overflow-hidden rounded-xl border border-zinc-200 bg-background dark:border-zinc-700"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-foreground transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-accent"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-zinc-200 dark:border-zinc-700"
                    >
                      <p className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
