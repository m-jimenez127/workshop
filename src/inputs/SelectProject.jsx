import { FormControl, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import mockApi from "../utils/mockApi";

const SelectProject = ({
  name,
  value,
  onChange,
  isReadOnly = true,
  isInvalid = true,
}) => {
  const [projectsData, setProjectsData] = useState([]);
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/projects");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setProjectsData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const project = projectsData.find((project) => {
      return JSON.stringify(project.id) === value;
    });
    onChange({ target: { name, value: project } });
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
        <option key={`selectProject-none`} value={-1} disabled>
          -
        </option>
        {projectsData?.length > 0 ? (
          projectsData.map((project, projectIndex) => (
            <option
              key={`selectProject-${projectIndex}`}
              value={project.id}
              disabled={isReadOnly}
            >
              {project?.name}
            </option>
          ))
        ) : (
          <></>
        )}
      </Select>
    </FormControl>
  );
};

SelectProject.propTypes = {
  name: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  isInvalid: PropTypes.any,
};

export default SelectProject;
