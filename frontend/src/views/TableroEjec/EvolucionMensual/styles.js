import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  grid: {
    marginTop: 20,
  },
  paper: {
    backgroundColor: "rgba(255,255,255,0.86)",
    flexDirection: "column",
    display: "flex",
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: "#134436",
  },
  title_: {
    textAlign: "center",
    color: "#134436",
    fontSize: 15,
  },
  containerLine: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  gridLine: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  boxLine: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    height: 400,
    width: "100%",
  },
}));
