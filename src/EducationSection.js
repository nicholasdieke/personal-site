import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.css";
import InfoBox from "./InfoBox";

function EducationSection() {
  const theme = useSelector((state) => state.theme);

  let education = [
    {
      title: "Master in Computer Science and Business Technology",
      insitution: "IE University",
      address: "Madrid, Spain",
      body: "I participate in datathons such as the Celonis datathon and the Google Solution Challenge. These experiences have helped my problem-solving and teamwork skills, while also providing opportunities for networking with potential employers.",
      skills: [],
      imgSrc: "ie_" + theme + ".png",
      dates: "2022 - 2023",
    },
    {
      title: "BSc Computer Science with Business",
      insitution: "University of Bath",
      address: "Bath, UK",
      body: "I graduated with a First Class Honours degree. During my university, I played on the basketball team, developing teamwork and communication skills and representing the university in competitions.",
      skills: [],
      imgSrc: "bath_" + theme + ".png",
      dates: "2018 - 2022",
    },
    {
      title: "International Baccaleureate",
      insitution: "Charterhouse School",
      address: "Godalming, UK",
      body: "I completed the International Baccalaureate (IB) program with a focus on Mathematics, Economics and German A. During the program, I was the Captain of the basketball team, member of the 1st team Tennis, and a member of the Economics Society.",
      skills: [],
      imgSrc: "chouse_" + theme + ".png",
      dates: "2015 - 2017",
    },
  ];

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem" className="fadeIn">
        {/* <FontAwesomeIcon icon={faSchool} size="2xs" /> */}
        <Text fontSize="14px" textTransform="uppercase">
          My Education
        </Text>
        <Divider borderColor={theme === "dark" ? "white" : "black"} w="10px" />
      </HStack>
      <Flex
        spacing="1rem"
        overflow="auto"
        whiteSpace="nowrap"
        flexDir={{ base: "column", lg: "row" }}
      >
        {education.map((ed) => (
          <InfoBox
            title={ed.title}
            insitution={ed.insitution}
            address={ed.address}
            body={ed.body}
            skills={ed.skills}
            imgSrc={ed.imgSrc}
            dates={ed.dates}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default EducationSection;
