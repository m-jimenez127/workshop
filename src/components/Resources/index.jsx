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
  ButtonGroup,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resources = ({ data = [], onDelete, onEdit }) => {
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
                        <ButtonGroup>
                          <Button
                            size="sm"
                            onClick={() => onEdit(resource.id)}
                            variant="outline"
                            colorScheme="green"
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => onDelete(resource.id)}
                            variant="outline"
                            colorScheme="red"
                          >
                            Delete
                          </Button>
                        </ButtonGroup>
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

Resources.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Resources;
