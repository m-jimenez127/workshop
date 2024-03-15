import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { useRequest } from "../../contexts/_useContexts";
import PropTypes from "prop-types";
import SelectProject from "../../inputs/SelectProject";

const Project = ({ errors = {}, handleInputChange = () => {} }) => {
  const { isEditing, formData } = useRequest();

  return (
    <Stack>
      <FormControl
        isRequired
        isInvalid={errors?.project}
        isReadOnly={!isEditing}
      >
        <FormLabel>Project</FormLabel>
        <SelectProject
          name="project"
          value={formData.project}
          onChange={handleInputChange}
          isInvalid={errors?.project?.length > 0}
          isReadOnly={!isEditing}
        />
        <FormErrorMessage>{errors?.project}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
};

Project.propTypes = {
  errors: PropTypes.object,
  handleInputChange: PropTypes.func,
};

export default Project;
