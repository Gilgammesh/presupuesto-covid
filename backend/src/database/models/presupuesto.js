// Importamos las librerias de mongoose
import { Schema, model } from "mongoose";

// Definir el Esquema
const schema = new Schema(
  {
    ano_eje: Number,
    sector: String,
    pliego: String,
    unidad_ejecutora: String,
    sec_ejec: Number,
    programa_pptal: String,
    tipo_prod_proy: String,
    producto_proyecto: String,
    tipo_act_obra_ac: String,
    activ_obra_accinv: String,
    funcion: String,
    division_fn: String,
    grupo_fn: String,
    meta: Number,
    finalidad: String,
    unidad_medida: String,
    cant_meta_anual: Number,
    cant_meta_sem: Number,
    avan_fisico_anual: Number,
    avan_fisico_sem: Number,
    sec_func: Number,
    departamento_meta: String,
    provincia_meta: String,
    distrito_meta: String,
    fuente_financ: String,
    rubro: String,
    categoria_gasto: String,
    tipo_transaccion: String,
    generica: String,
    subgenerica: String,
    subgenerica_det: String,
    especifica: String,
    especifica_det: String,
    mto_pia: Number,
    mto_modificaciones: Number,
    mto_pim: Number,
    mto_certificado: Number,
    mto_compro_anual: Number,
    mto_at_comp_01: Number,
    mto_at_comp_02: Number,
    mto_at_comp_03: Number,
    mto_at_comp_04: Number,
    mto_at_comp_05: Number,
    mto_at_comp_06: Number,
    mto_at_comp_07: Number,
    mto_at_comp_08: Number,
    mto_at_comp_09: Number,
    mto_at_comp_10: Number,
    mto_at_comp_11: Number,
    mto_at_comp_12: Number,
    mto_devenga_01: Number,
    mto_devenga_02: Number,
    mto_devenga_03: Number,
    mto_devenga_04: Number,
    mto_devenga_05: Number,
    mto_devenga_06: Number,
    mto_devenga_07: Number,
    mto_devenga_08: Number,
    mto_devenga_09: Number,
    mto_devenga_10: Number,
    mto_devenga_11: Number,
    mto_devenga_12: Number,
    mto_girado_01: Number,
    mto_girado_02: Number,
    mto_girado_03: Number,
    mto_girado_04: Number,
    mto_girado_05: Number,
    mto_girado_06: Number,
    mto_girado_07: Number,
    mto_girado_08: Number,
    mto_girado_09: Number,
    mto_girado_10: Number,
    mto_girado_11: Number,
    mto_girado_12: Number,
    mto_pagado_01: Number,
    mto_pagado_02: Number,
    mto_pagado_03: Number,
    mto_pagado_04: Number,
    mto_pagado_05: Number,
    mto_pagado_06: Number,
    mto_pagado_07: Number,
    mto_pagado_08: Number,
    mto_pagado_09: Number,
    mto_pagado_10: Number,
    mto_pagado_11: Number,
    mto_pagado_12: Number,
  },
  {
    collection: "resumen_pliego",
    timestamps: true
  }
);

// Exportamos el modelo y schema
export default model("resumen_pliego", schema);
