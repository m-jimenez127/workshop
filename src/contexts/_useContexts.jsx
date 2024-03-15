import { useContext } from "react";
import { CompanyContext } from "./Company";
import { RequestContext } from "./Request";

const useCompany = () => useContext(CompanyContext);
const useRequest = () => useContext(RequestContext);

export { useCompany, useRequest };
