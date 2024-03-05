import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Header from "./header";
import Companies from "../../components/Companies";
import { useState } from "react";
import initialData from "./companies.json";
import CompaniesForm from "../../forms/CompaniesForm";

const CompaniesPage = () => {
  const [isAdding, setAdding] = useState(false);
  const [companiesData, setCompaniesData] = useState(initialData);

  const handleAddCompany = (data) => {
    setCompaniesData((prevData) => [...prevData, data]);
    setAdding(false);
  };

  return (
    <Stack>
      <Header isAdding={isAdding} toggleAdd={() => setAdding(!isAdding)} />
      {!isAdding && <Companies data={companiesData} />}
      {isAdding && (
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CardBody>
              <CompaniesForm
                onAdd={handleAddCompany}
                onCancel={() => setAdding(false)}
              />
            </CardBody>
          </Card>
        </Box>
      )}
    </Stack>
  );
};
CompaniesPage.propTypes = {};

export default CompaniesPage;
