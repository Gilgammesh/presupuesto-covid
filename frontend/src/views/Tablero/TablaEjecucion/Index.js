import React, { useState, useEffect } from "react";
import { useGlobal } from "reactn";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { green, red, amber } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import { getTablaResumen } from "../../../controllers/index.controllers";
import Table from "../../../components/Table/Index";

const Index = () => {
  const classes = useStyles();

  const [ano] = useGlobal("ano");

  const [data, setData] = useState(null);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    getTablaResumen(ano).then((res) => {
      setData(res);
      setIsFinish(true);
    });
  }, [ano]);

  const columns = [
    "RANKING",
    "UNIDAD EJECUTORA",
    "PIM",
    "CERTIFICADO",
    "DEVENGADO",
    "% AVANCE",
    "SEMÁFORO",
  ];

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" className={classes.title}>
          TABLA DE EJECUCIÓN
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
                  Ejecución mayor a 75%
                </Typography>
              </Box>
              <Box className={classes.boxLeyenda}>
                <FiberManualRecord
                  style={{ color: amber[500], fontSize: 24 }}
                />
                <Typography variant="body2" className={classes.descLeyenda}>
                  Ejecución entre 50% a 75%
                </Typography>
              </Box>
              <Box className={classes.boxLeyenda}>
                <FiberManualRecord style={{ color: red[500], fontSize: 24 }} />
                <Typography variant="body2" className={classes.descLeyenda}>
                  Ejecución menor a 50%
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
