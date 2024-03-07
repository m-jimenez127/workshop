import {
  Heading,
  Card,
  CardBody,
  Stack,
  Text,
  SimpleGrid,
  Box,
  HStack,
  Spacer,
  Button,
  ButtonGroup,
  CardFooter,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [], onDelete, onEdit }) => {
  return (
    <Box w="container.md" mx="auto">
      <SimpleGrid columns={2} gap={4} w="full">
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
                <CardFooter>
                  <HStack w="full">
                    <Spacer />
                    <ButtonGroup>
                      <Button
                        size="sm"
                        onClick={() => onEdit(project?.id)}
                        variant="outline"
                        colorScheme="green"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => onDelete(project?.id)}
                        variant="outline"
                        colorScheme="red"
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </HStack>
                </CardFooter>
              </Card>
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
