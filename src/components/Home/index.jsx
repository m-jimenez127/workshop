import { Center, Stack, Text } from "@chakra-ui/react";
import Resources from "../Resources";

const Home = () => {
  return (
    <Stack h="full" w="full">
      <Center>
        <Text>Hello World!</Text>
      </Center>
      <Resources />
    </Stack>
  );
};
Home.propTypes = {};

export default Home;
