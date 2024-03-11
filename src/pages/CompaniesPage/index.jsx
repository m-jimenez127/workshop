import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Companies from "../../components/Companies";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";

const CompaniesPage = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/companies");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setCompaniesData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack>
      <Header />
      <Companies data={companiesData} />
    </Stack>
  );
};
CompaniesPage.propTypes = {};

export default CompaniesPage;
