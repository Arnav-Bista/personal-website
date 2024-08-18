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
          points={[
            "Integrated LLMs into existing tech stacks to improve user experience by providing AI Powered features",
            "Forked and Developed on an existing OSS in Go, Postgres and MySQL to create facts and summary generation system for LLMs",
            "\tCreated 'Infinite Memory' for LLMs to remember data without using infinite tokens",
            "\tDrastically reduced the required tokens and average lantency for LLM calls using the new memory system",
            "Implement Rate Limiters for costly API calls to prevent abuse",
            "\tUtilized a modified version of the 'Leaky Bucket' algorithm with Redis to sync across all server instances on the backend",
            "\tAdded a rate limiter for the chat interface on the frontend to prevent accidental and intentional spamming",
            "Developed several scripts to generate automated and scheduled reports using Prefect, integrating it with Slack channels",
          ]}
        />
        <ExperienceTechs
          techs={[
            "go",
            "python",
            "javascript",
            "react",
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
        <SectionPoints
          points={[
            "Developed a responsive and user-friendly web application frontend using ReactJS, Redux, and Tailwind CSS",
            "Setup and Maintain the Hosting Server on Digital Ocean",
            "\tUsed Nginx as a reverse proxy to serve the frontend and backend on the same domain",
            "\tImplemented harsh security measures with UFW and SSH-Guard to prevent unauthorized access to the server",
            "Implemented CI/CD pipelines using GitHub Actions to automate the build, test and deployment process",
          ]}
        />
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
        <SectionPoints
          points={[
            "Used Flutter and Dart skills to develop 3 responsive cross-platform mobile applications",
            "Utilized CLEAN architecture and Test Driven Development for code readability and reliability under the guidance of senior developers",
            "Collaborated regularly in business meetings for feature evaluation and project planning",
            "Attended and hosted workshops for the Flutter Development Team",
            "\tBusiness App Life Cycle",
            "\tDevOps for Android, IOS and Web Applications",
            "\tTDD, App Performance Analysis and Optimization"
          ]}
        />
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
