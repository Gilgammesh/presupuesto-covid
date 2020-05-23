import React, { useState, useEffect } from "react";
import { useGlobal } from "reactn";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { useStyles } from "./styles";
import {
  getDistribTipoProdProyEjec,
  getDistribGenericaEjec,
  getDistribTipoGastoEjec,
} from "../../../controllers/index.controllers";
import PieChart from "../../../components/PieChart/Index";

const Index = () => {
  const classes = useStyles();

  const [ano] = useGlobal("ano");
  const [ejec] = useGlobal("ejec");

  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [isFinish1, setIsFinish1] = useState(false);
  const [isFinish2, setIsFinish2] = useState(false);
  const [isFinish3, setIsFinish3] = useState(false);

  useEffect(() => {
    getDistribTipoProdProyEjec(ano, ejec).then((res) => {
      setData1(res);
      setIsFinish1(true);
    });
    getDistribGenericaEjec(ano, ejec).then((res) => {
      setData2(res);
      setIsFinish2(true);
    });
    getDistribTipoGastoEjec(ano, ejec).then((res) => {
      setData3(res);
      setIsFinish3(true);
    });
  }, [ano, ejec]);

  let data1_ = null;
  if (isFinish1) {
    data1_ = data1.map((ele, i) => {
      return {
        id: ele._id,
        label: ele._id,
        value: ele.mto_devengado,
      };
    });
  }

  let data2_ = null;
  if (isFinish2) {
    data2_ = data2.map((ele, i) => {
      return {
        id: ele._id,
        label: ele._id,
        value: ele.mto_devengado,
      };
    });
  }

  let data3_ = null;
  if (isFinish3) {
    data3_ = data3.map((ele, i) => {
      return {
        id: ele._id,
        label: ele._id,
        value: ele.mto_devengado,
      };
    });
  }

  return (
    <Grid className={classes.grid} item xs={12}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" className={classes.title}>
          DISTRIBUCIÓN DE EJECUCIÓN
        </Typography>
        <Typography variant="h6" className={classes.title_}>
          (en millones de soles)
        </Typography>
        <Grid container className={classes.containerPie} spacing={2}>
          <Grid item xs={4} className={classes.gridPie}>
            <Box className={classes.boxPie} boxShadow={3}>
              <Typography variant="body2" className={classes.subtitle}>
                Por Producto/Proyecto
              </Typography>
              <Box className={classes.boxPie_}>
                {isFinish1 && <PieChart data={data1_} scheme={"category10"} />}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} className={classes.gridPie}>
            <Box className={classes.boxPie} boxShadow={3}>
              <Typography variant="body2" className={classes.subtitle}>
                Por Genérica
              </Typography>
              <Box className={classes.boxPie_}>
                {isFinish2 && <PieChart data={data2_} scheme={"dark2"} />}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} className={classes.gridPie}>
            <Box className={classes.boxPie} boxShadow={3}>
              <Typography variant="body2" className={classes.subtitle}>
                Por Tipo de Gasto
              </Typography>
              <Box className={classes.boxPie_}>
                {isFinish3 && <PieChart data={data3_} scheme={"set1"} />}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Index;
