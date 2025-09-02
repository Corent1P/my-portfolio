import { CodeXml, Cpu, DatabaseZap, Gamepad2, ServerCog } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: Gamepad2,
    name: "Game Development",
    description:
      "Create games with Unity or without using any game engine in pure C or C++.",
    href: "/",
    cta: "Learn more",
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="File Text" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: DatabaseZap,
    name: "Database Management",
    description:
      "Create and manage different types of databases like SQL and NoSQL.",
    href: "/",
    cta: "Learn more",
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="File Text" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CodeXml,
    name: "Web Development",
    description:
      "Create responsive and dynamic websites using React, Next.js, and more.",
    href: "/",
    cta: "Learn more",
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="Globe" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Cpu,
    name: "Low Level Programming",
    description:
      "Understand how a computer works and program in C, C++ or even Assembly.",
    href: "/",
    cta: "Learn more",
    background: (
      <img className="absolute -right-20 -top-20 opacity-60" alt="Calendar" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: ServerCog,
    name: "DevOps",
    description:
      "Implement CI/CD pipelines, and ensure smooth deployments using tools like Docker, Jenkins and more.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        alt="Notifications"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoSkills() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
