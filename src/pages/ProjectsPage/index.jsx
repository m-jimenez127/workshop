import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Projects from "../../components/Projects";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";

const ProjectsPage = () => {
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

  return (
    <Stack>
      <Header />
      <Projects data={projectsData} />
    </Stack>
  );
};
ProjectsPage.propTypes = {};

export default ProjectsPage;
