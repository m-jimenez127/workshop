import { Box, Button, Divider, HStack, Spacer } from "@chakra-ui/react";
import { useCompany } from "../../contexts/_useContexts";

const Footer = () => {
  const { id, handleDeleteCompany } = useCompany();

  return (
    <>
      <Box w="full" my={8}>
        <Divider borderColor="gray.500" />
      </Box>
      <HStack>
        <Spacer />
        {id !== "add" && (
          <Button colorScheme="red" onClick={handleDeleteCompany}>
            Delete Company
          </Button>
        )}
      </HStack>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
