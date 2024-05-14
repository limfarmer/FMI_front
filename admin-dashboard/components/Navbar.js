import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link
            as={RouterLink}
            to="/admin/dashboard"
            color="white"
            fontSize="xl"
          >
            Admin Dashboard
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
