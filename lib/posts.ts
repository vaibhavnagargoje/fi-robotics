// FILE: lib/posts.ts
// PURPOSE: Shared post data â€” used by blog index and article pages

export interface Reference {
  id: number;
  text: string;
  url?: string;
}

export interface Post {
  slug: string;
  tag: string;
  title: string;
  readMin: number;
  date: string;
  author: string;
  body: string;
  references?: Reference[];
}

/** Parse a reference line like: `1. M. Kalil. "Title..." [Available online](https://...)` */
function parseReferenceLine(line: string): Reference | null {
  const m = line.match(/^(\d+)\.\s+(.*)/);
  if (!m) return null;
  const id = parseInt(m[1], 10);
  let text = m[2];
  let url: string | undefined;

  // Extract markdown link if present
  const linkMatch = text.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (linkMatch) {
    url = linkMatch[2];
    // Clean up the text â€” keep the link label inline
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/, "$1");
  }

  return { id, text: text.trim(), url };
}

/** Split raw body into content (without references section) + parsed references array */
function parsePost(rawBody: string): { body: string; references: Reference[] } {
  const refHeadingIndex = rawBody.indexOf("## References");
  if (refHeadingIndex === -1) {
    return { body: rawBody, references: [] };
  }

  const body = rawBody.slice(0, refHeadingIndex).trim();
  const refSection = rawBody.slice(refHeadingIndex);
  const lines = refSection.split("\n").slice(1); // skip the "## References" heading

  const references: Reference[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const ref = parseReferenceLine(trimmed);
    if (ref) references.push(ref);
  }

  return { body, references };
}

