import { Box, Container, Stack, Link as ChakraLink } from "@chakra-ui/react";
import navRoutes from "../../navRoutes";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container w={36}>
      <Stack>
        {navRoutes.map((nav, navIndex) => (
          <Box key={`navigation-${navIndex}`}>
            <ChakraLink
              as={Link}
              to={nav.to}
              _hover={{ color: "green.700" }}
              color={pathname == nav.to ? "green.700" : "gray.500"}
              fontWeight={pathname == nav.to ? "medium" : "normal"}
            >
              {nav.label}
            </ChakraLink>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

SideNav.propTypes = {};

export default SideNav;
