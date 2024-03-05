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
  name: "",
  address: "",
  contactPerson: "",
  email: "",
  contactNumber: "",
};

const CompaniesForm = ({ onAdd, onCancel }) => {
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
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Person</FormLabel>
          <Input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
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

CompaniesForm.propTypes = { onAdd: PropTypes.func, onCancel: PropTypes.func };

export default CompaniesForm;
