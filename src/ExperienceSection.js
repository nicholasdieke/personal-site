import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import "./App.css";
import InfoBox from "./InfoBox";

function ExperienceSection(theme) {
  window.addEventListener("scroll", reveal);

  let experiences = [
    {
      title: "Tech Lead",
      insitution: "Google Developer Students Club IE",
      address: "Madrid, Spain",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "gdsc_" + theme.theme + ".png",
    },
    {
      title: "Sofware Engineer Intern",
      insitution: "Bertrandt Group",
      address: "Munich, Germany",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "bertrandt_" + theme.theme + ".png",
    },
    {
      title: "Consultant",
      insitution: "180 Degrees Consulting Bath",
      address: "Bath, UK",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "180_" + theme.theme + ".png",
    },
    {
      title: "Software Developer Intern",
      insitution: "Educai",
      address: "London, UK",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "educai_" + theme.theme + ".png",
    },
    {
      title: "Software Developer Intern",
      insitution: "TraceTronic GmbH",
      address: "Munich, Germany",
      body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      button1title: "Skill 1",
      button2title: "Skill 2",
      imgSrc: "tracetronic_" + theme.theme + ".png",
    },
  ];

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem" className="fadeIn">
        <Text fontSize="14px" textTransform="uppercase">
          My Experience
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
        {experiences.map((ex) => (
          <InfoBox
            title={ex.title}
            insitution={ex.insitution}
            address={ex.address}
            body={ex.body}
            button1title={ex.button1title}
            button2title={ex.button2title}
            imgSrc={ex.imgSrc}
            theme={theme}
          />
        ))}
      </Flex>
    </Flex>
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal, .revealMobile");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

export default ExperienceSection;
