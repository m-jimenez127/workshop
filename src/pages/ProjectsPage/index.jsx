import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Projects from "../../components/Projects";

const ProjectsPage = () => {
  return (
    <Stack>
      <Header />
      <Projects />
    </Stack>
  );
};
ProjectsPage.propTypes = {};

export default ProjectsPage;
