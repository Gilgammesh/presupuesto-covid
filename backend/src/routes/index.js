// Importamos la librerias de rutas
import { Router } from "express";
// Rutas generales
import getTablaResumen from "../controllers/general/getTablaResumen";
import getEvolucionMensual from "../controllers/general/getEvolucionMensual";
import getDistribTipoProdProy from "../controllers/general/getDistribTipoProdProy";
import getDistribTipoGasto from "../controllers/general/getDistribTipoGasto";
import getDistribGenerica from "../controllers/general/getDistribGenerica";
import getTablaResumenEjec from "../controllers/general/getTablaResumenEjec";
import getEvolucionMensualEjec from "../controllers/general/getEvolucionMensualEjec";
import getDistribTipoProdProyEjec from "../controllers/general/getDistribTipoProdProyEjec";
import getDistribTipoGastoEjec from "../controllers/general/getDistribTipoGastoEjec";
import getDistribGenericaEjec from "../controllers/general/getDistribGenericaEjec";
// Rutas de covid
import getTablaResumenCovid from "../controllers/covid/getTablaResumen";
import getEvolucionMensualCovid from "../controllers/covid/getEvolucionMensual";
import getDistribTipoProdProyCovid from "../controllers/covid/getDistribTipoProdProy";
import getDistribTipoGastoCovid from "../controllers/covid/getDistribTipoGasto";
import getDistribGenericaCovid from "../controllers/covid/getDistribGenerica";
import getTablaResumenEjecCovid from "../controllers/covid/getTablaResumenEjec";
import getEvolucionMensualEjecCovid from "../controllers/covid/getEvolucionMensualEjec";
import getDistribTipoProdProyEjecCovid from "../controllers/covid/getDistribTipoProdProyEjec";
import getDistribTipoGastoEjecCovid from "../controllers/covid/getDistribTipoGastoEjec";
import getDistribGenericaEjecCovid from "../controllers/covid/getDistribGenericaEjec";
// Procesar Data
import processDataPresup from "../controllers/processDataPresup";

// Inicializamos router
const router = Router();

// ****** Definimos las rutas (get, post, put, delete) ***** //

// Presupuesto general Pliego //
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

// Presupuesto de Covid //
router.get("/getTablaResumenCovid/:ano", getTablaResumenCovid);
router.get("/getEvolucionMensualCovid/:ano", getEvolucionMensualCovid);
router.get("/getDistribTipoProdProyCovid/:ano", getDistribTipoProdProyCovid);
router.get("/getDistribTipoGastoCovid/:ano", getDistribTipoGastoCovid);
router.get("/getDistribGenericaCovid/:ano", getDistribGenericaCovid);
router.get("/getTablaResumenEjecCovid/:ano/:ejec", getTablaResumenEjecCovid);
router.get(
  "/getEvolucionMensualEjecCovid/:ano/:ejec",
  getEvolucionMensualEjecCovid
);
router.get(
  "/getDistribTipoProdProyEjecCovid/:ano/:ejec",
  getDistribTipoProdProyEjecCovid
);
router.get(
  "/getDistribTipoGastoEjecCovid/:ano/:ejec",
  getDistribTipoGastoEjecCovid
);
router.get(
  "/getDistribGenericaEjecCovid/:ano/:ejec",
  getDistribGenericaEjecCovid
);

// Procesar la data de Excel //
router.get("/processDataPresup", processDataPresup);

export default router;
