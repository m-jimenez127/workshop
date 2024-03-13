import { Box, Card, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CompanyProvider from "../../contexts/Company";
import Footer from "./footer";
import CompanyForm from "./form";

const ViewCompany = () => {
  const { id = "add" } = useParams();

  return (
    <CompanyProvider id={id}>
      <Stack w="container.md" mx="auto">
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CompanyForm />
          </Card>
        </Box>
        <Footer />
      </Stack>
    </CompanyProvider>
  );
};
ViewCompany.propTypes = {};

export default ViewCompany;
