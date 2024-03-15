import { FormControl, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import mockApi from "../utils/mockApi";

const SelectCompany = ({
  name,
  value,
  onChange,
  isReadOnly = true,
  isInvalid = true,
}) => {
  const [companiesData, setCompaniesData] = useState([]);
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/companies");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setCompaniesData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const company = companiesData.find((company) => {
      return JSON.stringify(company.id) === value;
    });
    onChange({ target: { name, value: company } });
  };

  return (
    <FormControl>
      <Select
        name={name}
        value={value?.id}
        onChange={handleChange}
        isReadOnly={isReadOnly}
        isInvalid={isInvalid}
      >
        <option key={`selectCompany-none`} value={-1} disabled>
          -
        </option>
        {companiesData?.length > 0 ? (
          companiesData.map((company, companyIndex) => (
            <option
              key={`selectCompany-${companyIndex}`}
              value={company.id}
              disabled={isReadOnly}
            >
              {company?.name}
            </option>
          ))
        ) : (
          <></>
        )}
      </Select>
    </FormControl>
  );
};

SelectCompany.propTypes = {
  name: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  isInvalid: PropTypes.any,
};

export default SelectCompany;
