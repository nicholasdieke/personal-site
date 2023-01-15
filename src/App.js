import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function App() {
  return (
    <Box className="App">
      <Box className="App-header" px="8rem" py="2rem">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <VStack w="100%">
          <Flex alignItems={"center"} my="2rem" h="85vh" w="100%">
            <VStack w="50%" alignItems={"start"}>
              <Text pb={"0.5rem"} fontSize="30px">
                Hi 👋, I'm
              </Text>
              <Heading fontSize={"70px"} textAlign={"start"} pb={"0.5rem"}>
                Nicholas Dieke.
              </Heading>
              <Text color={"primary"} fontWeight="700" pb={"0.5rem"}>
                Software Developer
              </Text>
              <Text textAlign={"start"} fontSize={"16px"} pb={"1rem"}>
                Enthusiastic about technical challenges, playing a role in a
                lively team, and creating impactful products.
              </Text>
              <Button
                variant={"primary"}
                onClick={() =>
                  (window.location =
                    "mailto:nicholasdieke@icloud.com?subject=Hello!")
                }
                rightIcon={<ArrowForwardIcon />}
              >
                Contact Me
              </Button>
              <Text></Text>
            </VStack>
            <VStack w="50%">
              <Box
                borderRadius="5rem"
                borderWidth={"15px"}
                borderColor="secondary"
                overflow={"hidden"}
                borderTopWidth="0px"
                borderRightWidth="0px"
              >
                <Image
                  bg={"primary"}
                  height="400px"
                  src="/nick_transparent.png"
                  alt="Nicholas Dieke"
                  aspe
                />
              </Box>
            </VStack>
          </Flex>
          <VStack w="100%">
            <ExperienceSection />
            <EducationSection />
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default App;
