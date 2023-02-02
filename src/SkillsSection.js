import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.css";
import SkillBox from "./SkillBox";

const skills = [
  { title: "Python", img: "skills_logos/python_logo.png" },
  { title: "JavaScript", img: "skills_logos/JavaScript-logo.png" },
  { title: "TypeScript", img: "skills_logos/TypeScript_logo.svg" },
  { title: "C#", img: "skills_logos/Csharp_Logo.png" },
  { title: "React", img: "skills_logos/React-icon.svg" },
  { title: "Angular", img: "skills_logos/Angular_logo.svg" },
  { title: "Java", img: "skills_logos/java_icon.png" },
  { title: "Git", img: "skills_logos/git_icon.svg" },
  { title: "HTML", img: "skills_logos/html_logo.svg" },
  { title: "CSS", img: "skills_logos/css_logo.png" },
  { title: "Azure", img: "skills_logos/azure_logo.png" },
];

function SkillsSection() {
  const theme = useSelector((state) => state.theme);

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="2rem">
      <HStack mb="1rem">
        {/* <FontAwesomeIcon icon={faSchool} size="2xs" /> */}
        <Text fontSize="14px" textTransform="uppercase">
          Skills
        </Text>
        <Divider borderColor={theme === "dark" ? "white" : "black"} w="10px" />
      </HStack>
      <Flex gap="0.5rem" spacing="1rem" flexWrap="wrap">
        {skills.map((s) => (
          <SkillBox skill={s} />
        ))}
      </Flex>
    </Flex>
  );
}

export default SkillsSection;
