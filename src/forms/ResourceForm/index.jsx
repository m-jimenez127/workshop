import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";
import PropTypes from "prop-types";
import { validateResource } from "../../utils/validator";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  type: "",
};

const ResourceForm = ({ id = "add", onAdd, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const fetched = useRef("add");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const validate = validateResource(formData);
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
    const requestData = mockApi("GET", `/resources/${id}`);
    const { status = false, data = null } = requestData;
    if (status) {
      fetched.current = id;
      setFormData(data);
    }
  }, [id]);

  return (
    <form data-test-id="resource-form" onSubmit={handleAdd}>
      <Stack>
        <FormControl isRequired isInvalid={errors?.firstName}>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.firstName}</FormErrorMessage>
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
        <FormControl isRequired isInvalid={errors?.lastName}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.lastName}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={errors?.type}>
          <FormLabel>Type</FormLabel>
          <Input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.type}</FormErrorMessage>
        </FormControl>
        <HStack spacing={4}>
          <Spacer />
          <Button
            data-test-id="resource-form-cancel"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            data-test-id="resource-form-submit"
            type="submit"
            colorScheme="green"
          >
            {`${id === "add" ? `Add` : `Update`} Resource`}
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

ResourceForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ResourceForm;
