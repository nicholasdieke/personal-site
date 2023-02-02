import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.css";

function SkillBox({ skill }) {
  const theme = useSelector((state) => state.theme);

  return (
    <Box
      bg={
        theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.05)"
      }
      borderRadius="5px"
      className="reveal"
      p="1rem"
      whiteSpace="nowrap"
      alignItems="center"
    >
      <HStack>
        <Image src={skill.img} height={{ base: "25px", md: "30px" }} mr="5px" />
        <Text fontSize="18px">{skill.title}</Text>
      </HStack>
    </Box>
  );
}

export default SkillBox;
