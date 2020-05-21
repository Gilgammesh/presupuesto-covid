// Importamos libreria de Excel to Json
import { join } from "path";
import { readdir } from "fs";
import excelToJson from "convert-excel-to-json";
import Presupuesto from "../database/models/presupuesto";

// Definimos la función que convierte un Excel a formato Json
export const convertExcelJson = async (pathSource, file) => {
  const result = excelToJson({
    sourceFile: join(pathSource, file),
    header: {
      rows: 1,
    },
    sheets: ["SheetGasto"],
    columnToKey: {
      A: "ano_eje",
      B: "sector",
      C: "pliego",
      D: "unidad_ejecutora",
      E: "sec_ejec",
      F: "programa_pptal",
      G: "tipo_prod_proy",
      H: "producto_proyecto",
      I: "tipo_act_obra_ac",
      J: "activ_obra_accinv",
      K: "funcion",
      L: "division_fn",
      M: "grupo_fn",
      N: "meta",
      O: "finalidad",
      P: "unidad_medida",
      Q: "cant_meta_anual",
      R: "cant_meta_sem",
      S: "avan_fisico_anual",
      T: "avan_fisico_sem",
      U: "sec_func",
      V: "departamento_meta",
      W: "provincia_meta",
      X: "distrito_meta",
      Y: "fuente_financ",
      Z: "rubro",
      AA: "categoria_gasto",
      AB: "tipo_transaccion",
      AC: "generica",
      AD: "subgenerica",
      AE: "subgenerica_det",
      AF: "especifica",
      AG: "especifica_det",
      AH: "mto_pia",
      AI: "mto_modificaciones",
      AJ: "mto_pim",
      AK: "mto_certificado",
      AL: "mto_compro_anual",
      AM: "mto_at_comp_01",
      AN: "mto_at_comp_02",
      AO: "mto_at_comp_03",
      AP: "mto_at_comp_04",
      AQ: "mto_at_comp_05",
      AR: "mto_at_comp_06",
      AS: "mto_at_comp_07",
      AT: "mto_at_comp_08",
      AU: "mto_at_comp_09",
      AV: "mto_at_comp_10",
      AW: "mto_at_comp_11",
      AX: "mto_at_comp_12",
      AY: "mto_devenga_01",
      AZ: "mto_devenga_02",
      BA: "mto_devenga_03",
      BB: "mto_devenga_04",
      BC: "mto_devenga_05",
      BD: "mto_devenga_06",
      BE: "mto_devenga_07",
      BF: "mto_devenga_08",
      BG: "mto_devenga_09",
      BH: "mto_devenga_10",
      BI: "mto_devenga_11",
      BJ: "mto_devenga_12",
      BK: "mto_girado_01",
      BL: "mto_girado_02",
      BM: "mto_girado_03",
      BN: "mto_girado_04",
      BO: "mto_girado_05",
      BP: "mto_girado_06",
      BQ: "mto_girado_07",
      BR: "mto_girado_08",
      BS: "mto_girado_09",
      BT: "mto_girado_10",
      BU: "mto_girado_11",
      BV: "mto_girado_12",
      BW: "mto_pagado_01",
      BX: "mto_pagado_02",
      BY: "mto_pagado_03",
      BZ: "mto_pagado_04",
      CA: "mto_pagado_05",
      CB: "mto_pagado_06",
      CC: "mto_pagado_07",
      CD: "mto_pagado_08",
      CE: "mto_pagado_09",
      CF: "mto_pagado_10",
      CG: "mto_pagado_11",
      CH: "mto_pagado_12",
    },
  });
  await Presupuesto.insertMany(result.SheetGasto, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log(`Se insertó correctamente la tabla ${file}`);
    }
  });
};

// Insertamos la Data de los excels a la base de datos
const processData = async () => {
  await Presupuesto.deleteMany();
  const directoryPath = join(__dirname, "../../", "data");
  readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(async function (file) {
      if (file !== ".DS_Store") {
        await convertExcelJson(directoryPath, file);
      }
    });
  });
};

export default processData;
