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
import CompaniesForm from "../../forms/CompaniesForm";
import mockApi from "../../utils/mockApi";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewCompany = () => {
  const navigate = useNavigate();
  const { id = "add" } = useParams();

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
      if (!(data?.id > -1)) {
        navigate(`/company/${newData?.id}`);
        Swal.fire({
          title: "Company was added successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Company was updated successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      }
    }
  };

  const handleDeleteCompany = () => {
    const requestData = mockApi("DELETE", `/companies/${id}`);
    const { status = false } = requestData;
    if (status) {
      navigate("/companies");
      Swal.fire({
        title: "Company was deleted successfully!",
        confirmButtonText: "Okay!",
        icon: "success",
      });
    }
  };

  const handleCancel = () => {
    navigate("/companies");
  };

  return (
    <Stack w="container.md" mx="auto">
      <Box w="container.md" mx="auto">
        <Card w="full">
          <CardBody>
            <CompaniesForm
              id={id}
              onAdd={handleAddCompany}
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
        <Button colorScheme="red" onClick={handleDeleteCompany}>
          Delete Resource
        </Button>
      </HStack>
    </Stack>
  );
};
ViewCompany.propTypes = {};

export default ViewCompany;
