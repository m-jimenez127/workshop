import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Center>
      <Stack>
        <Heading>Oops!</Heading>
        <Text>Something went wrong.</Text>
        <Link to="/">Go Back Home</Link>
      </Stack>
    </Center>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
