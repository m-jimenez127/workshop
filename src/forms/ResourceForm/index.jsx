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
import { useState } from "react";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  type: "",
};

const ResourceForm = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

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
            Add Resource
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

ResourceForm.propTypes = { onAdd: PropTypes.func, onCancel: PropTypes.func };

export default ResourceForm;
