import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Header from "./header";
import Projects from "../../components/Projects";
import { useEffect, useRef, useState } from "react";
import ProjectForm from "../../forms/ProjectForm";
import mockApi from "../../utils/mockApi";

const ProjectsPage = () => {
  const [isAdding, setAdding] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [projectsData, setProjectsData] = useState([]);
  const fetched = useRef();

  const handleEditProject = (id) => {
    setAdding(true);
    setEditId(id);
  };

  const handleAddProject = (data) => {
    let method = "POST";
    let endpoint = `/projects`;
    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/projects/${data?.id}`;
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = null } = requestData;
    if (status) {
      const newProjectsData = [...projectsData];
      if (data?.id > -1) {
        const index = newProjectsData.findIndex(
          (item) => item.id === newData.id
        );
        newProjectsData.splice(index, 1, newData);
      } else {
        newProjectsData.push(newData);
      }
      setProjectsData(newProjectsData);
      setAdding(false);
      setEditId(-1);
    }
  };

  const handleDeleteProject = (id) => {
    const requestData = mockApi("DELETE", `/projects/${id}`);
    const { status = false } = requestData;
    if (status) {
      const newData = [...projectsData];
      const index = newData.findIndex((item) => item.id === id);
      newData.splice(index, 1);
      setProjectsData(newData);
    }
  };

  const handleCancel = () => {
    setAdding(false);
    setEditId(-1);
  };

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
      <Header isAdding={isAdding} toggleAdd={() => setAdding(!isAdding)} />
      {isAdding === false && (
        <Projects
          data={projectsData}
          onDelete={handleDeleteProject}
          onEdit={handleEditProject}
        />
      )}
      {isAdding !== false && (
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CardBody>
              <ProjectForm
                id={editId}
                onAdd={handleAddProject}
                onCancel={handleCancel}
              />
            </CardBody>
          </Card>
        </Box>
      )}
    </Stack>
  );
};
ProjectsPage.propTypes = {};

export default ProjectsPage;
