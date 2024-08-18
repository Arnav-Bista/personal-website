import Card from "../components/card";
import SectionDetails from "../components/sectionDetails";
import SectionPoints from "../components/sectionPoints";
import ExperienceTechs from "./experienceTechs";
import Section from "./section";

export default function Experience() {
  return (
    <>
      <Section
        title="Ixigo"
        position="Software Developer Intern"
        duration="Aug 2024 - Sept 2024 (2 mos)"
        type="Hybrid"
        location="Gurugram, India"
      >
        <SectionPoints
          className="mb-8"
          points={[
            "Integrated LLMs into existing tech stacks to improve user experience by providing AI Powered features", 
            "First",
            "\tSecond One",
            "\tSecond Two",
            "\t\tThird",
            "First",
            "\tSecond"

          ]}
        />
        <ExperienceTechs
          techs={[
            "go",
            "python",
            "javascript",
            // "typescript",
            "postgres",
            "mysql"
          ]}
        />
      </Section>
      <Section
        title="Loopsio"
        position="Part Time Software Developer"
        duration="Oct 2023 - Apr 2024 (7 mos)"
        type="Remote"
        location="Based on Glasgow, UK"
      >
        <ExperienceTechs
          techs={[
            "react",
            "redux",
            "tailwind",
            "typescript",
            "github-actions",
            "digital-ocean"
          ]}
        />
      </Section>
      <Section
        title="Fonepay"
        position="Software Developer Intern"
        duration="Jun 2023 - Aug 2024 (3 mos)"
        type="Onsite"
        location="Pulchowk, Nepal"
      >
        <ExperienceTechs
          techs={[
            "dart",
            "flutter",
            "firebase"
          ]}
        />
      </Section>
    </>
  );
}
