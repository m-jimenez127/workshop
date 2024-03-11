import { Stack } from "@chakra-ui/react";
import Header from "./header";
import Resources from "../../components/Resources";
import { useEffect, useRef, useState } from "react";
import mockApi from "../../utils/mockApi";

const ResourcesPage = () => {
  const [resourcesData, setResourcesData] = useState([]);
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/resources");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setResourcesData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Stack>
      <Header />
      <Resources data={resourcesData} />
    </Stack>
  );
};
ResourcesPage.propTypes = {};

export default ResourcesPage;
