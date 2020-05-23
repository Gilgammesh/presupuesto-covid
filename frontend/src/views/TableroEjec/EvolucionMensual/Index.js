import React, { useState, useEffect } from "react";
import { useGlobal } from "reactn";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { useStyles } from "./styles";
import { getEvolucionMensualEjec } from "../../../controllers/index.controllers";
import LineChart from "../../../components/LineChart/Index";

const Index = () => {
  const classes = useStyles();

  const [ano] = useGlobal("ano");
  const [ejec] = useGlobal("ejec");

  const [data, setData] = useState(null);
  const [isFinish, setIsFinish] = useState(false);

  const date = new Date();
  const month = date.getMonth();

  useEffect(() => {
    getEvolucionMensualEjec(ano, ejec).then((res) => {
      setData(res);
      setIsFinish(true);
    });
  }, [ano, ejec]);

  let data_ = null;
  if (isFinish) {
    data_ = [
      {
        id: "Devengado Acumulado",
        color: "hsl(109, 70%, 50%)",
        data: [
          {
            x: "",
            y: null,
          },
          {
            x: "Enero",
            y: month >= 0 ? data[0].mto_devenga_01 : null,
          },
          {
            x: "Febrero",
            y:
              month >= 1
                ? data[0].mto_devenga_01 + data[0].mto_devenga_02
                : null,
          },
          {
            x: "Marzo",
            y:
              month >= 2
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03
                : null,
          },
          {
            x: "Abril",
            y:
              month >= 3
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04
                : null,
          },
          {
            x: "Mayo",
            y:
              month >= 4
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05
                : null,
          },
          {
            x: "Junio",
            y:
              month >= 5
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06
                : null,
          },
          {
            x: "Julio",
            y:
              month >= 6
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06 +
                  data[0].mto_devenga_07
                : null,
          },
          {
            x: "Agosto",
            y:
              month >= 7
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06 +
                  data[0].mto_devenga_07 +
                  data[0].mto_devenga_08
                : null,
          },
          {
            x: "Setiembre",
            y:
              month >= 8
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06 +
                  data[0].mto_devenga_07 +
                  data[0].mto_devenga_08 +
                  data[0].mto_devenga_09
                : null,
          },
          {
            x: "Octubre",
            y:
              month >= 9
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06 +
                  data[0].mto_devenga_07 +
                  data[0].mto_devenga_08 +
                  data[0].mto_devenga_09 +
                  data[0].mto_devenga_10
                : null,
          },
          {
            x: "Noviembre",
            y:
              month >= 10
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06 +
                  data[0].mto_devenga_07 +
                  data[0].mto_devenga_08 +
                  data[0].mto_devenga_09 +
                  data[0].mto_devenga_10 +
                  data[0].mto_devenga_11
                : null,
          },
          {
            x: "Diciembre",
            y:
              month >= 11
                ? data[0].mto_devenga_01 +
                  data[0].mto_devenga_02 +
                  data[0].mto_devenga_03 +
                  data[0].mto_devenga_04 +
                  data[0].mto_devenga_05 +
                  data[0].mto_devenga_06 +
                  data[0].mto_devenga_07 +
                  data[0].mto_devenga_08 +
                  data[0].mto_devenga_09 +
                  data[0].mto_devenga_10 +
                  data[0].mto_devenga_11 +
                  data[0].mto_devenga_12
                : null,
          },
        ],
      },
      {
        id: "Por devengar",
        color: "hsl(109, 70%, 50%)",
        data: [
          {
            x: "",
            y: null,
          },
          {
            x: "Enero",
            y: month >= 0 ? data[0].mto_pim - data[0].mto_devenga_01 : null,
          },
          {
            x: "Febrero",
            y:
              month >= 1
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 + data[0].mto_devenga_02)
                : null,
          },
          {
            x: "Marzo",
            y:
              month >= 2
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03)
                : null,
          },
          {
            x: "Abril",
            y:
              month >= 3
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04)
                : null,
          },
          {
            x: "Mayo",
            y:
              month >= 4
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05)
                : null,
          },
          {
            x: "Junio",
            y:
              month >= 5
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06)
                : null,
          },
          {
            x: "Julio",
            y:
              month >= 6
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06 +
                    data[0].mto_devenga_07)
                : null,
          },
          {
            x: "Agosto",
            y:
              month >= 7
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06 +
                    data[0].mto_devenga_07 +
                    data[0].mto_devenga_08)
                : null,
          },
          {
            x: "Setiembre",
            y:
              month >= 8
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06 +
                    data[0].mto_devenga_07 +
                    data[0].mto_devenga_08 +
                    data[0].mto_devenga_09)
                : null,
          },
          {
            x: "Octubre",
            y:
              month >= 9
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06 +
                    data[0].mto_devenga_07 +
                    data[0].mto_devenga_08 +
                    data[0].mto_devenga_09 +
                    data[0].mto_devenga_10)
                : null,
          },
          {
            x: "Noviembre",
            y:
              month >= 10
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06 +
                    data[0].mto_devenga_07 +
                    data[0].mto_devenga_08 +
                    data[0].mto_devenga_09 +
                    data[0].mto_devenga_10 +
                    data[0].mto_devenga_11)
                : null,
          },
          {
            x: "Diciembre",
            y:
              month >= 11
                ? data[0].mto_pim -
                  (data[0].mto_devenga_01 +
                    data[0].mto_devenga_02 +
                    data[0].mto_devenga_03 +
                    data[0].mto_devenga_04 +
                    data[0].mto_devenga_05 +
                    data[0].mto_devenga_06 +
                    data[0].mto_devenga_07 +
                    data[0].mto_devenga_08 +
                    data[0].mto_devenga_09 +
                    data[0].mto_devenga_10 +
                    data[0].mto_devenga_11 +
                    data[0].mto_devenga_12)
                : null,
          },
        ],
      },
    ];
  }

  return (
    <Grid className={classes.grid} item xs={12}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" className={classes.title}>
          EVOLUCIÓN DE LA EJECUCIÓN MENSUALIZADA
        </Typography>
        <Typography variant="h6" className={classes.title_}>
          (en millones de soles)
        </Typography>
        <Grid container className={classes.containerLine} spacing={2}>
          <Grid item xs={12} className={classes.gridLine}>
            <Box className={classes.boxLine} boxShadow={3}>
              {isFinish && <LineChart data={data_} />}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Index;
