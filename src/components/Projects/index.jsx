import {
  Heading,
  Card,
  CardBody,
  Stack,
  Text,
  SimpleGrid,
  Box,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [] }) => {
  return (
    <Box w="container.md" mx="auto">
      <SimpleGrid columns={2} gap={4} w="full">
        {data?.length > 0 &&
          data.map((project = {}, projectIndex) => {
            return (
              <LinkBox
                as={Card}
                key={`project-${projectIndex}`}
                w="full"
                maxW="container.md"
                mx="auto"
              >
                <CardBody>
                  <Stack>
                    <Heading
                      size="sm"
                      as={LinkOverlay}
                      href={`/project/${project.id}`}
                    >
                      {project?.name}
                    </Heading>
                    <Text opacity={0.5}>{project?.alias}</Text>
                    <Text>{project?.description}</Text>
                  </Stack>
                </CardBody>
              </LinkBox>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

Projects.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Projects;
