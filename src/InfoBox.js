import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

function InfoBox({ title, institution, address, body, skills, imgSrc, dates }) {
  const theme = useSelector((state) => state.theme);
  // let mobile = window.innerWidth <= 400;

  const [mobile, setMobile] = useState(window.innerWidth <= 420);

  useEffect(() => {
    const updateWidth = () => {
      setMobile(window.innerWidth <= 420);
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Box
      className="reveal"
      // minH="300px"
      minW={{ base: "220px", lg: "450px" }}
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
        <Heading fontSize={{ base: "18px", md: "20px" }} fontWeight="700">
          {title}
        </Heading>
        <VStack alignItems="start" w="100%">
          <Flex w="100%" flexDir={{ base: "column", sm: "row" }}>
            <Flex alignItems="center">
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ opacity: 0.5, borderColor: "#4ba2d3" }}
                size={mobile ? "xs" : "2xs"}
              />
              <Text
                color={theme === "dark" ? "primary" : "secondary"}
                ml="0.5rem"
                fontSize={{ base: "14px", sm: "16px" }}
                whiteSpace="nowrap"
              >
                {institution}
              </Text>
            </Flex>
            <Flex alignItems="center" mt={mobile ? "0.5rem" : "0px"}>
              {mobile && (
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ opacity: 0.5, borderColor: "#4ba2d3" }}
                  size={mobile ? "xs" : "2xs"}
                />
              )}
              <Text
                sx={{ opacity: 0.5 }}
                fontSize={{ base: "14px", sm: "16px" }}
                ml="7px"
                whiteSpace="nowrap"
              >
                {address}
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" w="100%">
            <FontAwesomeIcon
              style={{ opacity: 0.5 }}
              icon={faCalendar}
              size={mobile ? "xs" : "2xs"}
            />
            <Text
              fontSize={{ base: "14px", sm: "15px" }}
              ml="0.5rem"
              sx={{ opacity: 0.5 }}
            >
              {dates}
            </Text>
          </Flex>
        </VStack>
        <Divider w="30px" style={{ opacity: "0.5" }} mt="0.5rem" />
        <Text fontSize={{ base: "13px", lg: "14px" }}>{body}</Text>
      </VStack>
      <Flex mt="0.5rem" justifyContent="space-between" alignItems="center">
        <HStack>
          {skills.map((s) => (
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
        <Box>
          <Image
            opacity={theme === "dark" ? "0.5" : "0.3"}
            maxH="40px"
            maxW={{ base: "70px", md: "100px" }}
            src={"./" + imgSrc}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default InfoBox;
