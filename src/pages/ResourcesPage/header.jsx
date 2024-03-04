import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Box w="container.md" mx="auto" mb={4}>
        <Heading>Resources</Heading>
      </Box>
    </div>
  );
};

Header.propTypes = {};

export default Header;
