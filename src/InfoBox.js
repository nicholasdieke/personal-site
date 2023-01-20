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
import "./App.css";

function InfoBox({
  title,
  insitution,
  address,
  body,
  button1title,
  button2title,
  imgSrc,
  theme,
}) {
  let mobile = window.innerWidth < 992;
  console.log(theme.theme);
  return (
    <Box
      className={mobile ? "revealMobile" : "reveal"}
      height="300px"
      minW={{ base: "200px", lg: "400px" }}
      bg={
        theme.theme == "dark"
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
        <Flex
          w="100%"
          alignItems="center"
          fontSize={{ base: "14px", lg: "15px" }}
        >
          <Text color="primary">{insitution}</Text>
          <Text sx={{ opacity: 0.5 }} ml="7px" whiteSpace="nowrap">
            {address}
          </Text>
        </Flex>

        <Divider w="30px" style={{ opacity: "0.5" }} />
        <Text fontSize={{ base: "13px", lg: "14px" }}>{body}</Text>
      </VStack>
      <Flex justifyContent="space-between">
        <HStack>
          <Tag colorScheme="green">{button1title}</Tag>
          <Tag colorScheme="green">{button2title}</Tag>
        </HStack>
        <Box>
          <Image
            opacity={theme.theme == "dark" ? "0.5" : "0.3"}
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
