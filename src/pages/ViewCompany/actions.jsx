import { Button, HStack, Spacer } from "@chakra-ui/react";
import { useCompany } from "../../contexts/_useContexts";

const Actions = () => {
  const { isEditing, id, handleCancel, dispatch } = useCompany();

  return (
    <HStack spacing={4} w="full">
      {isEditing && (
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      )}
      <Spacer />
      {!isEditing && (
        <Button
          type="button"
          onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
        >
          Update Company
        </Button>
      )}
      {isEditing && (
        <Button type="submit" colorScheme="green">
          {`${id === "add" ? `Add` : `Save Changes to`} Company`}
        </Button>
      )}
    </HStack>
  );
};

Actions.propTypes = {};

export default Actions;
