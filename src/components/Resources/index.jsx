import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resources = ({ data = [], onDelete }) => {
  return (
    <Card w="full" maxW="container.md" mx="auto">
      <CardBody pt={0} px={0}>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Resource Type</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.length > 0 &&
                data.map((resource = {}, resourceIndex) => {
                  return (
                    <Tr key={`resource-${resourceIndex}`}>
                      <Td>
                        {`${resource?.firstName}${
                          resource?.middleName
                            ? ` ${resource.middleName} `
                            : ` `
                        }${resource?.lastName}`}
                      </Td>
                      <Td>{resource?.type}</Td>
                      <Td isNumeric>
                        <Button
                          size="sm"
                          onClick={() => onDelete(resourceIndex)}
                          variant="outline"
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

Resources.propTypes = { data: PropTypes.array, onDelete: PropTypes.func };

export default Resources;
