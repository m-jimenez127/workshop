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
  LinkBox,
  LinkOverlay,
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
                    <LinkBox as={Tr} key={`resource-${resourceIndex}`}>
                      <Td>
                        <LinkOverlay href={`/resource/${resource?.id}`}>
                          {`${resource?.firstName}${
                            resource?.middleName
                              ? ` ${resource.middleName} `
                              : ` `
                          }${resource?.lastName}`}
                        </LinkOverlay>
                      </Td>
                      <Td>{resource?.type}</Td>
                    </LinkBox>
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
