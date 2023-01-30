import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useStoryblok } from "@storyblok/react";
import { useSelector } from "react-redux";
import "./App.css";
import InfoBox from "./InfoBox";

function EducationSection() {
  const theme = useSelector((state) => state.theme);

  const ie = useStoryblok("education/ie");
  const bath = useStoryblok("education/bath");
  const chouse = useStoryblok("education/chouse");

  let education = [
    {
      title: ie.content ? ie.content.title : "",
      institution: ie.content ? ie.content.institution : "",
      address: ie.content ? ie.content.address : "",
      body: ie.content ? ie.content.body : "",
      skills: [],
      imgSrc: "ie_" + theme + ".png",
      dates: ie.content ? ie.content.dates : "",
    },
    {
      title: bath.content ? bath.content.title : "",
      institution: bath.content ? bath.content.institution : "",
      address: bath.content ? bath.content.address : "",
      body: bath.content ? bath.content.body : "",
      skills: [],
      imgSrc: "bath_" + theme + ".png",
      dates: bath.content ? bath.content.dates : "",
    },
    {
      title: chouse.content ? chouse.content.title : "",
      institution: chouse.content ? chouse.content.institution : "",
      address: chouse.content ? chouse.content.address : "",
      body: chouse.content ? chouse.content.body : "",
      skills: [],
      imgSrc: "chouse_" + theme + ".png",
      dates: chouse.content ? chouse.content.dates : "",
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
            institution={ed.institution}
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
