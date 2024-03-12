import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";
import { validateProject } from "../../utils/validator";

const initialData = {
  name: "",
  alias: "",
  description: "",
};

const ProjectForm = ({ id = -1, onAdd, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const fetched = useRef(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const validate = validateProject(formData);
    if (validate.isValid) {
      onAdd(formData);
      setErrors({});
    } else {
      setErrors(validate.errors);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    if (id === "add") return;
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/projects/${id}`);
    const { status = false, data = null } = requestData;
    if (status) {
      fetched.current = id;
      setFormData(data);
    }
  }, [id]);

  return (
    <form onSubmit={handleAdd}>
      <Stack>
        <FormControl isRequired isInvalid={errors?.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.name}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors?.alias}>
          <FormLabel>Alias</FormLabel>
          <Input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.alias}</FormErrorMessage>
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
            {`${id === "add" ? `Add` : `Update`} Project`}
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

ProjectForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ProjectForm;
