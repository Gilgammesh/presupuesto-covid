import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent"
  },
  toolBarPrimary: {
    background: "linear-gradient(45deg, #010D06 30%, #000 80%)"
  },
  imgCovid: {
    maxWidth: "45px",
    maxHeight: "45px"
  },
  imgGrsm: {
    maxWidth: "180px"
  },
  title: {
    flexGrow: 1,
    marginLeft: "15px",
    color: "#C8F0DA",
    fontWeight: "600"
  }  
}));
