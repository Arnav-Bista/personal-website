import Card from "../../components/card";
import SectionDetails from "../../components/sectionDetails";
import SectionPoints from "../../components/sectionPoints";
import ExperienceTechs from "./experienceTechs";
import Section from "./section";
import "./experience.css";

export default function Experience() {
  return (
    <div className="experience-section">
      <Section
        title="Quantifi"
        position="Developer Intern"
        duration="Jun 2025 - Sept 2025"
        type="Onsite"
        location="London, UK"
      >
        <SectionPoints
          points={[
            "Diagnosed and resolved critical production outage affecting 4.5M task workloads; eliminated N+1 query antipattern with bulk SQL operations using CTEs, restoring system stability",
            "Redesigned enterprise build system for 240+ project C# monorepo; implemented parallel compilation and dependency optimisation, reducing clean builds 75% (40m→10m) and enabling 1-min incremental builds, boosting developer experience",
            "Optimized critical client trading form bottleneck; replaced full-dataset bond dropdown with selective projections, reducing load times from 60s to 9s",
            "Fixed distributed state management bug in HPC grid where SQL timeouts left tasks in inconsistent 'Queued' state; implemented cleanup logic to reconcile task states post-job completion",
          ]}
        />
        <ExperienceTechs
          techs={[
            "c_sharp",
            "dotnet",
            "mysql",
          ]}
        />
      </Section>
      <Section
        title="Loopsio"
        position="Software Engineer"
        duration="Dec 2024 - Mar 2025"
        type="Remote"
        location="Based in Glasgow, UK"
      >
        <SectionPoints
          points={[
            "Architected full-stack web application for 3-person startup team, leveraging ExpressJS, TypeScript, React, and PostgreSQL",
            "Implemented repository service pattern and integrated OpenAI APIs to enhance backend architecture and user functionality",
            "Established secure cloud infrastructure on DigitalOcean using UFW and SSHGuard security protocols",
            "Implemented CI/CD pipelines using GitHub Actions to automate the build, test and deployment process",
          ]}
        />
        <ExperienceTechs
          techs={[
            "react",
            "expressjs",
            "postgres",
            "typescript",
            "openai",
            "github-actions",
            "digital-ocean",
            "nginx"
          ]}
        />
      </Section>
      <Section
        title="Ixigo"
        position="Software Developer Intern"
        duration="Jul 2024 - Sept 2024"
        type="Onsite"
        location="Gurugram, India"
      >
        <SectionPoints
          points={[
            "Architected 'Infinite Memory' system for production LLM infrastructure; extended open-source Go applications with hierarchical context pruning and intelligent summarization to optimize token usage in chat flows",
            "Implemented distributed rate limiting for LLM API endpoints using Redis shared state across server instances to prevent cost overruns",
          ]}
        />
        <ExperienceTechs
          techs={[
            "go",
            "python",
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
            "digital-ocean",
            "nginx"
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
    </div>
  );
}
