// Importamos los modelos
import processData from "../helpers/processData";

// Obtenemos la tabla resumen de ejecución de las Unidades Ejecutoras
const processDataPresup = async (request, response) => {
  try {
    await processData();
    response.send(msg);
  } catch (error) {
    console.error();
    response.send("No se pudo procesar la Data");
  }
};

export default processDataPresup;
