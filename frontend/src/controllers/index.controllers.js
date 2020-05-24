import { getRequest } from "../helpers/axios";

const routeApi = process.env.REACT_API_PRESUPUESTO;;

export const getTablaResumen = async (params) => {
  const url = `${routeApi}/getTablaResumen/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getTablaResumenEjec = async (param1, param2) => {
  const url = `${routeApi}/getTablaResumenEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getEvolucionMensual = async (params) => {
  const url = `${routeApi}/getEvolucionMensual/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getEvolucionMensualEjec = async (param1, param2) => {
  const url = `${routeApi}/getEvolucionMensualEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoProdProy = async (params) => {
  const url = `${routeApi}/getDistribTipoProdProy/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoProdProyEjec = async (param1, param2) => {
  const url = `${routeApi}/getDistribTipoProdProyEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoGasto = async (params) => {
  const url = `${routeApi}/getDistribTipoGasto/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoGastoEjec = async (param1, param2) => {
  const url = `${routeApi}/getDistribTipoGastoEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribGenerica = async (params) => {
  const url = `${routeApi}/getDistribGenerica/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribGenericaEjec = async (param1, param2) => {
  const url = `${routeApi}/getDistribGenericaEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const processDataPresup = async () => {
  const url = `${routeApi}/processDataPresup`;
  const response = await getRequest(url);
  return response;
};
