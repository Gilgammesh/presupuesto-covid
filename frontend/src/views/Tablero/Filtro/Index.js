import React from "react";
import { useGlobal } from "reactn";
import { Grid, Paper, Select, MenuItem, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const Index = () => {
  const classes = useStyles();

  const [ano, setAno] = useGlobal("ano");

  let array_anos = [];
  for (let i = 2020; i <= ano; i++) {
    array_anos.push(<MenuItem className={classes.item} key={`${i}`} value={`${i}`}>{`${i}`}</MenuItem>);
  }

  const handleChange = (evt) => {
    const { target } = evt;
    const { value } = target;
    setAno(parseInt(value, 10));
  };

  return (
    <Grid className={classes.grid} item xs={3}>
      <Paper className={classes.paper} elevation={3}>
        <Grid className={classes.containerSelect}>
          <Typography variant="body2" className={classes.textFiltro}>
            Seleccione Año :
          </Typography>
          <Select
            value={ano}
            onChange={handleChange}
            className={classes.select}
          >
            {array_anos}
          </Select>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Index;
