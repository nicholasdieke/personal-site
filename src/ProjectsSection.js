import {
    Box,
    Divider,
    Flex,
    HStack,
    Heading,
    Image,
    Tag,
    Text,
    VStack
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.css";

function ProjectsSection() {
  const theme = useSelector((state) => state.theme);

  let projects = [
    {
        title: "DiscovAI",
        body: "Discover your dream vacation with DiscovAI, the AI-powered travel planner that creates personalised itineraries based on your interests and budget. Plan your perfect trip today!",
        image: "https://www.dropbox.com/s/hmmp4gklv03u11n/share-image.png?raw=1",
        skills: []
      
    }
  ];

  return (
    <Flex alignContent={"flex-start"} flexDir="column" w="100%" my="1.5rem">
      <HStack mb="1rem" className="fadeIn">
        <Text fontSize="14px" textTransform="uppercase">
          My Projects
        </Text>
        <Divider borderColor={theme === "dark" ? "white" : "black"} w="10px" />
      </HStack>
      <Flex
        spacing="1rem"
        overflow="auto"
        whiteSpace="nowrap"
        flexDir={{ base: "column", lg: "row" }}
      >
        {projects.map((p) => (
          <Box
          className="reveal"
          w={{ base: "220px", lg: "450px" }}
          bg={
            theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.05)"
          }
          p="1.2rem"
          mr={{ base: "0rem", lg: "1rem" }}
          mb={{ base: "1rem", lg: "0rem" }}
          textAlign={"left"}
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          borderRadius="5px"
          whiteSpace="normal"
          overflow="hidden"
        >
          <VStack alignItems={"start"}>
            <a href="https://www.discovai.com/" target="_blank"
              rel="noreferrer"> 
            <Image src={p.image} alt={p.title + "-image"} borderRadius="5px" mb="1rem"/>
            </a>
            <a href="https://www.discovai.com/" target="_blank"
              rel="noreferrer"> 
            <Heading fontSize={{ base: "18px", md: "20px" }} fontWeight="700">
              {p.title}
            </Heading>
            </a>
            <Divider w="30px" style={{ opacity: "0.5" }} mt="0.5rem" />
            <Text fontSize={{ base: "13px", lg: "14px" }}>{p.body}</Text>
          </VStack>
          <Flex mt="0.5rem" justifyContent="space-between" alignItems="center">
            <HStack>
              {p.skills.map((s) => (
                <Tag
                  size={{ base: "sm", lg: "md" }}
                  variant="outline"
                  style={{
                    "--badge-color": theme === "dark" ? "#EEA38B" : "#4BA2D3",
                  }}
                >
                  {s}
                </Tag>
              ))}
            </HStack>
          </Flex>
        </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default ProjectsSection;
