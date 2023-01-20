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
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import "./App.css";
import theme_animation from "./dark_mode.json";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";

function App() {
  window.addEventListener("scroll", reveal);
  let mobile = window.innerWidth <= 425;
  const [theme, setTheme] = useState("dark");
  const lottieRef = useRef();
  const toggleTheme = () => {
    if (theme === "light") {
      lottieRef.current.playSegments([110, 60], true);
      setTheme("dark");
    } else {
      lottieRef.current.playSegments([60, 110], true);
      setTheme("light");
    }
  };

  return (
    <Box className="App">
      <Box
        className={theme}
        px={{ base: "2rem", lg: "8rem" }}
        py={{ base: "1rem", lg: "2rem" }}
      >
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Flex flexDir="column" w="100%">
          <Flex justifyContent="flex-end" alignItems="center">
            {/* <Switch size="lg" onChange={toggleTheme} />{" "}
            <Text fontSize="14px">Dark Mode</Text> */}
            <Lottie
              animationData={theme_animation}
              style={{
                height: mobile ? "70px" : "90px",
                cursor: "pointer",
                marginBottom: mobile ? "-70px" : "-90px",
                marginRight: "-20px",
              }}
              onClick={toggleTheme}
              lottieRef={lottieRef}
              loop={false}
              autoplay={false}
            />
          </Flex>
          <Flex
            alignItems={"center"}
            my="3rem"
            h={{ base: "100%", lg: "80vh" }}
            w="100%"
            flexDir={{ base: "column", md: "row" }}
          >
            <VStack
              w={{ base: "100%", lg: "50%" }}
              mb={{ base: "1rem", lg: "0rem" }}
              alignItems={"start"}
            >
              <Text pb={"0.5rem"} fontSize="30px" className="moveright1">
                Hi 👋, I'm
              </Text>
              <Heading
                fontSize={{ base: "40px", lg: "70px" }}
                textAlign={"start"}
                pb={"0.5rem"}
                fontWeight="700"
                className="moveright2"
              >
                Nicholas Dieke.
              </Heading>
              <Text
                color={"primary"}
                fontWeight="700"
                pb={"0.5rem"}
                fontSize={{ base: "18px", lg: "22px" }}
              >
                Software Developer
              </Text>
              <Text
                textAlign={"start"}
                fontSize={{ base: "14px", lg: "16px" }}
                pb={"1rem"}
              >
                Enthusiastic about technical challenges, playing a role in a
                lively team, and creating impactful products.
              </Text>
              <Button
                variant={"primary"}
                fontWeight="700"
                fontSize={{ base: "12px", lg: "14px" }}
                onClick={() =>
                  (window.location =
                    "mailto:nicholasdieke@icloud.com?subject=Hello!")
                }
                rightIcon={<ArrowForwardIcon />}
                className="fadeInDirect"
                textTransform="uppercase"
              >
                Contact Me
              </Button>
              <Text></Text>
            </VStack>
            <VStack w={{ base: "100%", lg: "50%" }} className="fadeUp">
              <Box
                borderRadius={{ base: "3rem", lg: "5rem" }}
                borderBottomWidth={{ base: "7px", lg: "15px" }}
                borderLeftWidth={{ base: "7px", lg: "15px" }}
                borderColor="secondary"
                overflow={"hidden"}
              >
                <Image
                  bg={"primary"}
                  height={{ base: "200px", lg: "400px" }}
                  src="/nick_transparent.png"
                  alt="Nicholas Dieke"
                />
              </Box>
            </VStack>
          </Flex>
          <Flex flexDir="column" w="100%">
            <ExperienceSection theme={theme} />
            <EducationSection theme={theme} />
            <Footer />
          </Flex>
        </Flex>
      </Box>
    </Box>
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

export default App;
