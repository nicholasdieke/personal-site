import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.css";

function AboutMeSection() {
  const theme = useSelector((state) => state.theme);

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem">
        {/* <FontAwesomeIcon icon={faSchool} size="2xs" /> */}
        <Text fontSize="14px" textTransform="uppercase">
          About Me
        </Text>
        <Divider borderColor={theme === "dark" ? "white" : "black"} w="10px" />
      </HStack>
      <Flex spacing="1rem">
        <Text textAlign="left" fontSize={{ base: "18px", md: "20px" }}>
          I am a software developer with a diverse background in various
          industries including automotive, EdTech, and consulting. I am
          currently pursuing a Master's degree in Computer Science and Business
          Technology at IE University in Madrid. My BSc degree from University
          of Bath, international background, and fluency in multiple languages
          have equipped me with a strong foundation in computer science and the
          ability to adapt to different environments. Through my participation
          in datathons and leadership roles in sports teams, I have developed
          strong problem-solving, teamwork, and communication skills.
        </Text>
      </Flex>
    </Flex>
  );
}

export default AboutMeSection;
