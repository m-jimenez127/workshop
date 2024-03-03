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

const Projects = () => {
  const projectsData = [
    {
      name: "People System Upgrade",
      description: "Upgrade and enhance the features of the HR system",
      alias: "peopleUpgrade",
    },
    {
      name: "Books Integration",
      description: "Integrate accounting system with external financial tools",
      alias: "booksIntegration",
    },
    {
      name: "Warehouse Automation",
      description:
        "Implement automation features in the warehouse management system",
      alias: "warehouseAutomation",
    },
  ];

  return (
    <Center>
      <Box maxW="container.md">
        <SimpleGrid columns={2} gap={4}>
          {projectsData.map((project = {}, projectIndex) => {
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

Projects.propTypes = {};

export default Projects;
