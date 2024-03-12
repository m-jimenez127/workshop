const validateResource = (data) => {
  const retData = { isValid: true, errors: {} };

  if (data?.firstName?.length < 1) {
    retData.isValid = false;
    retData.errors.firstName = "First Name is required.";
  }

  if (data?.lastName?.length < 1) {
    retData.isValid = false;
    retData.errors.lastName = "Last Name is required.";
  }

  if (data?.type?.length < 1) {
    retData.isValid = false;
    retData.errors.type = "Type is required.";
  }

  return retData;
};

export { validateResource };
