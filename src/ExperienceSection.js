import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.css";
import InfoBox from "./InfoBox";

function ExperienceSection() {
  const theme = useSelector((state) => state.theme);

  let experiences = [
    {
      title: "Tech Lead",
      insitution: "Google Developer Club IE",
      address: "Madrid, Spain",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      skills: [],
      imgSrc: "gdsc_" + theme + ".png",
      dates: "Oct 2022 - Present",
    },
    {
      title: "Sofware Engineer Intern",
      insitution: "Bertrandt Group",
      address: "Munich, Germany",
      body: "I co-created the company's internal machine maintenance tool and collaborated with the manager of the company's largest site using TypeScript, Angular, and C#. Additionally, I took the initiative to redesign and optimise a core component of the internal scheduling tool. This led to a 60% reduction in load times and a more intuitive user experience for our users.",
      skills: ["C#", "Angular", "Azure"],
      imgSrc: "bertrandt_" + theme + ".png",
      dates: "Jun 2022 - Sep 2022",
    },
    {
      title: "Consultant",
      insitution: "180 Degrees Consulting Bath",
      address: "Bath, UK",
      body: "I produced market entry recommendations for a Swedish MedTech start-up by conducting in-depth market analysis. I also took the responsibility of running weekly discussions with the CEO to report on progress.",
      skills: [],
      imgSrc: "180_" + theme + ".png",
      dates: "Oct 2021 - Dec 2021",
    },
    {
      title: "Software Developer Intern",
      insitution: "Educai",
      address: "London, UK",
      body: "I designed and developed core parts of an education platform using React and TypeScript, which was widely used by tutors across the UK. I collaborated with the sales and marketing teams to launch the platform successfully, and developed a web app to determine learning approaches. I also led meetings with clients and investors, and trained two new developers to continue building and improving the platform.",
      skills: ["React", "TypeScript", "Python"],
      imgSrc: "educai_" + theme + ".png",
      dates: "Sep 2020 - Jul 2021",
    },
    {
      title: "Software Developer Intern",
      insitution: "TraceTronic GmbH",
      address: "Munich, Germany",
      body: "During my 3-month internship in the automotive industry, I worked on the start-stop system team developing a data management software. My responsibilities included analysing bugs, developing unit tests, and working in a Scrum process. I also presented new changes to the team and clients and worked independently on the software, gaining valuable experience in perseverance.",
      skills: ["Java", "SQL"],
      imgSrc: "tracetronic_" + theme + ".png",
      dates: "Jun 2019 - Aug 2019",
    },
  ];

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem" className="fadeIn">
        {/* <FontAwesomeIcon
          icon={faBriefcase}
          size="2xs"
        /> */}
        <Text fontSize="14px" textTransform="uppercase">
          My Experience
        </Text>
        <Divider borderColor={theme === "dark" ? "white" : "black"} w="10px" />
      </HStack>
      <Flex
        spacing="1rem"
        overflow="auto"
        whiteSpace="nowrap"
        flexDir={{ base: "column", lg: "row" }}
      >
        {experiences.map((ex) => (
          <InfoBox
            title={ex.title}
            insitution={ex.insitution}
            address={ex.address}
            body={ex.body}
            skills={ex.skills}
            imgSrc={ex.imgSrc}
            dates={ex.dates}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default ExperienceSection;
