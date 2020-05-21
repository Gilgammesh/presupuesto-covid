import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  table: {
    width: "100%",
    borderSpacing: 0,
  },
  txtcenter: {
    textAlign: "center",
  },
  txtright: {
    textAlign: "right",
  },
  txtleft: {
    textAlign: "left",
  },
  thead: {
    background:
      "linear-gradient(45deg, rgba(29,151,108,0.8) 30%, rgba(29,151,108,0.75) 90%)",
  },
  theadtr: {
    color: "whitesmoke",
    fontSize: 12,
  },
  theadth: {
    paddingTop: 3,
    paddingBottom: 3,
    borderRight: "1px solid whitesmoke",
  },
  theadthlast: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  tbody: {},
  tbodytrPair: {
    background:
      "linear-gradient(45deg, rgba(147,249,185,0.30) 30%, rgba(147,249,185,0.15) 90%)",
  },
  tbodytrOdd: {
    background:
      "linear-gradient(45deg, rgba(147,249,185,0.15) 30%, rgba(147,249,185,0.05) 90%)",
  },
  tbodytd: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottom: "1px solid whitesmoke",
    borderRight: "1px solid whitesmoke",
    fontSize: 12,
  },
  tbodytdlast: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottom: "1px solid whitesmoke",
    fontSize: 12,
  },
  tfoottr: {
    background:
      "linear-gradient(45deg, rgba(29,151,108,0.75) 30%, rgba(29,151,108,0.85) 90%)",
    color: "#fff",
  },
  tfootth: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    borderRight: "1px solid whitesmoke",
    fontSize: 12,
  },
  tfootthlast: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
  },
}));
