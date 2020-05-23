import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { red } from "@material-ui/core/colors";
import { useStyles } from "./styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    "&:hover": {
      backgroundColor: red[800],
    },
  },
}))(Button);

const Index = () => {
  const classes = useStyles();

  return (
    <ColorButton
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      startIcon={<KeyboardReturnIcon />}
      component={Link}
      to="/presupuesto/covid"
    >
      Regresar
    </ColorButton>
  );
};

export default Index;
