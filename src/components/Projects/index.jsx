import {
  Heading,
  Card,
  CardBody,
  Stack,
  Text,
  SimpleGrid,
  Center,
  Box,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [], onDelete }) => {
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
                      <HStack>
                        <Spacer />
                        <Button
                          size="sm"
                          onClick={() => onDelete(projectIndex)}
                          variant="outline"
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </HStack>
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

Projects.propTypes = { data: PropTypes.array, onDelete: PropTypes.func };

export default Projects;
