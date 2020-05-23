import React from "react";
import Pdf from "react-to-pdf";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
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

const ref = React.createRef();

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <Pdf targetRef={ref} filename="ejecucion_covid.pdf">
        {({ toPdf }) => (
          <ColorButton
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={<PictureAsPdfIcon />}
            //onClick={toPdf}
          >
            Exportar
          </ColorButton>
        )}
      </Pdf>
      {/*<div ref={ref}>asas</div>*/}
    </>
  );
};

export default Index;
