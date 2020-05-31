import React, { useState, useEffect } from "react";
import { useGlobal } from "reactn";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { green, red, amber } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import {
  getTablaResumenEjec,
  getTablaResumenEjecCovid,
} from "../../../controllers/index.controllers";
import Table from "../../../components/Table_/Index";

const Index = () => {
  const classes = useStyles();

  const [ano] = useGlobal("ano");
  const [ejec] = useGlobal("ejec");
  const [isCovid] = useGlobal("isCovid");

  const [data, setData] = useState(null);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (isCovid) {
      getTablaResumenEjecCovid(ano, ejec).then((res) => {
        setData(res);
        setIsFinish(true);
      });
    } else {
      getTablaResumenEjec(ano, ejec).then((res) => {
        setData(res);
        setIsFinish(true);
      });
    }
  }, [ano, ejec, isCovid]);

  const date = new Date();
  const month = date.getMonth();

  const columns = [
    <span>RANKING</span>,
    <span>CLASIFICADOR</span>,
    <span>FUENTE</span>,
    <span>
      PIM<br></br>(P)
    </span>,
    <span>
      CERTIFICADO<br></br>(C)
    </span>,
    <span>
      POR CERTIFICAR<br></br>(P - C)
    </span>,
    <span>
      DEVENGADO<br></br>(D)
    </span>,
    <span>
      POR DEVENGAR<br></br>(P - D)
    </span>,
    <span>
      % AVANCE<br></br>(D / P)
    </span>,
    <span>SEMÁFORO</span>,
  ];

  let ejecutora = "";
  if (isFinish) {
    const elems = data[0];
    ejecutora = `UE${elems._id.unidad_ejecutora.substring(
      0,
      3
    )} - ${elems._id.unidad_ejecutora.substring(
      4,
      elems._id.unidad_ejecutora.length
    )} (${elems._id.sec_ejec})`;
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" className={classes.title}>
          TABLA DE EJECUCIÓN
        </Typography>
        <Typography variant="h6" className={classes.title_}>
          {ejecutora}
        </Typography>
        <Grid container className={classes.containerTable} spacing={2}>
          <Grid item xs={10}>
            {isFinish && <Table data={data} columns={columns} />}
          </Grid>
          <Grid item xs={2}>
            <Box className={classes.leyenda} boxShadow={3}>
              <Typography variant="body2" className={classes.titleLeyenda}>
                Leyenda de Semáforo
              </Typography>
              <Box className={classes.boxLeyenda}>
                <FiberManualRecord
                  style={{ color: green[500], fontSize: 24 }}
                />
                <Typography variant="body2" className={classes.descLeyenda}>
                  {`Ejecución mayor a ${(month + 1) * 8}%`}
                </Typography>
              </Box>
              <Box className={classes.boxLeyenda}>
                <FiberManualRecord
                  style={{ color: amber[500], fontSize: 24 }}
                />
                <Typography variant="body2" className={classes.descLeyenda}>
                  {`Ejecución entre ${(month + 1) * 6}% a ${(month + 1) * 8}%`}
                </Typography>
              </Box>
              <Box className={classes.boxLeyenda}>
                <FiberManualRecord style={{ color: red[500], fontSize: 24 }} />
                <Typography variant="body2" className={classes.descLeyenda}>
                  {`Ejecución menor a ${(month + 1) * 6}%`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Index;
