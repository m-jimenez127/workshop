import { Box } from "@chakra-ui/react";
import Resources from "../../components/Resources";
import Header from "./header";

const ResourcesPage = () => {
  return (
    <Box>
      <Header />
      <Resources />
    </Box>
  );
};

ResourcesPage.propTypes = {};

export default ResourcesPage;
