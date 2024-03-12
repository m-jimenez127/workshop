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
import Swal from "sweetalert2";

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
    if (status) {
      if (!(data?.id > -1)) {
        navigate(`/project/${newData?.id}`);
        Swal.fire({
          title: "Project was added successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Project was updated successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      }
    }
  };

  const handleDeleteProject = () => {
    Swal.fire({
      title: "You are about to delete this Project",
      html: "Upon deleting this project, you can no longer associate this to any Company. Any existing requests for this project will be tagged as Invalid.<br/><br/>Are you sure you want to delete this Project?",
      confirmButtonText: "Yes, Delete",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: "Go Back",
      reverseButtons: true,
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        const requestData = mockApi("DELETE", `/projects/${id}`);
        const { status = false } = requestData;
        if (status) {
          navigate("/projects");
          Swal.fire({
            title: "Project was deleted successfully!",
            confirmButtonText: "Okay!",
            icon: "success",
          });
        }
      }
    });
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