const rawPosts: Omit<Post, "references">[] = [
  {
    slug: "whitepaper",
    tag: "Whitepaper",
    title: "WHITEPAPER: Intelligence Factory",
    readMin: 12,
    date: "Jan 2026",
    author: "Y. Sinha (ETH Zurich) & J. Shukla (UPenn)",
    body: `
Robotics hardware has made remarkable progress. China ships production-ready humanoids for under $20k [1], and US manufacturers are catching up. Since transformers entered the field, robot intelligence has improved.

Yet generalized robotics remains elusive. Models demonstrate impressive capabilities in controlled settings but struggle with the reliability required for deployment. Long-horizon tasks requiring sophisticated environmental interaction â€” the kind humans perform routinely â€” remain a significant challenge.

As model research accelerates, data remains the biggest bottleneck for robot intelligence. Several efforts are underway to collect different types of data: teleoperation, egocentric video, and others. Identifying the type of data needed to train robot models and how to scale it is a challenge.

Solving the data problem still leaves a second question: what you do with the data. Most people believe robotics and LLMs are similarly aligned, and that the data and model layers should remain separate. But they miss some important points. Robotics also has a deployment layer. And its errors carry physical implications, unlike hallucinations â€” a robotics model cannot work at a 60% success rate.

The parallel should be drawn to autonomous driving rather than LLMs, as that is the only precedent of a robotics problem being solved, even in a limited action space. Every successful player â€” Waymo, Tesla, Zoox â€” owns the entire pipeline: data collection, model training, and deployment.

## 2. The Case for Human Data

Before the case for human data is made, it is necessary to analyze the alternatives.

### 2.1. Teleoperation is slow & expensive

Teleoperation has been the primary method for collecting robotics data. However, it has several limitations on scaling. It is expensive, requires skilled operators, and you must first produce the robot before collecting data. Frequency lag in teleoperation results in lower success rates and abrupt trajectories dissimilar to human motion [2].

There is also the problem of cross-embodiment [3]. When data is collected from one specific embodiment, the model trained on this data only works on that robot. This prevents scaling towards general-purpose robots.

### 2.2. Sim2Real is not solved

Simulation represents a scalable approach to data generation and model training. However, fundamental limitations persist. Contact-body dynamics and rigid-body dynamics remain difficult to model accurately [4]. This limitation compounds as tasks increase in complexity and contact-richness.

In areas with less complex contact physics such as locomotion, simulation is a prevailing tool. In manipulation, however, simulation policies have been shown to perform much worse, as contact physics knowledge is critical [5].

### 2.3. Human data scales the best

Humans have an evolutionary understanding of the physical world. With data collected from humans, robot models build an implicit understanding of the world, rather than being forced into an explicit understanding.

Even with this established, the open question is still: what type of modalities to collect? Most players in the space are focused on collecting egocentric videos. When humans in real life perform any manipulation task, they use their vision to analyze the scene, proprioception or action to approach the object they want to manipulate, and sense of touch to perform this manipulation accurately.

These three modalities â€” vision, action, and touch â€” are the most comprehensive superset of data that can be collected from humans to train robot models.

Tactile feedback specifically is extremely underused in the industry and necessary for general-purpose manipulation models. Adding tactile inference to models has been shown to increase success rates by roughly 16 percentage points, from 55.75% to 71% [6].

## 3. How to Scale This Data? Data Factories

Data factories are facilities where we hire humans just to collect data. They wear our custom-built gloves and head- and wrist-mounted RGB-D cameras, and perform a wide variety of tasks.

Why do we hire people to collect data? Firstly, most human data collection today is passive: captured incidentally while workers perform their actual jobs, such as factory assembly tasks. Their primary goal is to finish the task they are paid for, not to collect data. This hinders them from wearing gloves, as it actively interferes with their work. So collecting egocentric data is still feasible, but action and tactile data are not.

Secondly, collecting data from these gloves is not straightforward. The workers need to be aware of sensor position within the gloves and ensure the data is well recorded while following all calibration steps. Internalizing this helps ensure the process is followed correctly, so data quality stays high as collection scales.

Thirdly, when targeting general-purpose robotics, data for many tasks, and often ad-hoc data, needs to be collected to patch edge cases. This becomes far easier when the infrastructure is internalized, as one worker can switch tasks rather than finding different workers for each task.

As we scale data, we are one of the few companies with a large corpus of 5-finger data. End-effector hardware in robotics is converging toward 5-finger dexterous hands [7]. This is because the world was built for human hands, and achieving general-purpose robotics requires a 5-finger system. To test this, one experiment is to perform tasks using only the thumb and index finger. Tasks may still be possible, but accuracy and throughput are much lower.

### 3.1. Data Collection Hardware

Our data collection hardware uses gloves that collect joint tracking and tactile feedback. Joint tracking uses custom-built IMU PCBs, and tactile feedback uses force sensors that measure normal and shear forces. We are one of the few companies that collect tactile data at scale.

RGB-D cameras are mounted on the head, wrist, and externally to collect video from all angles. Multiple cameras help record accurate positions for object tracking.

Sensor data is processed by an edge device on the wrist, which combines the modalities to produce calibrated multimodal data.

### 3.1.1 Ensuring Data Quality

To ensure data quality, we have built a 17-step quality-check process. This includes pre-QC, post-QC, and runtime QC. This streamlines filtering effort and ensures we output the highest-quality data. The primary steps are timestamp calibration of sensor outputs and ensuring hardware and software work as expected before and after data collection.

## 4. Using Data to Build the Model

We use our data to train robot models that are deployed with customers. We believe this is the most sustainable method to create long-term value. With many players entering this space, supply is outweighing demand, and most data players are selling egocentric data.

We collect rich multi-modal human demonstration data, which is arguably one of the best training datasets in robotics. Selling this means giving away our moat. Using it to train models deployed with customers exponentially increases the value of the data we collect.

### 4.1. Our Models are Hardware-Agnostic

We collect data from human hands, which have 21 DOF. This can be retargeted to lower-DOF systems such as grippers and 3-finger hands. The mathematical principle is that retargeting from 21 DOF to 6 DOF is ill-posed, with multiple valid solutions. On a practical level, our approach is to use task intent to identify the relevant DOF and map those to the gripper or 3-finger hand, since a human only uses the DOF an action needs [8] [9]. With this, our models can be deployed on multiple platforms. We are using 6- and 7-DOF arms and a bimanual platform for initial deployments with gripper end effectors. As deployments increase in complexity, we will expand towards 5-finger dexterous hand end effectors.

### 4.2. Use Cases

We have signed pilots to deploy robots with our models in warehouses, grocery, data centers, and electronics. We strategically chose these deployments because they all focus on one task: pick-and-place. This is a commercially valuable task, but narrow enough given the resources of an early-stage company. Automating pick-and-place successfully across a variety of SKUs is already a multi-billion-dollar market. The warehouse and grocery deployment is pick-and-place of cosmetic and grocery SKUs, and the data center deployment is pick-and-place of various cables and connectors.

### 4.3. Model Selection

In the shorter term, to select the best model for each use case, we have built a model-selection infrastructure. This is an evaluation mechanism that uses simulation and minimal training to evaluate relative model performance. In robotics today, no single architecture is clearly best. In use cases with low task diversity, imitation learning policies may be better suited than end-to-end techniques such as VLAs, whereas VLAs perform better with higher task diversity.

### 4.4. Data and Deployment Flywheel

The deployment flywheel is accelerated by owning the data collection infrastructure. Currently, deployments use pre-trained models, with the intention of improving performance through data collected via teleop while robots run live. When an edge case arises, a human-in-the-loop fixes the robot's error via teleoperation. While this works in principle, it undercuts the commercial value proposition of robots. Robots are being used to replace expensive labor in the first place, so paying a more skilled worker to teleoperate them is even more expensive.

Owning the data-collection infrastructure lets us patch edge cases without necessarily keeping a human in the loop. When the robot is deployed for a use case, edge cases are identified and recreated in our data factories, where data to address them is collected. This data is then used to retrain existing models, patching the use case. This significantly accelerates the deployment flywheel. It is analogous to autonomous driving: owning the data-collection infrastructure helps AV companies patch edge cases observed on the road and constantly improve vehicle performance.

## 5. Path to General-Purpose Robotics

The model pipeline consists of four stages: data collection, pre-training, post-training, and deployment.

### 5.1. Short Term

In the short term, we use the data we collect to post-train open-source models such as PI and GR00T and deploy them on our use cases. This is due to limited compute resources as an early-stage startup. The only way to reliably build models for commercial deployment is to post-train, since current pre-training uses only RGB and text, which is not sufficient to reach the required success rates. We use our action and tactile data to increase the model's physical knowledge for specific tasks, then deploy. A similar methodology was adopted in NVIDIA EgoScale, where a model pre-trained on over 20,000 hours of egocentric video and mid-trained on roughly 50 hours of ground-truth action data improved average success rate by 54% over a no-pretraining baseline [10]. We have access to much higher volumes of ground-truth action and tactile data to help us deploy reliably.

Deployment also addresses a blind spot in robotics: the ecosystem to deploy robots commercially does not yet exist. Focusing on deployments in the shorter term helps us understand the optimal collaboration and ecosystem requirements.

### 5.2. Long Term

With sufficient compute resources and scaled data, we will pre-train our own models in the longer term and own the entire model pipeline.

With a backbone of ground-truth action and tactile data at scale, it is reasonable to expect that models will generalize reliably across tasks while requiring minimal post-training. This is when we start approaching general-purpose models.

Which architecture achieves this remains an open question. World models [11] currently show the most promise, due to their ability to develop an understanding of the physical world implicitly in the latent space rather than relying on language. We are actively researching suitable pre-training architectures to supplement the backbone of our multimodal data.

We have seen Generalist reach an ossification point [12] with their models at 300,000 hours of training data. This does not mean the models were reliable enough to deploy, but that there was a clear scaling law. We expect to scale our data extremely fast: with 500 people, we will generate 1.25M hours of data every year. Assuming our multi-modal backbone requires more data, it is reasonable to expect that a year of data collection with 500 people should demonstrate a scaling law for general-purpose robotics.

## 6. Competitors

Our moat is a compounding flywheel: we deploy with customers first and cheaply, for each deployment we collect data that improves our models and wins the next deployment, and every customer we run on locks in. This is built on top of a hard-to-replicate operational stack (data factory, Indian ops, gloves). We have access to high-quality dexterous data at scale for cheap. The best-funded players have still not deployed at scale, which is the clearest sign the bottleneck is execution, not capital. Our core argument is that value in robotics accrues at the deployment layer, not the model layer, and this is the most difficult switch to make.

### 6.1. Research Labs

We focus on deploying robots with customers. Our data engine produces cheap, high-quality data that helps us build models relevant to deployment and lock in customers while improving our model performance.

- **Physical Intelligence (PI):** PI currently focuses on pre-training data-efficient models like VLAs to work around not having this data at scale, and their out-of-the-box models are not deployable on their own, so they rely on third-party deployers and per-customer data to make them work [13]. Because PI ships an interchangeable model layer, the deployer can swap it out, so PI captures no lock-in.
- **Generalist:** Generalist collects data with UMI-style parallel-jaw grippers [14] and no force feedback, so the data they collect is bounded to two-finger manipulation. Their models stay within the gripper action space, and the data does not transfer to a five-finger hand. We collect data at scale with the force and full-hand dexterity their grippers miss.
- **Genesis:** Genesis shares our sensorized glove thesis, but collects data passively from workers doing normal jobs, making data collection vertical-specific and hard to quality-control [16].

### 6.2. Humanoids

We are focused on building manipulation intelligence and, with our retargeting algorithms, can be hardware-agnostic. Humanoid companies focus on model and hardware together, including locomotion, whole-body control, and loco-manipulation. Manipulation comes downstream from this, and their resources are permanently split across that full stack.

### 6.3. Future Competition

We have built out our data infrastructure in India (data factory, ops team, engineering team) along with sensorized gloves, and validated demand with 6 pilots. Our moat compounds exponentially over time with more deployments, better data, and improved model performance.

## References

1. M. Kalil. "Year of the humanoid robot: Top AI robots to watch in 2025." Unitree G1 humanoid robot priced at $16,000, 2026. [Available online](https://mikekalil.com/blog/2024-year-of-the-humanoid-robot/)
2. Y. Guo, T. Wang, et al. "Towards human-level intelligence via human-like whole-body manipulation," arXiv preprint arXiv:2507.17141, 2025. [arXiv:2507.17141](https://arxiv.org/abs/2507.17141)
3. Open X-Embodiment Collaboration. "Open X-Embodiment: Robotic learning datasets and RT-X models," in IEEE ICRA, 2024. [arXiv:2310.08864](https://arxiv.org/abs/2310.08864)
4. E. Aljalbout et al. "The reality gap in robotics: Challenges, solutions, and best practices," arXiv:2510.20808, 2024. [arXiv:2510.20808](https://arxiv.org/abs/2510.20808)
5. T. Lin et al. "Sim-to-real reinforcement learning for vision-based dexterous manipulation on humanoids," arXiv:2502.20396, 2025. [arXiv:2502.20396](https://arxiv.org/abs/2502.20396)
6. J. Yin et al. "OSMO: Open-Source tactile glove for Human-to-Robot skill transfer," arXiv:2512.08920, 2025. [arXiv:2512.08920](https://arxiv.org/abs/2512.08920)
7. Y. Huang et al. "Human-like dexterous manipulation for anthropomorphic five-fingered hands: A review," Biomimetic Intelligence and Robotics, 2025. [DOI:10.1016/j.birob.2025.100212](https://doi.org/10.1016/j.birob.2025.100212)
8. L. Qi, O. Popoola, M. A. Imran, and W. Ahmad. "Genhand: Generalised human grasp kinematic retargeting," npj Robotics, 2026. [DOI:10.1038/s44182-026-00076-1](https://doi.org/10.1038/s44182-026-00076-1)
9. G. Papagiannis, N. Di Palo, P. Vitiello, and E. Johns. "R+x: Retrieval and execution from everyday human videos," arXiv:2407.12957. [arXiv:2407.12957](https://arxiv.org/abs/2407.12957)
10. R. Zheng et al. "EgoScale: Scaling dexterous manipulation with diverse egocentric human data," arXiv:2602.16710, 2026. [arXiv:2602.16710](https://arxiv.org/abs/2602.16710)
11. M. Assran et al. "V-JEPA 2: Self-supervised video models enable understanding, prediction and planning," arXiv:2506.09985. [arXiv:2506.09985](https://arxiv.org/abs/2506.09985)
12. Generalist AI. "Gen-0: Scaling physical intelligence through data," 2026. [Available online](https://generalistai.com/blog/nov-04-2025-GEN-0)
13. Physical Intelligence. "Deployment partnerships and per-customer adaptation," 2026. [Available online](https://pi.website/blog/partner)
14. Rerun. "The data layer tax," 2026. [Available online](https://rerun.io/blog/data-layer-tax)
15. P. Florence. "On the importance of human data at scale for robotics," 2026. [Available online](https://x.com/peteflorence)
16. The Robot Report. "Genesis gene-26.5: Data-collection glove, passive on-the-job capture, simulation, and dexterous hand," May 2026.
    `.trim(),
  },
];

/** Get parsed posts with separated body and references */
export const posts: Post[] = rawPosts.map((raw) => {
  const { body, references } = parsePost(raw.body);
  return { ...raw, body, references };
});

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
