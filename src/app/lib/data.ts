import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJava } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../../public/corpcomment.png";
import rmtdevImg from "../../../public/rmtdev.png";
import wordanalyticsImg from "../../../public/wordanalytics.png";
import pdfMagicImg from "../../../public/pdfMagicImg.png";
import timeSeriesImg from "../../../public/timeSeriesImg.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Wealth Hub team, Barclays",
    description:
      "Part of a global team which successfully onboarded ~1.2mn customers worldwide onto the Wealth Hub application through strategic channels at Barclays, including The Barclays App and Retail Online Banking Platform:Implemented the complete migration of the account history and dashboard pages from Angular to React, leveraging our hybrid app approach to ensure a seamless transition of the system:Owned the complete development of a new feature for restricting access of customers to different parts of the application, based on their consultation journey stage with Barclays financial advisers:Currently working on building the Private Bank UI and core functionality as part of the next steps of the app roadmap:Played a key role in backend development as well, leveraging Spring Boot, Java, and REST APIs to develop an OpenAPI 3.0 compliant micro-service for Held Away Assets, a part of the Barclays Wealth Hub",
    icon: React.createElement(FaReact),
    date: "April 2023 - present",
  },
  {
    title: "Backend Developer",
    location: "Financial Crime Team, Barclays",
    description:
      "Drove implementation of new search features using Spring Boot for TRAQs, a transaction indexing tool used by internal compliance teams:Worked with Java and Apache Solr to improve search performance on wire transaction data by 25%:Integrated Apache Kafka to stream live messages and changes to the SQL Server Database, to topics set up on AWS MSK for multiple consumers within compliance teams:Recognized by the EMEA director of Barclays FinCrime after identifying and fixing a indexing bug which could have escalated as a breach",
    icon: React.createElement(FaJava),
    date: "Aug 2022 - April 2023",
  },
  {
    title: "Bachelor of Technology",
    location: "SRM University, Chennai",
    description:
      "I graduated with a degree in Computer Science after a wonderful 4 years in Chennai, in which I completed internships at companies like Bosch and Barclays:It was from here that I got a full time offer, and moved to Glasgow to start my software developer job at Barclays",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
] as const;

export const projectsData = [
  {
    title: "PdfMagic",
    description:
      "A full stack SaaS application for interacting with your PDF files through AI chat messaging.",
    tags: ["Typescript", "React", "Next.js", "Shadcn-ui", "OpenAI", "Prisma"],
    imageUrl: pdfMagicImg,
    link: "https://ishaan-pdfmagic.vercel.app/",
    githubLink: "https://github.com/ishaan10dutta/pdfmagic",
  },
  {
    title: "TimeSeries Analysis",
    description:
      "A data-science project to analyze and predict stock data trends based on different technical indicators using various models like ARIMA, CNN-LSTM.",
    tags: ["Python", "Pandas", "LSTMs"],
    imageUrl: timeSeriesImg,
    githubLink: "https://github.com/ishaan10dutta/Time-Series-Forecasting-Analysis-Ensemble-in-Python",
    link: ''
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
