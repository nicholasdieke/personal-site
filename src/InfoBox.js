import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
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
}) {
  return (
    <Box
      height="300px"
      minW="400px"
      bg="rgba(255, 255, 255, 0.15)"
      p="1.2rem"
      textAlign={"left"}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      borderRadius="5px"
      whiteSpace="normal"
    >
      <VStack alignItems={"start"}>
        <Flex w="100%" justifyContent="space-between">
          <Heading fontSize="24px" fontWeight="700">
            {title}
          </Heading>
          <Text
            sx={{ opacity: 0.7 }}
            ml="0.5rem"
            whiteSpace="nowrap"
            fontSize="15px"
          >
            {address}
          </Text>
        </Flex>
        <Text fontSize="16px" color="primary">
          {insitution}
        </Text>
        <Divider w="30px" style={{ opacity: "0.5" }} />
        <Text fontSize="14px">{body}</Text>
      </VStack>

      <HStack>
        <Tag colorScheme="green">{button1title}</Tag>
        <Tag colorScheme="green">{button2title}</Tag>
      </HStack>
    </Box>
  );
}

export default InfoBox;
