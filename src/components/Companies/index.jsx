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

const Companies = () => {
  const companiesData = [
    {
      name: "TechByte Innovations",
      contactPerson: "Michelle Cruz",
      email: "michelle.cruz@techbyte.ph",
      address: "123 Innovation Street, Quezon City",
      contactNumber: "+63 2 111 2222",
    },
    {
      name: "GreenLeaf Organics",
      contactPerson: "John Santos",
      email: "john.santos@greenleaforganics.com",
      address: "456 Nature Avenue, Taguig City",
      contactNumber: "+63 2 333 4444",
    },
    {
      name: "MetroStyle Apparel",
      contactPerson: "Karen Lim",
      email: "karen.lim@metrostyle.ph",
      address: "789 Fashion Street, Makati City",
      contactNumber: "+63 2 555 6666",
    },
    {
      name: "AquaTech Solutions",
      contactPerson: "Carlos Rivera",
      email: "carlos.rivera@aquatech.ph",
      address: "101 Waterfront Drive, Pasay City",
      contactNumber: "+63 2 777 8888",
    },
    {
      name: "BioHarvest Farms",
      contactPerson: "Elena Gomez",
      email: "elena.gomez@bioharvestfarms.com",
      address: "222 Agri Road, Mandaluyong City",
      contactNumber: "+63 2 999 0000",
    },
  ];

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
              </Tr>
            </Thead>
            <Tbody>
              {companiesData.map((company = {}, companyIndex) => {
                return (
                  <Tr key={`company-${companyIndex}`}>
                    <Td>{company?.name}</Td>
                    <Td>{company?.address}</Td>
                    <Td>{company?.contactPerson}</Td>
                    <Td>{company?.email}</Td>
                    <Td>{company?.contactNumber}</Td>
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

Companies.propTypes = {};

export default Companies;
