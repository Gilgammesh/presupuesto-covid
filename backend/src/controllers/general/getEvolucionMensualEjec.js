// Importamos los modelos
import Presupuesto from "../../database/models/presupuesto";

// Obtenemos la tabla de evolución de ejecución (devengado) sobre el PIM del Pliego Regional
const getEvolucionMensualEjec = async (request, response) => {
  var { ano, ejec } = request.params;
  try {
    const result = await Presupuesto.aggregate([
      {
        $match: {
          $and: [
            { ano_eje: parseInt(ano, 10) },
            { sec_ejec: parseInt(ejec, 10) },
          ],
        },
      },
      {
        $group: {
          _id: "$pliego",
          mto_pim: { $sum: "$mto_pim" },
          mto_certificado: { $sum: "$mto_certificado" },
          mto_devenga_01: { $sum: "$mto_devenga_01" },
          mto_devenga_02: { $sum: "$mto_devenga_02" },
          mto_devenga_03: { $sum: "$mto_devenga_03" },
          mto_devenga_04: { $sum: "$mto_devenga_04" },
          mto_devenga_05: { $sum: "$mto_devenga_05" },
          mto_devenga_06: { $sum: "$mto_devenga_06" },
          mto_devenga_07: { $sum: "$mto_devenga_07" },
          mto_devenga_08: { $sum: "$mto_devenga_08" },
          mto_devenga_09: { $sum: "$mto_devenga_09" },
          mto_devenga_10: { $sum: "$mto_devenga_10" },
          mto_devenga_11: { $sum: "$mto_devenga_11" },
          mto_devenga_12: { $sum: "$mto_devenga_12" },
          count: { $sum: 1 },
        },
      },
    ]);
    response.send(result);
  } catch (error) {
    console.error(error);
    response.send(null);
  }
};

export default getEvolucionMensualEjec;
