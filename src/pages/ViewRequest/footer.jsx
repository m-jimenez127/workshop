import { Box, Button, Divider, HStack, Spacer } from "@chakra-ui/react";
import { useRequest } from "../../contexts/_useContexts";

const Footer = () => {
  const { id, handleDeleteRequest } = useRequest();

  if (id === "add") return "";
  return (
    <>
      <Box w="full" my={8}>
        <Divider borderColor="gray.500" />
      </Box>
      <HStack>
        <Spacer />
        <Button colorScheme="red" onClick={handleDeleteRequest}>
          Delete Request
        </Button>
      </HStack>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
