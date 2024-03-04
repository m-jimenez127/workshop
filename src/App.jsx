import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import theme from "./theme";
import SideNav from "./components/SideNav";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <SideNav />
        <Box flexGrow={1}>
          <Outlet />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
