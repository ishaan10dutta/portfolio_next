import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";

const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold });
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, timeOfLastClick, setActiveSection, sectionName]);

  return {ref};
};

export {useSectionInView};