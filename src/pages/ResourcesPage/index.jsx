import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Header from "./header";
import Resources from "../../components/Resources";
import { useState } from "react";
import ResourceForm from "../../forms/ResourceForm";
import initialData from "./resources.json";

const ResourcesPage = () => {
  const [isAdding, setAdding] = useState(false);
  const [resourcesData, setResourcesData] = useState(initialData);

  const handleAddResource = (data) => {
    setResourcesData((prevData) => [...prevData, data]);
    setAdding(false);
  };

  const handleDeleteResource = (index) => {
    const newData = [...resourcesData];
    newData.splice(index, 1);
    setResourcesData(newData);
    setAdding(false);
  };

  return (
    <Stack>
      <Header isAdding={isAdding} toggleAdd={() => setAdding(!isAdding)} />
      {!isAdding && (
        <Resources data={resourcesData} onDelete={handleDeleteResource} />
      )}
      {isAdding && (
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CardBody>
              <ResourceForm
                onAdd={handleAddResource}
                onCancel={() => setAdding(false)}
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
