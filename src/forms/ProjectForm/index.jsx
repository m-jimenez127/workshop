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
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";

const initialData = {
  name: "",
  alias: "",
  description: "",
};

const ProjectForm = ({ id = -1, onAdd, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const fetched = useRef(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(formData);
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
            {`${id === "add" ? `Add` : `Update`} Project`}
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

ProjectForm.propTypes = {
  id: PropTypes.number,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ProjectForm;
