import { Button, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      w="full"
      mx="auto"
      maxW="container.md"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
    >
      <Heading size="md">Resources</Heading>
      <Spacer />
      <Button
        as={Link}
        to="/resource/add"
        colorScheme="green"
        data-test-id="add-resource"
        w={["full", "full", "fit-content"]}
      >
        Add Resource
      </Button>
    </HStack>
  );
};

Header.propTypes = {};

export default Header;
