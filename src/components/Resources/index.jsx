import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

const Resources = () => {
  const resourcesData = [
    // { firstName: "Marianne Nicole", lastName: "Dagli", type: "DEV" },
    // { firstName: "Leandro", lastName: "Garing", type: "QA" },
    // { firstName: "Fergus", lastName: "Miles", type: "PM" },
    // { firstName: "Aeron", lastName: "Caponpon", type: "DEV" },
    // { firstName: "Elijah", lastName: "Regidor", type: "DEV" },
    {
      firstName: "Nayeon",
      middleName: "Santos",
      lastName: "Im",
      type: "DEV",
    },
    {
      firstName: "Jeongyeon",
      middleName: "",
      lastName: "Yoo",
      type: "QA",
    },
    {
      firstName: "Momo",
      middleName: "Lopez",
      lastName: "Hirai",
      type: "PM",
    },
    {
      firstName: "Sana",
      middleName: null,
      lastName: "Minatozaki",
      type: "DEV",
    },
    {
      firstName: "Jihyo",
      middleName: "",
      lastName: "Park",
      type: "QA",
    },
    {
      firstName: "Mina",
      middleName: "Gonzales",
      lastName: "Myoui",
      type: "PM",
    },
    {
      firstName: "Dahyun",
      middleName: "Ramos",
      lastName: "Kim",
      type: "DEV",
    },
    {
      firstName: "Chaeyoung",
      middleName: "Torres",
      lastName: "Son",
      type: "QA",
    },
    {
      firstName: "Tzuyu",
      middleName: "Santos",
      lastName: "Chou",
      type: "PM",
    },
    {
      firstName: "Jisoo",
      middleName: "",
      lastName: "Choi",
      type: "DEV",
    },
  ];

  return (
    <Card w="full" maxW="container.md" mx="auto">
      <CardHeader>
        <Heading size="md" mb={4}>
          Resources
        </Heading>
      </CardHeader>
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
              {resourcesData.map((resource = {}, resourceIndex) => {
                return (
                  <Tr key={`resource-${resourceIndex}`}>
                    <Td>
                      {/* {`${resource?.firstName} ${resource?.lastName}`} */}
                      {`${resource?.firstName}${
                        resource?.middleName ? ` ${resource.middleName} ` : ` `
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

Resources.propTypes = {};

export default Resources;
