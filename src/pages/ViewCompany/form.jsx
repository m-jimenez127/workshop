import { useState } from "react";
import { useCompany } from "../../contexts/_useContexts";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { validateCompany } from "../../utils/validator";
import Actions from "./actions";
import Details from "./details";

const CompanyForm = () => {
  const { formData = {}, dispatch, handleAddCompany: onAdd } = useCompany();
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_CHANGE", name, value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const validate = validateCompany(formData);
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

CompanyForm.propTypes = {};

export default CompanyForm;
