import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Header from "./header";
import Companies from "../../components/Companies";
import { useEffect, useRef, useState } from "react";
import CompaniesForm from "../../forms/CompaniesForm";
import mockApi from "../../utils/mockApi";

const CompaniesPage = () => {
  const [isAdding, setAdding] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [companiesData, setCompaniesData] = useState([]);
  const fetched = useRef();

  const handleEditCompany = (id) => {
    setAdding(true);
    setEditId(id);
  };

  const handleAddCompany = (data) => {
    let method = "POST";
    let endpoint = `/companies`;
    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/companies/${data?.id}`;
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = null } = requestData;
    if (status) {
      const newCompaniesData = [...companiesData];
      if (data?.id > -1) {
        const index = newCompaniesData.findIndex(
          (item) => item.id === newData.id
        );
        newCompaniesData.splice(index, 1, newData);
      } else {
        newCompaniesData.push(newData);
      }
      setCompaniesData(newCompaniesData);
      setAdding(false);
      setEditId(-1);
    }
  };

  const handleDeleteCompany = (id) => {
    const requestData = mockApi("DELETE", `/companies/${id}`);
    const { status = false } = requestData;
    if (status) {
      const newData = [...companiesData];
      const index = newData.findIndex((item) => item.id === id);
      newData.splice(index, 1);
      setCompaniesData(newData);
    }
  };

  const handleCancel = () => {
    setAdding(false);
    setEditId(-1);
  };

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/companies");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setCompaniesData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack>
      <Header isAdding={isAdding} toggleAdd={() => setAdding(!isAdding)} />
      {isAdding === false && (
        <Companies
          data={companiesData}
          onDelete={handleDeleteCompany}
          onEdit={handleEditCompany}
        />
      )}
      {isAdding !== false && (
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CardBody>
              <CompaniesForm
                id={editId}
                onAdd={handleAddCompany}
                onCancel={handleCancel}
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
