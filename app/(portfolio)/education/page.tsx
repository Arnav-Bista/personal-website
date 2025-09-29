import Image from "next/image";
import Card from "../../components/card";

import standrews from "@/public/images/standrews.png"
import tbs from "@/public/images/tbs.png"
import SectionDetails from "../../components/sectionDetails";

export default function Education() {

  return (
    <div>
      <Card backdrop className="mt-10">
        <div className="m-6 md:m-10 p-4 md:p-8 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col flex-1">
            <h1 className="font-bold mb-6">Undergraduate</h1>
            <SectionDetails
              title="2025/26"
              entry={[
                "CS4105 - Advanced Communication Networks and Systems",
                "CS4102 - Computer Graphics",
                "CS4402 - Constraint Programming",
                "CS4202 - Computer Architecture",
                "CS5014 - Machine Learning",
                "CS4303 - Video Games",
                "CS4099 - Major Software Project"
              ]}
            />
            <SectionDetails
              title="2024/25 - Dean's List"
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
              title="2023/24 - Dean's List"
              entry={[
                "CS2001 - Foundations of Computing",
                "CS2002 - Computer Systems",
                "CS2003 - The Internet and The Web: Concepts and Programming",
                "CS2006 - Advanced Programming Projects"
              ]}
            />
            <SectionDetails
              title="2022/23 - Dean's List"
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
          <div className="w-full md:w-1/3 md:ml-auto flex justify-center md:justify-end items-start">
            <Image
              src={standrews}
              alt="Picture of Me"
              quality={100}
              placeholder="blur"
              className="rounded-md max-w-[200px] md:max-w-none"
            />
          </div>
        </div>
      </Card>
      <Card backdrop className="mt-10">
        <div className="m-6 md:m-10 p-4 md:p-8 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col flex-1">
            <h1 className="font-bold mb-6">International Baccalaureate</h1>
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
          <div className="w-full md:w-1/3 md:ml-auto flex justify-center md:justify-end items-start">
            <Image
              src={tbs}
              alt="The British School, New Delhi Logo"
              quality={100}
              placeholder="blur"
              className="rounded-md max-w-[200px] md:max-w-none max-h-[200px] md:max-h-[300px]"
              style={{
                objectFit: "contain"
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
