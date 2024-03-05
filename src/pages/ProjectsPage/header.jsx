import { Button, HStack, Heading, Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Header = ({ isAdding = false, toggleAdd }) => {
  return (
    <HStack w="container.md" mx="auto">
      <Heading size="md" textAlign="center">
        Projects
      </Heading>
      <Spacer />
      {!isAdding && (
        <Button colorScheme="green" onClick={toggleAdd}>
          Add Project
        </Button>
      )}
    </HStack>
  );
};

Header.propTypes = { isAdding: PropTypes.bool, toggleAdd: PropTypes.func };

export default Header;
