import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
      >
        500
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Internal Server Error
      </Text>
      <Text color={"gray.500"} mb={6}>
        Something went wrong on our end. Please try again later.
      </Text>
    </Box>
  );
};

export default ErrorPage;
