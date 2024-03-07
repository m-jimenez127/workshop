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

const Companies = ({ data = [], onDelete, onEdit }) => {
  return (
    <Card w="full" maxW="container.md" mx="auto">
      <CardBody pt={0} px={0}>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Contact Person</Th>
                <Th>Email</Th>
                <Th>Contact Number</Th>
                <Th isNumeric>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.length > 0 &&
                data.map((company = {}, companyIndex) => {
                  return (
                    <Tr key={`company-${companyIndex}`}>
                      <Td>{company?.name}</Td>
                      <Td>{company?.address}</Td>
                      <Td>{company?.contactPerson}</Td>
                      <Td>{company?.email}</Td>
                      <Td>{company?.contactNumber}</Td>
                      <Td isNumeric>
                        <ButtonGroup>
                          <Button
                            size="sm"
                            onClick={() => onEdit(company.id)}
                            variant="outline"
                            colorScheme="green"
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => onDelete(company.id)}
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

Companies.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Companies;
