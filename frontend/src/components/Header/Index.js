import React from "react";
import { useGlobal } from "reactn";
import Responsive from "react-responsive";
import { AppBar, Toolbar, Typography, Hidden } from "@material-ui/core";
import { useStyles } from "./styles";
import covidImg from "../../assets/images/logo_covid.png";
import grsmImg from "../../assets/images/logo_grsm.png";

const Index = (params) => {
  const { titulo } = params;

  const [isCovid] = useGlobal("isCovid");

  const classes = useStyles();

  const Desktop = (props) => <Responsive {...props} minWidth={992} />;
  const Tablet = (props) => (
    <Responsive {...props} minWidth={768} maxWidth={991} />
  );
  const Mobile = (props) => <Responsive {...props} maxWidth={767} />;

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolBarPrimary}>
        {isCovid && (
          <img className={classes.imgCovid} src={covidImg} alt="COVID" />
        )}
        <Desktop>
          <Typography variant="h5" className={classes.title}>
            {titulo}
          </Typography>
        </Desktop>
        <Tablet>
          <Typography variant="h6" className={classes.title}>
            {titulo}
          </Typography>
        </Tablet>
        <Mobile>
          <Typography variant="h6" className={classes.title}>
            {titulo}
          </Typography>
        </Mobile>
        <Hidden smDown>
          <img className={classes.imgGrsm} src={grsmImg} alt="GORESAM" />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
