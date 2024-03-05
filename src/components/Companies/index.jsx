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

const Companies = ({ data = [], onDelete }) => {
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
                        <Button
                          size="sm"
                          onClick={() => onDelete(companyIndex)}
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

Companies.propTypes = { data: PropTypes.array, onDelete: PropTypes.func };

export default Companies;
