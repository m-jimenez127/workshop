import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useCompany } from "../../contexts/_useContexts";
import PropTypes from "prop-types";

const Details = ({ errors = {}, handleInputChange = () => {} }) => {
  const { isEditing, formData } = useCompany();
  return (
    <Stack>
      <FormControl isRequired isInvalid={errors?.name} isReadOnly={!isEditing}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.name}</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={errors?.address}
        isReadOnly={!isEditing}
      >
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.address}</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={errors?.contactPerson}
        isReadOnly={!isEditing}
      >
        <FormLabel>Contact Person</FormLabel>
        <Input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.contactPerson}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={errors?.email} isReadOnly={!isEditing}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={errors?.contactNumber}
        isReadOnly={!isEditing}
      >
        <FormLabel>Contact Number</FormLabel>
        <Input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.contactNumber}</FormErrorMessage>
      </FormControl>
    </Stack>
  );
};

Details.propTypes = {
  errors: PropTypes.object,
  handleInputChange: PropTypes.func,
};

export default Details;
