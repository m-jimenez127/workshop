import { Center, Stack, Text, Flex } from "@chakra-ui/react";
import Resources from "../Resources";
import Companies from "../Companies";
import Projects from "../Projects";

const Home = () => {
  return (
    <Stack h="full" w="full" spacing={4}>
      <Center>
        <Text>Hello World!</Text>
      </Center>
      <Companies />
      <Flex gap={4} w="full" maxW="container.md" mx="auto">
        <Resources />
        <Projects />
      </Flex>
    </Stack>
  );
};
Home.propTypes = {};

export default Home;
