// Importamos la librerias de rutas
import { Router } from "express";
import getTablaResumen from "../controllers/getTablaResumen";
import getEvolucionMensual from "../controllers/getEvolucionMensual";
import getDistribTipoProdProy from "../controllers/getDistribTipoProdProy";
import getDistribTipoGasto from "../controllers/getDistribTipoGasto";
import getDistribGenerica from "../controllers/getDistribGenerica";

// Inicializamos router
const router = Router();

// ****** Definimos las rutas (get, post, put, delete) ***** //

// Ruta para obtener la tabla resumen
router.get("/getTablaResumen/:ano", getTablaResumen);
router.get("/getEvolucionMensual/:ano", getEvolucionMensual);
router.get("/getDistribTipoProdProy/:ano", getDistribTipoProdProy);
router.get("/getDistribTipoGasto/:ano", getDistribTipoGasto);
router.get("/getDistribGenerica/:ano", getDistribGenerica);

export default router;
