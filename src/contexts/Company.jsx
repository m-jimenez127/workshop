import { createContext, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import mockApi from "../utils/mockApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialData = {
  isEditing: false,
  data: {
    name: "",
    address: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
  },
  formData: {
    name: "",
    address: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
  },
};

const reducer = (state, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case "FETCHED":
      return { ...state, formData: payload.data, data: payload.data };
    case "RESET_DATA":
      return { ...state, formData: state.data };
    case "SET_EDIT": {
      return { ...state, isEditing: payload.isEditing };
    }
    case "ON_INPUTCHANGE": {
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    }
    default:
      return state;
  }
};

export const CompanyContext = createContext("default");

const CompanyProvider = ({ id = "add", children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialData);
  const fetched = useRef(-1);

  const handleAddCompany = (data) => {
    let method = "POST";
    let endpoint = `/companies`;
    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/companies/${data?.id}`;
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = null } = requestData;
    if (status) {
      if (!(data?.id > -1)) {
        navigate(`/company/${newData?.id}`);
        Swal.fire({
          title: "Company was added successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Company was updated successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
        dispatch({ type: "FETCHED", data: newData });
      }
      dispatch({ type: "SET_EDIT", isEditing: false });
    }
  };

  const handleDeleteCompany = () => {
    Swal.fire({
      title: "You are about to delete this Company",
      html: "Upon deleting this companyt, you can no longer create any requests from this Company. Any existing requests from this Company will be tagged as Invalid.<br/><br/>Are you sure you want to delete this Project?",
      confirmButtonText: "Yes, Delete",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: "Go Back",
      reverseButtons: true,
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        const requestData = mockApi("DELETE", `/companies/${id}`);
        const { status = false } = requestData;
        if (status) {
          navigate("/companies");
          Swal.fire({
            title: "Company was deleted successfully!",
            confirmButtonText: "Okay!",
            icon: "success",
          });
        }
      }
    });
  };

  const handleCancel = () => {
    if (id === "add") {
      navigate("/companies");
    }
    dispatch({ type: "SET_EDIT", isEditing: false });
    dispatch({ type: "RESET_DATA" });
  };

  useEffect(() => {
    if (id === "add") {
      dispatch({ type: "SET_EDIT", isEditing: true });
      return;
    }
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/companies/${id}`);
    const { status = false, data = null } = requestData;
    if (status) {
      fetched.current = id;
      dispatch({ type: "FETCHED", data });
    }
  }, [id]);

  return (
    <CompanyContext.Provider
      value={{
        id,
        ...state,
        dispatch,
        handleAddCompany,
        handleDeleteCompany,
        handleCancel,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

CompanyProvider.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
};

export default CompanyProvider;
