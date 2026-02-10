import Image from "next/image";

import { motion } from "framer-motion";

import { LinkedinIcon } from "@/components/icons";
import type { TeamMember } from "@/data/team";

export interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.article
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-background shadow-lg transition-shadow hover:shadow-xl dark:border-zinc-700"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent">
          {member.affiliation}
        </p>
        <p className="mt-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {member.bio}
        </p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          aria-label={`${member.name} on LinkedIn`}
        >
          <LinkedinIcon className="h-5 w-5" />
          LinkedIn
        </a>
      </div>
    </motion.article>
  );
}
