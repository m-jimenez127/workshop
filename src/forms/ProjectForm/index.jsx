import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

const initialData = {
  name: "",
  alias: "",
  description: "",
};

const ProjectForm = ({ onAdd, onCancel }) => {
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
          <FormLabel>Alias</FormLabel>
          <Input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            type="text"
            name="description"
            value={formData.description}
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

ProjectForm.propTypes = { onAdd: PropTypes.func, onCancel: PropTypes.func };

export default ProjectForm;
