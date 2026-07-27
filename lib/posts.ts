// FILE: lib/posts.ts
// PURPOSE: Shared post data — used by blog index and article pages

export interface Post {
  slug: string;
  tag: string;
  title: string;
  readMin: number;
  date: string;
  author: string;
  body: string;
}

export const posts: Post[] = [
  {
    slug: "whitepaper",
    tag: "Whitepaper",
    title: "WHITEPAPER",
    readMin: 8,
    date: "Jan 2026",
    author: "Y. Sinha & J. Shukla",
    body: `
As model research accelerates, data remains the biggest bottleneck for robot intelligence. We build foundation models for physical autonomy — powered by the largest collection of human demonstration data on Earth across vision, action, and touch modalities.

## 1. Introduction

Robotics hardware has made remarkable progress. China ships production-ready humanoids for under $20k, and US manufacturers are catching up. Since transformers entered the field, robot intelligence has improved. Yet generalized robotics remains elusive.

Data remains the biggest bottleneck for robot intelligence. The parallel should be drawn to autonomous driving rather than LLMs: every successful player — Waymo, Tesla, Zoox — owns the entire pipeline: data collection, model training, and deployment.

## 2. The Case for Human Data

Teleoperation is slow & expensive, and Sim2Real is not solved for complex contact physics. Human data scales the best because humans have an evolutionary understanding of the physical world.

We collect three core modalities: vision, action, and touch (tactile feedback). Adding tactile inference to models increases manipulation success rates from 55.75% to 71%.

## 3. Data Factories

Data factories are facilities where workers wear custom-built gloves with joint tracking and tactile feedback, along with head- and wrist-mounted RGB-D cameras. A 17-step quality-check process ensures timestamp calibration and data quality.

## 4. Hardware-Agnostic Models

We collect data from 21 DOF human hands and retarget it to lower-DOF systems (6- and 7-DOF arms, grippers, and 5-finger dexterous hands). Deployments focus on pick-and-place across warehouses, grocery, data centers, and electronics.

## 5. Path to General-Purpose Robotics

In the short term, we post-train open-source models such as PI and GR00T. In the long term, scaling rich multi-modal human demonstration data creates the foundation for true general-purpose physical intelligence.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
