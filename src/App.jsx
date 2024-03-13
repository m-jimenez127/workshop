import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import theme from "./theme";
import SideNav from "./components/SideNav";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        w="full"
        templateAreas={{
          base: ` "sidenav"
                  "content"`,
          md: `"sidenav content"`,
        }}
        gridTemplateColumns={{ base: "1fr", md: "200px 1fr" }}
      >
        <GridItem area="sidenav">
          <SideNav />
        </GridItem>
        <GridItem area="content">
          <Outlet />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
