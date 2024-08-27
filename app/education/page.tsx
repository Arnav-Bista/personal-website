import Image from "next/image";
import Card from "../components/card";

import standrews from "@/public/images/standrews.png"
import tbs from "@/public/images/tbs.png"
import SectionDetails from "../components/sectionDetails";
import "./education.css";

export default function Education() {

  return (
    <>
      <Card backdrop className="mt-10">
        <div className="m-10 p-8 flex flex-row">
          <div className="flex flex-col">
            <h1>Undergraduate</h1>
            <SectionDetails
              title="2025/26"
              entry={[
                "Coming Soon..."
              ]}
            />
            <SectionDetails
              title="2024/25"
              entry={[
                "CS3050 - Logic and Reasoning",
                "CS3052 - Computational Complexity",
                "CS3099 - Software Engineering Team Project",
                // "CS3101 - Databases",
                "CS3102 - Data Communications and Networks",
                "CS3104 - Operating Systems",
                "CS3302 - Data Encoding",
                "VIP    - AI for Decision Making"
              ]}
            />
            <SectionDetails
              title="2023/24"
              entry={[
                "CS2001 - Foundations of Computing",
                "CS2002 - Computer Systems",
                "CS2003 - The Internet and The Web: Concepts and Programming",
                "CS2006 - Advanced Programming Projects"
              ]}
            />
            <SectionDetails
              title="2022/23"
              entry={[
                "CS1002 - Object Oriented Programming",
                "CS1003 - Programming with Data",
                "CS1006 - Programming Projects",
                "CS1007 - Computer Systems Fundamentals",
                "MT1002 - Mathematics",
                "MT1002 - Pure and Applied Mathematics",
              ]}
            />
          </div>
          <div className="w-1/3 edu-logo">
            <Image
              src={standrews}
              alt="Picture of Me"
              quality={100}
              placeholder="blur"
              className="rounded-md"
            />
          </div>
        </div>
      </Card>
      <Card backdrop className="mt-10">
        <div className="m-10 p-8 flex flex-row">
          <div className="flex flex-col">
            <h1>International Baccalaureate</h1>
            <SectionDetails
              title="42/45"
              entry={[
                "Mathematics Analysis and Approaches HL",
                "Physics HL",
                "Computer Science HL",
                "Business Management SL",
                "English Language and Literature SL",
                "Spanish B SL",
                "TOK/EE"
              ]}
              score={[
                "7",
                "7",
                "7",
                "7",
                "6",
                "6",
                "2"
              ]}
            />
          </div>
          <div className="w-1/3 edu-logo">
            <Image
              src={tbs}
              alt="The British School, New Delhi Logo"
              quality={100}
              placeholder="blur"
              className="rounded-md edu-logo"
              style={{
                objectFit: "contain"
              }}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
