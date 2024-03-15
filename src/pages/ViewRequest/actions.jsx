import { Button, HStack, Spacer } from "@chakra-ui/react";
import { useRequest } from "../../contexts/_useContexts";

const Actions = () => {
  const { isEditing, id, handleCancel, dispatch } = useRequest();

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
          onClick={() => dispatch({ type: "SET_EDIT", isEditing: true })}
        >
          Update Request
        </Button>
      )}
      {isEditing && (
        <Button type="submit" colorScheme="green">
          {`${id === "add" ? `Add` : `Save Changes to`} Request`}
        </Button>
      )}
    </HStack>
  );
};

Actions.propTypes = {};

export default Actions;
