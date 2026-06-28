// FILE: app/contact/page.tsx
// PURPOSE: Editorial contact page — info column + minimal form

"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Footer from "@/components/Footer";

function useFade(reduced: boolean) {
  return (delay = 0) =>
    reduced
      ? {}
      : ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-5%" },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        } as const);
}

const infoItems = [
  { label: "Email",         value: "hello@intelligencefactory.ai" },
  { label: "Based in",     value: "Zurich · Philadelphia · Remote" },
  { label: "Response time",value: "Within 2 business days" },
];

const inputBase =
  "w-full bg-transparent py-2.5 px-3 text-[14px] text-[#0a0a0a] placeholder-[#c8c5c0] " +
  "focus:outline-none transition-colors duration-200";

const inputStyle = {
  border: "0.5px solid #e0ddd8",
  borderRadius: 0,
};

const inputFocusStyle = {
  border: "0.5px solid #0a0a0a",
};

/* ─── Controlled Input ───────────────────────────────────── */
function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);

  const props = {
    id,
    name: id,
    required,
    placeholder,
    className: inputBase,
    style: focused ? inputFocusStyle : inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[10px] tracking-[0.12em] uppercase text-[#9c9a97]"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </label>
      {rows ? (
        <textarea {...props} rows={rows} style={{ ...props.style, resize: "none" }} />
      ) : (
        <input {...props} type={type} />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const reduced = useReducedMotion() ?? false;
  const fade = useFade(reduced);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-[#f7f6f3] text-[#0a0a0a]">

      {/* ── Page header ── */}
      <section className="px-6 md:px-16 pt-36 pb-16" style={{ borderBottom: "0.5px solid #e0ddd8" }}>
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-5"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Get in touch
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a]"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
          >
            Let&apos;s talk.
          </h1>
        </motion.div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 md:gap-24">

          {/* Left — Info column */}
          <motion.div {...fade(0)} className="flex flex-col gap-0">
            {infoItems.map((item, i) => (
              <div
                key={item.label}
                className="py-6"
                style={{ borderBottom: "0.5px solid #e0ddd8", ...(i === 0 ? { borderTop: "0.5px solid #e0ddd8" } : {}) }}
              >
                <p
                  className="text-[10px] tracking-[0.12em] uppercase text-[#9c9a97] mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.label}
                </p>
                <p className="text-[14px] text-[#0a0a0a]">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div {...fade(0.1)}>
            {sent ? (
              <div className="pt-6">
                <p
                  className="text-[13px] text-[#0a0a0a] leading-relaxed"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Message sent. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Field id="name"    label="Name"             placeholder="Your name"    required />
                <Field id="email"   label="Email"            type="email" placeholder="you@example.com" required />
                <Field id="company" label="Company (optional)" placeholder="Your company" />
                <Field id="message" label="Message"          placeholder="Tell us what you're working on…" required rows={5} />

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit"
                    className="text-[13px] font-medium text-[#0a0a0a] px-6 py-2.5 hover:bg-[#0a0a0a] hover:text-[#f7f6f3] transition-colors duration-200 w-full sm:w-auto"
                    style={{ border: "0.5px solid #0a0a0a", borderRadius: 0 }}
                  >
                    Send message →
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
