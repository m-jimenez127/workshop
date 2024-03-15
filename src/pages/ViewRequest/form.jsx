import { useState } from "react";
import { useRequest } from "../../contexts/_useContexts";
import { Card, CardBody, CardFooter, Divider, Stack } from "@chakra-ui/react";
import { validateRequest } from "../../utils/validator";
import Actions from "./actions";
import Details from "./details";
import Client from "./client";
import Project from "./project";

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
          <Stack>
            <Client errors={errors} handleInputChange={handleInputChange} />
            <Divider my={4} />
            <Project errors={errors} handleInputChange={handleInputChange} />
            <Divider my={4} />
            <Details errors={errors} handleInputChange={handleInputChange} />
          </Stack>
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
