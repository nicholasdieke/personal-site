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
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import AboutMeSection from "./AboutMeSection";
import "./App.css";
import theme_animation from "./dark_mode.json";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import SkillsSection from "./SkillsSection";

function App() {
  useEffect(() => {
    // Add an event listener to listen to scroll events
    window.addEventListener("scroll", reveal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  let mobile = window.innerWidth <= 420;
  const lottieRef = useRef();
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === "light") {
      lottieRef.current.playSegments([110, 60], true);
      dispatch({ type: "TOGGLE_THEME" });
    } else {
      lottieRef.current.playSegments([60, 110], true);
      dispatch({ type: "TOGGLE_THEME" });
    }
  };

  return (
    <Box className="App">
      <Helmet>
        <title>Nicholas Dieke</title>
        <meta
          name="description"
          content="Hi, I'm Nicholas Dieke. Software Developer enthusiastic about technical challenges, playing a role in a lively team, and creating impactful products."
        />
        ;
      </Helmet>
      <Box
        className={theme}
        px={{ base: "2rem", lg: "7.5rem" }}
        py={{ base: "1rem", lg: "2rem" }}
      >
        <Flex flexDir="column" w="100%">
          <Flex w="100%" justifyContent="flex-end">
            <Lottie
              animationData={theme_animation}
              style={{
                height: mobile ? "70px" : "90px",
                width: mobile ? "70px" : "90px",
                cursor: "pointer",
                marginBottom: mobile ? "-70px" : "-90px",
                position: "relative",
                right: "0px",
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
            h={{ base: "100%", lg: "70vh" }}
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
                Nicholas Dieke
              </Heading>
              <Text
                color={theme === "dark" ? "primary" : "secondary"}
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
                variant={theme === "dark" ? "primary" : "secondary"}
                fontWeight="700"
                fontSize={{ base: "12px", lg: "14px" }}
                onClick={() =>
                  (window.location =
                    "mailto:nicholasdieke@icloud.com?subject=Hello!")
                }
                rightIcon={<ArrowForwardIcon />}
                className={"fadeInDirect" + theme}
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
                borderColor="primary"
                overflow={"hidden"}
              >
                <Image
                  bg={"secondary"}
                  height={{ base: "200px", lg: "400px" }}
                  src="/nick_transparent.png"
                  alt="Nicholas Dieke"
                />
              </Box>
            </VStack>
          </Flex>
          <Flex flexDir="column" w="100%">
            <AboutMeSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <Footer />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal, .revealMobile, .fadeIn");
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
