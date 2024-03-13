import { Button, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack w="container.md" mx="auto">
      <Heading size="md" textAlign="center">
        Resources
      </Heading>
      <Spacer />
      <Button
        as={Link}
        to="/resource/add"
        colorScheme="green"
        data-test-id="add-resource"
      >
        Add Resource
      </Button>
    </HStack>
  );
};

Header.propTypes = {};

export default Header;
