import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import "./App.css";
import InfoBox from "./InfoBox";

function EducationSection(theme) {
  window.addEventListener("scroll", reveal);

  let education = [
    {
      title: "Master in Computer Science and Business Technology",
      insitution: "IE University",
      address: "Madrid, Spain",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "ie_" + theme.theme + ".png",
    },
    {
      title: "BSc Computer Science with Business",
      insitution: "University of Bath",
      address: "Bath, UK",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "bath_" + theme.theme + ".png",
    },
    {
      title: "International Baccaleureate",
      insitution: "Charterhouse School",
      address: "Godalming, UK",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "chouse_" + theme.theme + ".png",
    },
  ];

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem" className="fadeIn">
        <Text fontSize="14px" textTransform="uppercase">
          My Education
        </Text>
        <Divider
          borderColor={theme.theme == "dark" ? "white" : "black"}
          w="10px"
        />
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
            button1title={ed.button1title}
            button2title={ed.button2title}
            imgSrc={ed.imgSrc}
            theme={theme}
          />
        ))}
      </Flex>
    </Flex>
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal, .fadeIn, .revealMobile");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

export default EducationSection;
