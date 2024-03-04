import { Box, ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import theme from "./theme";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Box minW={36}>
          <Stack>
            <Link to="/">Home</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/requests">Requests</Link>
          </Stack>
        </Box>
        <Box w="full">
          <Outlet />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
