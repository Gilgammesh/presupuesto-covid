import { getRequest } from "../helpers/axios";

export const getTablaResumen = async (params) => {
  const url = `http://localhost:4000/getTablaResumen/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getTablaResumenEjec = async (param1, param2) => {
  const url = `http://localhost:4000/getTablaResumenEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getEvolucionMensual = async (params) => {
  const url = `http://localhost:4000/getEvolucionMensual/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getEvolucionMensualEjec = async (param1, param2) => {
  const url = `http://localhost:4000/getEvolucionMensualEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoProdProy = async (params) => {
  const url = `http://localhost:4000/getDistribTipoProdProy/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoProdProyEjec = async (param1, param2) => {
  const url = `http://localhost:4000/getDistribTipoProdProyEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoGasto = async (params) => {
  const url = `http://localhost:4000/getDistribTipoGasto/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribTipoGastoEjec = async (param1, param2) => {
  const url = `http://localhost:4000/getDistribTipoGastoEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribGenerica = async (params) => {
  const url = `http://localhost:4000/getDistribGenerica/${params}`;
  const response = await getRequest(url);
  return response;
};

export const getDistribGenericaEjec = async (param1, param2) => {
  const url = `http://localhost:4000/getDistribGenericaEjec/${param1}/${param2}`;
  const response = await getRequest(url);
  return response;
};
