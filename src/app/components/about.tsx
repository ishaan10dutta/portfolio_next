"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from SRM Chennai,
        I decided to pursue my passion for programming. I landed an
        international summer internship at Barclays at their Glasgow office in
        my 3rd year, and successfully{" "}
        <span className="font-medium">converted it to a full time offer</span>.{" "}
        <span>
          {" "}
          I moved to Glasgow in 2022 to start my role as a Software Developer,
          excited for a new country, company and experiences
        </span>
        .{" "}
        <span className="font-medium">
          My core stack is Typescript, React, Next.js, Node.js, and Java
        </span>
        . I am also comfortable with Python and C++, amongst other frameworks
        and tools. I hold a keen interest in learning new technologies, for
        example Solidity and smart contract programming.{" "}
        <span className="font-medium">
          I am currently looking for a fresh challenge as a software developer.
        </span>
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I play football, and
        have played semi professionally in India and represented my university;
        been a{" "}
        <span className="font-medium">
          supporter of Arsenal since 2006 as well
        </span>
        . I also enjoy{" "}
        <span className="font-medium">
          my music, always on the lookout for gigs and new artists
        </span>
        .
      </p>
    </motion.section>
  );
}
