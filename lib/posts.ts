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
    slug: "why-robotics-breaks-on-diversity",
    tag: "Research",
    title: "Why Robotics Breaks on Diversity — and How We're Fixing It",
    readMin: 6,
    date: "Jun 2026",
    author: "Yash Sinha",
    body: `
## The Core Problem

Most robotics systems built today are brittle in a very specific way: they work until the environment changes. Change the lighting. Swap the object for a visually similar one. Move the table two centimetres. The model fails. Not degrades — fails. And it fails because the training distribution was narrow.

This is the diversity problem. It is not a model architecture problem. It is a data problem.

When we started Intelligence Factory, the first question we asked was not "what model should we train?" It was "where does the training data actually come from?" In most academic and commercial robotics pipelines, the answer is simulation, scripted demonstrations, or a small set of operator-collected episodes in a single lab environment.

## Why Simulation Doesn't Close the Gap

Simulation is seductive. It is cheap, parallelisable, and safe. You can generate millions of synthetic trajectories overnight. But the sim-to-real gap is not a detail to be engineered away — it is a fundamental mismatch in the distribution of contact events, surface textures, lighting variation, and object mass.

Contact-rich manipulation is the hardest category. Grasping a soft vegetable, threading a cable through a conduit, peeling a label off a wet bottle — these tasks involve physical phenomena that simulators still cannot model accurately. A policy trained entirely in simulation will have learned a version of these tasks that does not correspond to how physics actually behaves.

Imitation learning from human demonstration sidesteps this entirely. Humans operate in the real world, with real physics, with real noise. If you capture what a human does at sufficient resolution, you get ground-truth behaviour that no simulator can replicate.

## The Resolution Problem

The second challenge is resolution. A lot of human demonstration data is captured with wrist cameras and joint encoders. This gives you the end-effector pose over time — what the gripper did. But it does not tell you the force profile, the finger contact pattern, or the precise timing of grip transitions.

For simple pick-and-place, this is fine. For contact-rich manipulation, it is insufficient. A policy trained on end-effector poses will generalise poorly to tasks where the how of the grasp matters as much as the where.

This is why our hardware captures at 5-DOF — measuring individual finger joint angles and tri-axial contact forces at each fingertip. The resulting dataset encodes not just what happened, but the physical mechanics of how it happened.

## What Diverse Data Actually Looks Like

Diversity in training data is not just task diversity. It is environmental diversity, operator diversity, and object diversity. The same manipulation task should be collected:

- Across multiple lighting conditions (overcast, direct, artificial, mixed)
- Across multiple surface materials (matte, gloss, transparent, textured)
- Across multiple operator styles (fast, careful, left-handed, right-handed)
- Across multiple object states (full, empty, wet, dry, deformed)

Our task selection matrix systematically identifies which combinations are underrepresented in the existing dataset and prioritises collection runs to fill those gaps. This is not intuitive — humans tend to collect what is easy, not what is missing. The algorithm forces the data factory to target the hard cases.

## Where We Are Now

We have collected over 500,000 hours of kinetic demonstration data across three hub facilities. The data spans 200+ manipulation task categories, collected by 500+ operators across multiple continents. Retargeting pipelines allow us to map 5-DOF glove data to standard 2-finger gripper action spaces, making the dataset usable for the majority of commercial robot hardware.

The diversity problem is solvable. It just requires a different approach to data collection — one that treats data infrastructure as a first-class engineering challenge, not an afterthought.
    `.trim(),
  },
  {
    slug: "the-physics-of-touch",
    tag: "Hardware",
    title: "The Physics of Touch: How Our 5-DOF Glove Captures Contact Forces",
    readMin: 4,
    date: "May 2026",
    author: "Jalaj Shukla",
    body: `
## Why Contact Forces Matter

Every manipulation task has a moment where the gripper meets the object. That moment — the onset of contact — is where most policies fail. The visual stream looks fine. The end-effector trajectory looks correct. But the grasp slips, the object deforms unexpectedly, or the contact breaks at the wrong time.

The reason is simple: standard teleoperation hardware does not capture what happens at the contact surface. It captures pose. Pose alone does not encode the grip force, the contact area, or the distribution of normal and shear forces across the fingertip.

## Glove Architecture

Our glove uses a tri-axial force sensor at each of the five fingertip positions, combined with an IMU-fused flex sensor array at each joint. The result is a continuous stream of:

- 15 joint angle measurements (3 per finger)
- 15 force measurements (3-axis at each fingertip)
- Wrist pose at 200 Hz via embedded IMU

The sensor fusion runs onboard at 1 kHz, with downsampled streams exported at 200 Hz for synchronisation with the camera system.

## Engineering Challenges

The hardest part of the design was not the sensing — it was packaging. A glove that operators wear for 4-hour shifts has to be comfortable, washable, and durable. Early prototypes were worn out within two weeks. The current design uses a hybrid silicone-textile construction that survives 200+ wash cycles without sensor drift beyond our calibration threshold.

Calibration is done per-operator, per-shift, using a standardised set of reference grips. The calibration takes 90 seconds and corrects for differences in hand geometry, skin compliance, and sensor placement variance.

## What the Data Enables

The force data enables a category of downstream training that pose-only datasets cannot support: learning the feel of a correct grasp. A model trained on force-annotated data learns not just the trajectory, but the control policy that maintains a stable grasp throughout the manipulation — adjusting grip force in response to object motion, surface friction, and external perturbation.

This is the difference between a robot that picks up a cup and a robot that picks up a cup reliably, at scale, across the full variance of real-world conditions.
    `.trim(),
  },
  {
    slug: "scaling-teleoperation",
    tag: "Operations",
    title: "Scaling Teleoperation: Lessons from 500,000 Hours",
    readMin: 8,
    date: "Apr 2026",
    author: "Tariq Nasser",
    body: `
## The Operational Challenge

Collecting 500,000 hours of demonstration data is not primarily a technology problem. It is an operations problem. You need to build a system — hardware, software, process, and people — that can produce high-quality, consistent teleoperation data at scale, across multiple sites, continuously.

We have been building that system for two years. Here is what we have learned.

## Operator Onboarding

The first surprise was how much onboarding matters. Naive operators produce data that looks correct but encodes bad habits: hesitation patterns, over-grasping, asymmetric grip force, and inconsistent reset behaviour. A model trained on this data learns those habits.

Our onboarding protocol runs five days before an operator is cleared for production data collection. The protocol uses an automated quality scoring system that evaluates smoothness, force profiles, task completion time, and reset behaviour against a reference distribution. Operators who consistently score in the bottom quartile are assigned remedial tasks. Operators who score in the top quartile are assigned to harder, higher-value tasks.

## Task Assignment

Task assignment is non-trivial at scale. We run a continuous task selection matrix that ingests the current dataset statistics and outputs a daily prioritisation list for each hub. The matrix optimises for:

- Filling underrepresented environment × task combinations
- Matching operator skill level to task complexity
- Balancing operator fatigue across shift structure

An operator who has been running high-dexterity tasks for two hours gets assigned lower-complexity tasks for the next hour, regardless of their skill level.

## Quality Control

Every session is automatically scored within 30 minutes of completion. Scores below threshold trigger a human review before the data is accepted into the training corpus. Approximately 12% of all sessions require review; of those, roughly 40% are rejected or flagged for partial reprocessing.

The automated scoring pipeline evaluates: trajectory smoothness, force profile plausibility, object state before and after, and comparison against reference trajectories from the same task category.

## Infrastructure

The data pipeline runs on a distributed system across our three hub facilities. Each hub generates approximately 2 TB of raw sensor and video data per day. The ingestion pipeline compresses, aligns, and validates this data in near-real-time, with the processed dataset available for training runs within 4 hours of collection.

Alignment is the most expensive step — synchronising the 200 Hz sensor stream, the 60 fps stereo video, and the 30 fps head-mounted camera into a single coherent temporal stream requires careful handling of clock drift and transmission latency.

## What 500,000 Hours Buys You

The number that matters is not the total hours — it is the coverage. Our dataset now covers 200+ task categories × 15+ environment types × 8+ lighting conditions × 3+ operator styles. That coverage is what enables a model to generalise. A narrow dataset of 500,000 hours from a single lab environment would be almost useless for training a general-purpose manipulation policy.

The next milestone is 1,000,000 hours, targeting 500+ task categories with expanded object diversity. We expect to reach that in Q2 2027.
    `.trim(),
  },
  {
    slug: "multi-modal-data-fusion",
    tag: "Research",
    title: "Multi-Modal Data Fusion for Physical AI Models",
    readMin: 5,
    date: "Mar 2026",
    author: "Priya Kapoor",
    body: `
## Why Multi-Modal

A manipulation policy trained on visual input alone is missing information that humans use constantly: proprioception, haptic feedback, and the felt sense of object state. Conversely, a policy trained on proprioceptive data alone cannot localise objects, read scene context, or adapt to visual variation.

The case for multi-modal training is not theoretical. Empirically, models trained on fused visual + proprioceptive + force data consistently outperform unimodal baselines on contact-rich tasks, particularly in generalisation to unseen objects and environments.

## The Fusion Challenge

The challenge is not collecting multiple modalities — it is aligning them. Our sensor suite produces streams at different sampling rates (200 Hz for force sensors, 60 fps for stereo cameras, 30 fps for head-mounted cameras) with different latencies and different noise characteristics. Fusing these into a coherent training signal requires careful temporal alignment and modality-specific preprocessing.

We use a learned temporal alignment model that maps all streams to a common 30 Hz backbone. The alignment model is trained on a held-out set of reference sessions where ground-truth synchronisation is known. It achieves sub-10ms alignment error on the validation set, which is below the threshold that matters for manipulation policy learning.

## Representation Design

The fused representation we pass to the policy network is a tuple of:

- Stereo visual patch embeddings (from a frozen vision encoder)
- Egocentric video patch embeddings (from the head-mounted camera)
- Joint angle time-series (15 dimensions × 30 Hz, 2-second window)
- Contact force time-series (15 dimensions × 30 Hz, 2-second window)
- Wrist pose (6-DOF, 30 Hz)

This gives the policy a rich, temporally grounded view of both the environment and the operator's physical interaction with it.

## Retargeting

The practical challenge with 5-DOF glove data is that most robot hardware does not have 5-DOF hands. Standard grippers have 1 or 2 DOF. Retargeting — mapping the high-DOF human demonstration to a lower-DOF robot action space — is a core part of our pipeline.

We train a task-specific retargeting model that maps glove data to gripper commands while preserving the task-critical features of the original demonstration. For most pick-and-place tasks, this preserves >90% of the relevant contact events. For highly dexterous tasks (threading, folding), the retargeting loss is higher and we apply additional data augmentation to compensate.

## Results

Policies trained on our fused dataset show a 35% improvement in success rate on unseen objects compared to policies trained on pose-only demonstrations, and a 60% improvement on tasks with significant contact dynamics (opening containers, inserting connectors, manipulating deformable objects).

The improvement is largest in the tail of the distribution — the cases that matter most for real-world deployment.
    `.trim(),
  },
  {
    slug: "building-distributed-operator-workforce",
    tag: "Operations",
    title: "Building a Distributed Operator Workforce Across Time Zones",
    readMin: 3,
    date: "Feb 2026",
    author: "Rohan Desai",
    body: `
## The Coverage Problem

Training data collection should not stop at 5pm. Robot deployments operate 24/7. If the dataset is collected during business hours in a single time zone, the coverage of operator styles, fatigue states, and environmental conditions will be systematically biased.

We designed our operator network for 24/7 coverage from the start. The three hub model — Zurich, Philadelphia, and a rotating third hub currently based in Bangalore — gives us continuous coverage across three major time zones, with overlapping shift windows to ensure handoff quality.

## Operator Recruitment and Structure

We recruit operators through a structured assessment that evaluates fine motor control, task learning speed, and sustained attention. The assessment takes 2 hours and produces a skill profile that determines initial task assignment.

Operators are structured into three tiers. Tier 1 handles standard pick-and-place and sorting tasks. Tier 2 handles multi-step assembly and contact-rich manipulation. Tier 3 handles the highest-complexity tasks — dexterous manipulation, tool use, and novel task categories being introduced into the dataset for the first time.

Progression between tiers is performance-gated. On average, operators reach Tier 2 within 6 weeks of joining, and Tier 3 within 6 months.

## Cross-Hub Consistency

Maintaining consistency across hubs is an ongoing challenge. We run weekly calibration sessions where operators at each hub complete the same reference task set. The output distributions are compared to detect hub-level drift in data quality or operator technique.

When drift is detected, the affected hub runs a targeted retraining session using annotated reference videos. This has reduced inter-hub consistency variance by 40% over the past year.

## What's Next

The fourth hub — planned for Q3 2026 — will give us coverage that eliminates the remaining gaps in our time zone distribution. At full capacity, the four-hub network will support 700+ operators and a sustained output of 1,500+ hours of processed data per day.
    `.trim(),
  },
  {
    slug: "edge-case-targeting",
    tag: "Research",
    title: "Edge Case Targeting: How We Use Algorithms to Find Sparse Data Zones",
    readMin: 7,
    date: "Jan 2026",
    author: "Anya Sharma",
    body: `
## The Problem with Convenience Sampling

Left to their own devices, data collection programmes collect what is convenient. Tasks that are easy to set up. Objects that are nearby. Lighting conditions that happen to be present. The result is a dataset that is large but uneven — dense coverage in easy regions of the distribution, sparse coverage in the hard regions that matter most for generalisation.

This is not a small problem. A policy that has seen 10,000 examples of picking a red apple under bright lighting and 3 examples of picking a bruised apple under dim overhead light will generalise well in the former condition and fail in the latter — even though the latter is far more representative of real-world deployment.

The solution is systematic edge case targeting: using algorithms to identify which regions of the distribution are underrepresented, and directing collection effort toward those regions.

## Task Selection Matrix

Our task selection matrix is a multi-dimensional coverage optimiser. It maintains a representation of the current dataset as a distribution over:

- Task category (200+ categories, structured as a hierarchy)
- Environment type (kitchen, warehouse, office, outdoor, etc.)
- Lighting condition (quantised into 8 levels)
- Object material class (rigid, soft, transparent, reflective, deformable)
- Object size class (small, medium, large)
- Operator tier

For each possible collection configuration — a combination of the above dimensions — the matrix estimates the current coverage density and the expected value of adding more data in that configuration. The expected value function trades off coverage improvement against task importance (tasks relevant to near-term commercial deployments are weighted higher).

## The Hard Cases

Some regions of the distribution are sparse not because they are inconvenient but because they are genuinely hard. Transparent object manipulation under harsh specular lighting. Deformable object grasping with a wet surface. Multi-step assembly with parts that are visually similar.

For these cases, the task selection matrix alone is not sufficient. We augment it with a difficulty-aware collection protocol: a dedicated team of Tier 3 operators who work exclusively on the hardest task categories, with additional setup time and smaller session targets to maintain data quality.

## Measuring Coverage

We evaluate dataset coverage using a held-out set of "canary tasks" — tasks that we know are hard but do not collect in training. Performance on these canary tasks is the most honest measure of how well our coverage targeting is working.

Over the past 12 months, canary task performance has improved by 55% as a result of our edge case targeting programme. The largest gains have been in the transparent object and deformable manipulation categories — exactly the regions we have been prioritising.

## The Compounding Effect

The most important property of edge case targeting is that it compounds. Each iteration of the matrix produces a better dataset. A better dataset produces a better policy. A better policy can be used to automate parts of the quality scoring pipeline, which reduces the cost of running the next iteration of the matrix. The loop accelerates over time.

We are now on the fourth major iteration of the task selection matrix, and the efficiency gains from each iteration have been significant — we are collecting data that is 3x more impactful per hour than we were 18 months ago.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
