import React, { useState } from "react";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import StorageIcon from "@material-ui/icons/Storage";
import { red } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import Header from "../../components/Header/Index";
import { processDataPresup } from "../../controllers/index.controllers";

const Index = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);

  const titulo = "PROCESAR DATA DE PRESUPUESTO";

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[600]),
      backgroundColor: red[600],
      "&:hover": {
        backgroundColor: red[800],
      },
    },
  }))(Button);

  const clickBtn = async () => {
    setLoading(true);
    await processDataPresup().then((res) => {
      console.log(res);
      setLoading(false);
    });
  };

  return (
    <div className={classes.root}>
      <Header titulo={titulo} />
      <Grid container className={classes.container}>
        <Grid className={classes.containerFiltro}>
          <ColorButton
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={loading ? <CircularProgress /> : <StorageIcon />}
            onClick={clickBtn}
          >
            Procesar Data
          </ColorButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
