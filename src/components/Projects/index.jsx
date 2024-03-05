import {
  Heading,
  Card,
  CardBody,
  Stack,
  Text,
  SimpleGrid,
  Center,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [] }) => {
  return (
    <Center>
      <Box maxW="container.md">
        <SimpleGrid columns={2} gap={4}>
          {data?.length > 0 &&
            data.map((project = {}, projectIndex) => {
              return (
                <Card
                  key={`project-${projectIndex}`}
                  w="full"
                  maxW="container.md"
                  mx="auto"
                >
                  <CardBody>
                    <Stack>
                      <Heading size="sm">{project?.name}</Heading>
                      <Text opacity={0.5}>{project?.alias}</Text>
                      <Text>{project?.description}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
        </SimpleGrid>
      </Box>
    </Center>
  );
};

Projects.propTypes = { data: PropTypes.array };

export default Projects;
