import { makeStyles } from "@material-ui/core/styles";
import bg from "../../assets/images/bg.jpg";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  container: {
    marginTop: 60,
    padding: 30,
  },
  containerFiltro: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    fontSize: 12,
  },
}));
