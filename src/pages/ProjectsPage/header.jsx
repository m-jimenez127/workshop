import { Button, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack w="full" maxW="container.md" mx="auto">
      <Heading size="md" textAlign="center">
        Projects
      </Heading>
      <Spacer />
      <Button as={Link} to="/project/add" colorScheme="green">
        Add Project
      </Button>
    </HStack>
  );
};

Header.propTypes = {};

export default Header;
