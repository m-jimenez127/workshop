import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useRequest } from "../../contexts/_useContexts";
import PropTypes from "prop-types";

const Details = ({ errors = {}, handleInputChange = () => {} }) => {
  const { isEditing, formData } = useRequest();
  return (
    <Stack>
      <FormControl
        isRequired
        isInvalid={errors?.subject}
        isReadOnly={!isEditing}
      >
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.subject}</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={errors?.description}
        isReadOnly={!isEditing}
      >
        <FormLabel>Description</FormLabel>
        <Textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.description}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
};

Details.propTypes = {
  errors: PropTypes.object,
  handleInputChange: PropTypes.func,
};

export default Details;
