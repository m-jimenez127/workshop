import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Requests from "../../components/Requests";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";

const RequestsPage = () => {
  const [requestsData, setRequestsData] = useState([]);
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/requests");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setRequestsData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack>
      <Header />
      <Requests data={requestsData} />
    </Stack>
  );
};
RequestsPage.propTypes = {};

export default RequestsPage;
