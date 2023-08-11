import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import motomotoImg from "@/public/MotoMoto.png";
import myebenefitImg from "@/public/MyEbenefit.png";
import myerecordImg from "@/public/MyErecord.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Flutter Developer",
    location: "Cengkareng, West Jakarta",
    description:
      "Develop user applications to order services and a technician application to check services using the Flutter framework.",
    icon: React.createElement(CgWorkAlt),
    date: "August - December 2021",
  },
  {
    title: "Flutter Developer",
    location: "Grogol Petamburan, West Jakarta",
    description:
      "Develop user applications to register vehicles for ticketing services and fixed attendance application bugs.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2021 - March 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Senen, Central Jakarta",
    description:
      "I'm now a full-stack developer working.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MotoMoto",
    description:
      "Mobile application for making parking payment transactions.",
    tags: ["Flutter", "Laravel", "Mysql", "Payment Gateway"],
    imageUrl: motomotoImg,
  },
  {
    title: "My Ebenefit",
    description:
      "Manage your life insurance policy, anytime and anywhere.",
    tags: ["Flutter", "Nodejs", "Postgre"],
    imageUrl: myebenefitImg,
  },
  {
    title: "My Erecord",
    description:
      "Mobile app to record sound and upload recordings from gmeet or zoom.",
    tags: ["Flutter", "Springboot", "SQL Server"],
    imageUrl: myerecordImg,
  },
] as const;

export const skillsData = [
  "Flutter",
  "SQL Server",
  "Postman",
  "Jira",
  "Java Springboot",
  "Next.js",
  "Nest js",
  "Git",
] as const;