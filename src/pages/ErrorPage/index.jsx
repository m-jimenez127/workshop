import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box w="full" h="full">
      <Center w="full" h="full">
        <Stack>
          <Heading>Oops!</Heading>
          <Text>Sorry an unexpected error has occured.</Text>
          <Link to="/">Go back Home</Link>
        </Stack>
      </Center>
    </Box>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
