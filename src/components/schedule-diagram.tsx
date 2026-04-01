"use client";

import { useRef, useState } from "react";

import { motion, AnimatePresence, useInView } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { SCHEDULE_DAYS, type ScheduleDay } from "@/data/schedule";
import { classNames } from "@/utility/classNames";

function DayNode({
  day,
  isSelected,
  onClick,
}: {
  day: ScheduleDay;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "relative z-10 flex flex-col items-center rounded-2xl border-2 px-6 py-4 text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background sm:px-8 sm:py-5",
        isSelected
          ? "border-accent bg-accent text-accent-foreground shadow-lg"
          : "border-zinc-200 bg-background text-foreground hover:border-accent/50 hover:shadow-md dark:border-zinc-700 dark:hover:border-accent/50"
      )}
      aria-pressed={isSelected}
      aria-label={`${day.label} ${day.date} – view schedule`}
    >
      <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
        {day.label}
      </span>
      <span className="mt-1 text-lg font-bold sm:text-xl">{day.date}</span>
    </button>
  );
}

export default function ScheduleDiagram() {
  const [selectedId, setSelectedId] = useState<string>(SCHEDULE_DAYS[0].id);
  const selected = SCHEDULE_DAYS.find((d) => d.id === selectedId) ?? SCHEDULE_DAYS[0];

  // One-time in-view: animation runs only the first time this section enters view (e.g. when opening Home)
  const sectionRef = useRef<HTMLElement>(null);
  const hasBeenInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:px-14 md:px-20"
    >
      <FadeUp duration={0.6}>
        <h2 className="text-center text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
          Schedule
        </h2>
      </FadeUp>
      <FadeUp duration={0.6} delay={0.1}>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base font-medium text-zinc-700 dark:text-zinc-300 sm:text-lg">
          Thursday 14 May - Saturday 16 May
        </p>
      </FadeUp>

      {/* Timeline + content: single one-time trigger so fade-up doesn’t re-run on scroll */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={
          hasBeenInView
            ? { y: 0, opacity: 1 }
            : { y: 80, opacity: 0 }
        }
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mt-12"
      >
        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-zinc-200 dark:bg-zinc-700"
            aria-hidden
          />
          <div className="relative grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {SCHEDULE_DAYS.map((day) => (
              <DayNode
                key={day.id}
                day={day}
                isSelected={selectedId === day.id}
                onClick={() => setSelectedId(day.id)}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-700 dark:bg-zinc-800/50 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-accent sm:text-xl">
              {selected.label} {selected.date}
            </h3>
            <ul className="mt-4 space-y-2 text-base text-zinc-700 dark:text-zinc-300">
              {selected.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
