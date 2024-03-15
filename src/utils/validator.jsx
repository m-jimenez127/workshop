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
  } else {
    const aliasRegex = /^\S+$/;
    if (!aliasRegex.test(data.alias)) {
      retData.isValid = false;
      retData.errors.alias = "Alias should not contain any spaces.";
    }
  }

  return retData;
};

const validateCompany = (data) => {
  const retData = { isValid: true, errors: {} };

  if (data?.name?.length < 1) {
    retData.isValid = false;
    retData.errors.name = "Company Name is required.";
  }

  if (data?.address?.length < 1) {
    retData.isValid = false;
    retData.errors.address = "Company Address is required.";
  }

  if (data?.contactPerson?.length < 1) {
    retData.isValid = false;
    retData.errors.contactPerson = "Contact Person is required.";
  }

  if (data?.email?.length < 1) {
    retData.isValid = false;
    retData.errors.email = "Email is required.";
  } else {
    const emailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i);
    if (!emailRegex.test(data.email)) {
      retData.isValid = false;
      retData.errors.email =
        "Please input a valid Email Address (eg. juandelacruz@gmail.com).";
    }
  }

  if (data?.contactNumber?.length < 1) {
    retData.isValid = false;
    retData.errors.contactNumber = "contactNumber is required.";
  } else {
    const contactNumberRegex = new RegExp(/^(09|\+639)\d{9}$/gm);
    if (!contactNumberRegex.test(data.contactNumber)) {
      retData.isValid = false;
      retData.errors.contactNumber =
        "Please input a valid Contact Number (eg. 09123456789 or +639123456789).";
    }
  }

  return retData;
};

const validateRequest = (data) => {
  const retData = { isValid: true, errors: {} };

  if (["", undefined, null].includes(data?.client?.id)) {
    retData.isValid = false;
    retData.errors.client = "Client is required.";
  }

  if (data?.subject?.length < 1) {
    retData.isValid = false;
    retData.errors.subject = "Request Subject is required.";
  }

  if (data?.description?.length < 1) {
    retData.isValid = false;
    retData.errors.description = "Request Description is required.";
  }

  return retData;
};

export { validateResource, validateProject, validateCompany, validateRequest };
