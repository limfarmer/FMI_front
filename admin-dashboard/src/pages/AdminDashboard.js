import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin")
      .then((response) => {
        console.log("API response:", response.data);
        setAdmins(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the admin data!", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading as="h1">Admin Dashboard</Heading>
        <Box>
          {admins.map((admin) => (
            <Box key={admin.adminId} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{admin.name}</Heading>
              <Text mt={4}>Email: {admin.email}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
