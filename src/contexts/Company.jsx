import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mockApi from "../utils/mockApi";
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

export const CompanyContext = createContext("default");

const reducer = (state, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case "FETCHED": {
      return { ...state, data: payload?.data, formData: payload?.data };
    }
    case "ON_CHANGE": {
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    }
    case "RESET_DATA": {
      return { ...state, formData: state.data };
    }
    case "TOGGLE_EDITING": {
      return { ...state, isEditing: !state.isEditing };
    }
    case "SET_EDITING": {
      return { ...state, isEditing: payload.value };
    }
    default: {
      return state;
    }
  }
};

const CompanyProvider = ({ id = null, children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialData);
  const fetched = useRef();

  useEffect(() => {
    if (id === "add") return;
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/companies/${id}`);
    const { status = false, data = null } = requestData;
    if (status) {
      fetched.current = id;
      dispatch({ type: "FETCHED", data });
    }
  }, [id]);

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
        dispatch({ type: "SET_EDITING", value: false });
        Swal.fire({
          title: "Company was updated successfully!",
          confirmButtonText: "Okay!",
          icon: "success",
        });
      }
    }
  };

  const handleDeleteCompany = () => {
    Swal.fire({
      title: "You are about to delete this Company",
      html: "Upon deleting this company, you can no longer create any requests from this Company. Any existing requests from this Company will be tagged as Invalid.<br/><br/>Are you sure you want to delete this Project?",
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
    dispatch({ type: "SET_EDITING", value: false });
    dispatch({ type: "RESET_DATA" });
  };

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
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.any,
};

export default CompanyProvider;
