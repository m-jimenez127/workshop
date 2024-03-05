import { Box, Card, CardBody, Stack } from "@chakra-ui/react";
import Header from "./header";
import Projects from "../../components/Projects";
import { useState } from "react";
import initialData from "./projects.json";
import ProjectForm from "../../forms/ProjectForm";

const ProjectsPage = () => {
  const [isAdding, setAdding] = useState(false);
  const [projectsData, setProjectsData] = useState(initialData);

  const handleAddProject = (data) => {
    setProjectsData((prevData) => [...prevData, data]);
    setAdding(false);
  };

  return (
    <Stack>
      <Header isAdding={isAdding} toggleAdd={() => setAdding(!isAdding)} />
      {!isAdding && <Projects data={projectsData} />}
      {isAdding && (
        <Box w="container.md" mx="auto">
          <Card w="full">
            <CardBody>
              <ProjectForm
                onAdd={handleAddProject}
                onCancel={() => setAdding(false)}
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
