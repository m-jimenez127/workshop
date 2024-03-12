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

const validateProject = (data) => {
  const retData = { isValid: true, errors: {} };

  if (data?.name?.length < 1) {
    retData.isValid = false;
    retData.errors.name = "Project Name is required.";
  }

  if (data?.alias?.length < 1) {
    retData.isValid = false;
    retData.errors.alias = "Alias is required.";
  }

  const aliasRegex = /^\S+$/;
  if (!aliasRegex.test(data.alias)) {
    retData.isValid = false;
    retData.errors.alias = "Alias should not contain any spaces.";
  }

  return retData;
};

export { validateResource, validateProject };
