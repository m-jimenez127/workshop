import { Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import RequestProvider from "../../contexts/Request";
import Footer from "./footer";
import RequestForm from "./form";

const ViewRequest = () => {
  const { id = "add" } = useParams();

  return (
    <RequestProvider id={id}>
      <Stack w="container.md" mx="auto">
        <RequestForm />
        <Footer />
      </Stack>
    </RequestProvider>
  );
};
ViewRequest.propTypes = {};

export default ViewRequest;
