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
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function InfoBox({
  title,
  insitution,
  address,
  body,
  skills,
  imgSrc,
  theme,
  dates,
}) {
  let mobile = window.innerWidth < 992;
  console.log(theme.theme);
  return (
    <Box
      // className={mobile ? "revealMobile" : "reveal"}
      className="reveal"
      minH="300px"
      minW={{ base: "220px", lg: "450px" }}
      bg={
        theme.theme === "dark"
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(0, 0, 0, 0.05)"
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
        <Heading fontSize={{ base: "18px", lg: "20px" }} fontWeight="700">
          {title}
        </Heading>
        <Flex w="100%" alignItems="center">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ opacity: 0.5, borderColor: "#4ba2d3" }}
            size="2xs"
          />
          <Text
            color="secondary"
            ml="0.5rem"
            fontSize={{ base: "14px", lg: "16px" }}
          >
            {insitution}
          </Text>
          <Text
            sx={{ opacity: 0.5 }}
            fontSize={{ base: "14px", lg: "16px" }}
            ml="7px"
            whiteSpace="nowrap"
          >
            {address}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <FontAwesomeIcon
            style={{ opacity: 0.5 }}
            icon={faCalendar}
            size="2xs"
          />
          <Text
            fontSize={{ base: "13px", lg: "14px" }}
            ml="0.5rem"
            sx={{ opacity: 0.5 }}
          >
            {dates}
          </Text>
        </Flex>
        <Divider w="30px" style={{ opacity: "0.5" }} mt="0.5rem" />
        <Text fontSize={{ base: "13px", lg: "14px" }}>{body}</Text>
      </VStack>
      <Flex mt="0.5rem" justifyContent="space-between">
        <HStack>
          {skills.map((s) => (
            <Tag size={{ base: "sm", lg: "md" }} bg="secondary">
              {s}
            </Tag>
          ))}
        </HStack>
        <Box>
          <Image
            opacity={theme.theme === "dark" ? "0.5" : "0.3"}
            maxH="40px"
            maxW="100px"
            src={"./" + imgSrc}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default InfoBox;
