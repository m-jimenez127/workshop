import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import ProjectForm from "../../forms/ProjectForm";
import mockApi from "../../utils/mockApi";
import { useNavigate, useParams } from "react-router-dom";

const ViewProject = () => {
  const navigate = useNavigate();
  const { id = "add" } = useParams();

  const handleAddProject = (data) => {
    let method = "POST";
    let endpoint = `/projects`;
    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/projects/${data?.id}`;
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = null } = requestData;
    if (status && !(data?.id > -1)) {
      navigate(`/project/${newData?.id}`);
    }
  };

  const handleDeleteProject = () => {
    const requestData = mockApi("DELETE", `/projects/${id}`);
    const { status = false } = requestData;
    if (status) {
      navigate("/projects");
    }
  };

  const handleCancel = () => {
    navigate("/projects");
  };

  return (
    <Stack w="container.md" mx="auto">
      <Box w="container.md" mx="auto">
        <Card w="full">
          <CardBody>
            <ProjectForm
              id={id}
              onAdd={handleAddProject}
              onCancel={handleCancel}
            />
          </CardBody>
        </Card>
      </Box>
      <Box w="full" my={8}>
        <Divider borderColor="gray.500" />
      </Box>
      <HStack>
        <Spacer />
        <Button colorScheme="red" onClick={handleDeleteProject}>
          Delete Resource
        </Button>
      </HStack>
    </Stack>
  );
};
ViewProject.propTypes = {};

export default ViewProject;
