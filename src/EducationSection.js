import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import "./App.css";
import InfoBox from "./InfoBox";

function EducationSection() {
  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem">
        <Text fontSize="14px">MY EDUCATION</Text>
        <Divider w="10px" />
      </HStack>
      <HStack spacing="1rem" overflow="auto" whiteSpace="nowrap">
        <InfoBox
          title="Master in Computer Science and Business Technology"
          insitution="IE University"
          address="Madrid, Spain"
          body="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          button1title="Skill 1"
          button2title="Skill 2"
        />
        <InfoBox
          title="BSc Computer Science with Business"
          insitution="University of Bath"
          address="Bath, UK"
          body="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          button1title="Skill 1"
          button2title="Skill 2"
        />
        <InfoBox
          title="International Baccaleureate"
          insitution="Charterhouse School"
          address="Godalming, UK"
          body="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          button1title="Skill 1"
          button2title="Skill 2"
        />
      </HStack>
    </Flex>
  );
}

export default EducationSection;
