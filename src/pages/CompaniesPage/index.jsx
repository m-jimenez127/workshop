import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Companies from "../../components/Companies";

const CompaniesPage = () => {
  return (
    <Stack>
      <Header />
      <Companies />
    </Stack>
  );
};
CompaniesPage.propTypes = {};

export default CompaniesPage;
