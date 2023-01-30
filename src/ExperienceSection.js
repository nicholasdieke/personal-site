import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useStoryblok } from "@storyblok/react";
import { useSelector } from "react-redux";
import "./App.css";
import InfoBox from "./InfoBox";

function ExperienceSection() {
  const theme = useSelector((state) => state.theme);

  const google = useStoryblok("experiences/google-dsc");
  const bertrandt = useStoryblok("experiences/bertrandt");
  const degrees = useStoryblok("experiences/180-degrees");
  const educai = useStoryblok("experiences/educai");
  const tracetronic = useStoryblok("experiences/tracetronic");

  let experiences = [
    {
      title: google.content ? google.content.title : "",
      institution: google.content ? google.content.institution : "",
      address: google.content ? google.content.address : "",
      body: google.content ? google.content.body : "",
      skills: [],
      imgSrc: "gdsc_" + theme + ".png",
      dates: google.content ? google.content.dates : "",
    },
    {
      title: bertrandt.content ? bertrandt.content.title : "",
      institution: bertrandt.content ? bertrandt.content.institution : "",
      address: bertrandt.content ? bertrandt.content.address : "",
      body: bertrandt.content ? bertrandt.content.body : "",
      skills: bertrandt.content ? bertrandt.content.skills.split(",") : [],
      imgSrc: "bertrandt_" + theme + ".png",
      dates: bertrandt.content ? bertrandt.content.dates : "",
    },
    {
      title: degrees.content ? degrees.content.title : "",
      institution: degrees.content ? degrees.content.institution : "",
      address: degrees.content ? degrees.content.address : "",
      body: degrees.content ? degrees.content.body : "",
      skills: [],
      imgSrc: "180_" + theme + ".png",
      dates: degrees.content ? degrees.content.dates : "",
    },
    {
      title: educai.content ? educai.content.title : "",
      institution: educai.content ? educai.content.institution : "",
      address: educai.content ? educai.content.address : "",
      body: educai.content ? educai.content.body : "",
      skills: educai.content ? educai.content.skills.split(",") : [],
      imgSrc: "educai_" + theme + ".png",
      dates: educai.content ? educai.content.dates : "",
    },
    {
      title: tracetronic.content ? tracetronic.content.title : "",
      institution: tracetronic.content ? tracetronic.content.institution : "",
      address: tracetronic.content ? tracetronic.content.address : "",
      body: tracetronic.content ? tracetronic.content.body : "",
      skills: tracetronic.content ? tracetronic.content.skills.split(",") : [],
      imgSrc: "tracetronic_" + theme + ".png",
      dates: tracetronic.content ? tracetronic.content.dates : "",
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
            institution={ex.institution}
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
