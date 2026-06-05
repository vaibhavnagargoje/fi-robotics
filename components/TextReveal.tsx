"use client";

import { motion } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
}

export default function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  staggerDelay = 0.04,
}: TextRevealProps) {
  // Split text into lines (by <br>) then words
  const lines = text.split("\\n");

  return (
    <Tag className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(" ").map((word, wordIndex) => {
            const globalIndex =
              lines.slice(0, lineIndex).reduce((acc, l) => acc + l.split(" ").length, 0) +
              wordIndex;

            return (
              <span
                key={wordIndex}
                className="inline-block overflow-hidden"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.6,
                    delay: delay + globalIndex * staggerDelay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
                {wordIndex < line.split(" ").length - 1 && (
                  <span className="inline-block w-[0.3em]" />
                )}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
