import { useState } from "react";
import { useRequest } from "../../contexts/_useContexts";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { validateRequest } from "../../utils/validator";
import Actions from "./actions";
import Details from "./details";

const RequestForm = () => {
  const { formData = {}, dispatch, handleAddRequest: onAdd } = useRequest();
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_INPUTCHANGE", name, value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const validate = validateRequest(formData);
    if (validate.isValid) {
      onAdd(formData);
      setErrors({});
    } else {
      setErrors(validate.errors);
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <Card>
        <CardBody>
          <Details errors={errors} handleInputChange={handleInputChange} />
        </CardBody>
        <CardFooter>
          <Actions />
        </CardFooter>
      </Card>
    </form>
  );
};

RequestForm.propTypes = {};

export default RequestForm;
