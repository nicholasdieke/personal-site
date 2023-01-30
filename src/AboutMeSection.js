import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useStoryblok } from "@storyblok/react";
import { useSelector } from "react-redux";
import "./App.css";

function AboutMeSection() {
  const theme = useSelector((state) => state.theme);
  const story = useStoryblok("aboutme");

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
        <Text textAlign="left" fontSize={{ base: "17px", md: "20px" }}>
          {story.content && story.content.body}
        </Text>
      </Flex>
    </Flex>
  );
}

export default AboutMeSection;
