// Importamos la librerias de rutas
import { Router } from "express";
import getTablaResumen from "../controllers/getTablaResumen";
import getEvolucionMensual from "../controllers/getEvolucionMensual";
import getDistribTipoProdProy from "../controllers/getDistribTipoProdProy";
import getDistribTipoGasto from "../controllers/getDistribTipoGasto";
import getDistribGenerica from "../controllers/getDistribGenerica";
import getTablaResumenEjec from "../controllers/getTablaResumenEjec";
import getEvolucionMensualEjec from "../controllers/getEvolucionMensualEjec";
import getDistribTipoProdProyEjec from "../controllers/getDistribTipoProdProyEjec";
import getDistribTipoGastoEjec from "../controllers/getDistribTipoGastoEjec";
import getDistribGenericaEjec from "../controllers/getDistribGenericaEjec";

// Inicializamos router
const router = Router();

// ****** Definimos las rutas (get, post, put, delete) ***** //

// Ruta para obtener la tabla resumen
router.get("/getTablaResumen/:ano", getTablaResumen);
router.get("/getEvolucionMensual/:ano", getEvolucionMensual);
router.get("/getDistribTipoProdProy/:ano", getDistribTipoProdProy);
router.get("/getDistribTipoGasto/:ano", getDistribTipoGasto);
router.get("/getDistribGenerica/:ano", getDistribGenerica);
router.get("/getTablaResumenEjec/:ano/:ejec", getTablaResumenEjec);
router.get("/getEvolucionMensualEjec/:ano/:ejec", getEvolucionMensualEjec);
router.get(
  "/getDistribTipoProdProyEjec/:ano/:ejec",
  getDistribTipoProdProyEjec
);
router.get("/getDistribTipoGastoEjec/:ano/:ejec", getDistribTipoGastoEjec);
router.get("/getDistribGenericaEjec/:ano/:ejec", getDistribGenericaEjec);

export default router;
