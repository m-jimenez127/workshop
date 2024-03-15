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

const Requests = ({ data = [] }) => {
  return (
    <Box w="full" maxW="container.md" mx="auto">
      <SimpleGrid columns={[1, 1, 2]} gap={4} w="full">
        {data?.length > 0 &&
          data.map((request = {}, requestIndex) => {
            return (
              <LinkBox
                as={Card}
                key={`request-${requestIndex}`}
                w="full"
                maxW="container.md"
                mx="auto"
              >
                <CardBody>
                  <Stack>
                    <Heading
                      size="sm"
                      as={LinkOverlay}
                      href={`/request/${request.id}`}
                    >
                      {request?.subject}
                    </Heading>
                    <Text opacity={0.5}>
                      {request?.client?.name} &middot; {request?.project?.name}
                    </Text>
                    <Text>{request?.description}</Text>
                  </Stack>
                </CardBody>
              </LinkBox>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

Requests.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Requests;
