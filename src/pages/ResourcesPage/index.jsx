import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Resources from "../../components/Resources";

const ResourcesPage = () => {
  return (
    <Stack>
      <Header />
      <Resources />
    </Stack>
  );
};
ResourcesPage.propTypes = {};

export default ResourcesPage;
