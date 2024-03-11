import { Button, Center, Stack, Text } from "@chakra-ui/react";
import mockApi from "../../utils/mockApi";

const Home = () => {
  return (
    <Stack h="full" w="full" spacing={4}>
      <Center>
        <Text>Hello World!</Text>
      </Center>
      <Center>
        <Button onClick={() => mockApi("POST", "/reset-data")}>
          Reset Data
        </Button>
      </Center>
    </Stack>
  );
};
Home.propTypes = {};

export default Home;
