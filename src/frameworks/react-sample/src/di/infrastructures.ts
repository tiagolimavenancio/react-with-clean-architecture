/* eslint-disable @typescript-eslint/no-explicit-any */
import Http from "adapters/infrastructures/Http";
import WebStorage from "adapters/infrastructures/WebStorage";
import IInfrastructures from "./interfaces/IInfrastructures";

export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new WebStorage((window as any).sessionStorage),
  };
};
