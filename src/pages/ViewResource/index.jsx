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
import { useNavigate, useParams } from "react-router-dom";
import ResourceForm from "../../forms/ResourceForm";
import mockApi from "../../utils/mockApi";
import Swal from "sweetalert2";

const ViewResource = () => {
  const navigate = useNavigate();
  const { id = "add" } = useParams();

  const handleAddResource = (data) => {
    let method = "POST";
    let endpoint = `/resources`;
    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/resources/${data?.id}`;
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = {} } = requestData;
    if (status) {
      if (!(data?.id > -1)) {
        navigate(`/resource/${newData?.id}`);
        Swal.fire({
          title: "Resource was added successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Resource was updated successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      }
    }
  };

  const handleDeleteResource = () => {
    mockApi("DELETE", `/resources/${id}`);
    Swal.fire({
      title: "Resource was deleted successfully!",
      confirmButtonText: "Okay!",
      icon: "success",
    });
    navigate("/resources");
  };

  const handleCancel = () => {
    navigate("/resources");
  };

  return (
    <Stack w="container.md" mx="auto">
      <Card>
        <CardBody>
          <ResourceForm
            id={id}
            onAdd={handleAddResource}
            onCancel={handleCancel}
          />
        </CardBody>
      </Card>
      <Box w="full" my={8}>
        <Divider borderColor="gray.500" />
      </Box>
      <HStack>
        <Spacer />
        <Button colorScheme="red" onClick={handleDeleteResource}>
          Delete Resource
        </Button>
      </HStack>
    </Stack>
  );
};

ViewResource.propTypes = {};

export default ViewResource;
