import { Button, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack w="full" maxW="container.md" mx="auto">
      <Heading size="md" textAlign="center">
        Companies
      </Heading>
      <Spacer />
      <Button as={Link} to="/company/add" colorScheme="green">
        Add Company
      </Button>
    </HStack>
  );
};

Header.propTypes = {};

export default Header;
