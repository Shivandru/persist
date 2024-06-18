import { useNavigate, useRouteError } from "react-router-dom";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
type RouterErrorType = {
  data?: string;
  message?: string;
};
const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as RouterErrorType;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.100"
      padding={4}
    >
      <VStack spacing={4} bg="white" p={8} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" color="red.500">
          Something went wrong...
        </Heading>
        <Text fontSize="lg" color="gray.700">
          {error?.data || error?.message || "An unknown error occurred."}
        </Text>
        <Button onClick={() => navigate(-1)} bg="#C53030" variant="solid">
          &larr; Go back
        </Button>
      </VStack>
    </Box>
  );
};

export default Error;
