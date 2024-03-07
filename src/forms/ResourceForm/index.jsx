import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  type: "",
};

const ResourceForm = ({ id = -1, onAdd, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const fetched = useRef(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData(initialData);
  };

  const handleCancel = () => {
    setFormData(initialData);
    onCancel();
  };

  useEffect(() => {
    if (id === -1) return;
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/resources/${id}`);
    const { status = false, data = null } = requestData;
    if (status) {
      fetched.current = id;
      setFormData(data);
    }
  }, [id]);

  return (
    <form onSubmit={handleAdd}>
      <Stack>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Middle Name</FormLabel>
          <Input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <Input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </FormControl>
        <HStack spacing={4}>
          <Spacer />
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="green">
            {`${id === -1 ? `Add` : `Update`} Resource`}
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

ResourceForm.propTypes = {
  id: PropTypes.number,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ResourceForm;
