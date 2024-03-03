import { Box, ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import theme from "./theme";

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
        <Box flexGrow={1}>
          <Outlet />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
