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
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resources = ({ data = [] }) => {
  return (
    <Card w="full" maxW="container.md" mx="auto">
      <CardBody pt={0} px={0}>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Resource Type</Th>
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

Resources.propTypes = { data: PropTypes.array };

export default Resources;
