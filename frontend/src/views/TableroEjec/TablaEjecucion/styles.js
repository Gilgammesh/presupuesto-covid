import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
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
  containerTable: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  leyenda: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 10,
  },
  titleLeyenda: {
    textAlign: "center",
    background:
      "linear-gradient(45deg, rgba(30,100,80,0.85) 30%, rgba(30,100,80,0.75) 90%)",
    color: "whitesmoke",
    fontSize: 14,
    padding: 6,
    marginBottom: 10,
  },
  boxLeyenda: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
  descLeyenda: {
    fontSize: 12,
    color: "#333",
    marginLeft: 5,
  },
}));
