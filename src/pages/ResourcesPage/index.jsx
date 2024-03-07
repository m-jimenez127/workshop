import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Header from "./header";
import Resources from "../../components/Resources";
import { useEffect, useRef, useState } from "react";
import ResourceForm from "../../forms/ResourceForm";
import mockApi from "../../utils/mockApi";

const ResourcesPage = () => {
  const [isAdding, setAdding] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [resourcesData, setResourcesData] = useState([]);
  const fetched = useRef();

  const handleEditResource = (id) => {
    setAdding(true);
    setEditId(id);
  };

  const handleAddResource = (data) => {
    let method = "POST";
    let endpoint = `/resources`;
    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/resources/${data?.id}`;
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = null } = requestData;
    if (status) {
      const newResourcesData = [...resourcesData];
      if (data?.id > -1) {
        const index = newResourcesData.findIndex(
          (item) => item.id === newData.id
        );
        newResourcesData.splice(index, 1, newData);
      } else {
        newResourcesData.push(newData);
      }
      setResourcesData(newResourcesData);
      setAdding(false);
      setEditId(-1);
    }
  };

  const handleDeleteResource = (id) => {
    const requestData = mockApi("DELETE", `/resources/${id}`);
    const { status = false } = requestData;
    if (status) {
      const newData = [...resourcesData];
      const index = newData.findIndex((item) => item.id === id);
      newData.splice(index, 1);
      setResourcesData(newData);
    }
  };

  const handleCancel = () => {
    setAdding(false);
    setEditId(-1);
  };

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/resources");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setResourcesData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack>
      <Header isAdding={isAdding} toggleAdd={() => setAdding(!isAdding)} />
      {isAdding === false && (
        <Resources
          data={resourcesData}
          onDelete={handleDeleteResource}
          onEdit={handleEditResource}
        />
      )}
      {isAdding !== false && (
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CardBody>
              <ResourceForm
                id={editId}
                onAdd={handleAddResource}
                onCancel={handleCancel}
              />
            </CardBody>
          </Card>
        </Box>
      )}
    </Stack>
  );
};
ResourcesPage.propTypes = {};

export default ResourcesPage;
