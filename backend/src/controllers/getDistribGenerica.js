// Importamos los modelos
import Presupuesto from "../database/models/presupuesto";

// Obtenemos la tabla resumen de ejecución de las Unidades Ejecutoras
const getDistribTipoProdProy = async (request, response) => {
  var { ano } = request.params;
  try {
    const result = await Presupuesto.aggregate([
      {
        $match: {
          $and: [
            { ano_eje: parseInt(ano, 10) },
            {
              $or: [
                {
                  $and: [
                    { programa_pptal: { $regex: "^9002" } },
                    { tipo_prod_proy: { $regex: "^3" } },
                    { activ_obra_accinv: { $regex: "^5006269" } },
                  ],
                },
                {
                  $and: [
                    { programa_pptal: { $regex: "^9002" } },
                    { tipo_prod_proy: { $regex: "^2" } },
                    { activ_obra_accinv: { $regex: "^6000050" } },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        $group: {
          _id: "$generica",
          mto_pim: { $sum: "$mto_pim" },
          mto_certificado: { $sum: "$mto_certificado" },
          mto_devengado: {
            $sum: {
              $add: [
                "$mto_devenga_01",
                "$mto_devenga_02",
                "$mto_devenga_03",
                "$mto_devenga_04",
                "$mto_devenga_05",
                "$mto_devenga_06",
                "$mto_devenga_07",
                "$mto_devenga_08",
                "$mto_devenga_09",
                "$mto_devenga_10",
                "$mto_devenga_11",
                "$mto_devenga_12",
              ],
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          mto_pim: 1,
          mto_certificado: 1,
          mto_devengado: 1,
          ejecucion: {
            $cond: {
              if: { $eq: ["$mto_pim", 0] },
              then: 0.0,
              else: {
                $divide: ["$mto_devengado", "$mto_pim"],
              },
            },
          },
        },
      },
      {
        $sort: {
          ejecucion: -1,
          mto_pim: -1,
        },
      },
    ]);
    response.send(result);
  } catch (error) {
    console.error(error);
    response.send(null);
  }
};

export default getDistribTipoProdProy;
