import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  grid: {
    marginBottom: 10,
  },
  paper: {
    backgroundColor: "rgba(255,255,255,0.86)",
    flexDirection: "column",
    display: "flex",
    padding: 10,
  },
  containerSelect: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10
  },
  textFiltro: {
    color: "#134436",
    fontSize: 13,
    fontWeight: "500",
    marginRight: 10
  },
  select: {
    width: 80,
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  item: {
    fontSize: 14,
  },
}));
