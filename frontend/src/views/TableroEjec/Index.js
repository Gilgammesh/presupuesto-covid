import React from "react";
import { setGlobal } from "reactn";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import Header from "../../components/Header/Index";
import Filtro from "./Filtro/Index";
import Return from "./Return/Index";
import TablaEjecucion from "./TablaEjecucion/Index";
import Distribucion from "./Distribucion/Index";
import EvolucionMensual from "./EvolucionMensual/Index";

const Index = ({ match }) => {
  const { params } = match;
  const { ejec } = params;

  const classes = useStyles();

  const date = new Date();
  const year = date.getFullYear();

  setGlobal({
    ano: parseInt(year, 10),
    ejec: parseInt(ejec, 10),
  });

  const titulo = "TABLERO DE PRESUPUESTO COVID";

  return (
    <div className={classes.root}>
      <Header titulo={titulo} />
      <Grid container className={classes.container}>
        <Grid className={classes.containerFiltro}>
          <Filtro />
          <Return />
        </Grid>
        <TablaEjecucion />
        <Distribucion />
        <EvolucionMensual />
      </Grid>
    </div>
  );
};

export default Index;