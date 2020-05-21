import React from "react";
import { Box } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { green, red, amber } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import { decimalFormat } from "../../helpers/format";

const Index = (params) => {
  const { data, columns } = params;

  const classes = useStyles();

  const header = columns.map((ele, i) => {
    return (
      <th
        key={i}
        className={
          i + 1 === columns.length ? classes.theadthlast : classes.theadth
        }
      >
        {columns[i]}
      </th>
    );
  });

  let pimT = 0;
  let certT = 0;
  let devenT = 0;
  const rows = data.map((ele, i) => {
    let semaforo = null;
    if (ele.ejecucion > 0.75) {
      semaforo = (
        <FiberManualRecord style={{ color: green[500], fontSize: 22 }} />
      );
    }
    if (ele.ejecucion >= 0.5 && ele.ejecucion <= 0.75) {
      semaforo = (
        <FiberManualRecord style={{ color: amber[500], fontSize: 22 }} />
      );
    }
    if (ele.ejecucion < 0.5) {
      semaforo = (
        <FiberManualRecord style={{ color: red[500], fontSize: 22 }} />
      );
    }
    if (ele.mto_pim) {
      pimT += ele.mto_pim;
    }
    if (ele.mto_certificado) {
      certT += ele.mto_certificado;
    }
    if (ele.mto_devengado) {
      devenT += ele.mto_devengado;
    }
    return (
      <tr key={i} className={i % 2 ? classes.tbodytrPair : classes.tbodytrOdd}>
        <td className={`${classes.tbodytd} ${classes.txtcenter}`}>{i + 1}</td>
        <td
          className={`${classes.tbodytd} ${classes.txtleft}`}
        >{`UE${ele._id.substring(0, 3)} - ${ele._id
          .substring(4, ele._id.length)
          .trim()}`}</td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_pim)}
        </td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_certificado)}
        </td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_devengado)}
        </td>
        <td
          className={`${classes.tbodytd} ${classes.txtcenter}`}
        >{`${decimalFormat(ele.ejecucion * 100)} %`}</td>
        <td className={`${classes.tbodytdlast} ${classes.txtcenter}`}>
          {semaforo}
        </td>
      </tr>
    );
  });

  let semaforoT = null;
  const ejec = devenT / pimT;
  if (ejec > 0.75) {
    semaforoT = (
      <FiberManualRecord style={{ color: green[500], fontSize: 22 }} />
    );
  }
  if (ejec >= 0.5 && ejec <= 0.75) {
    semaforoT = (
      <FiberManualRecord style={{ color: amber[500], fontSize: 22 }} />
    );
  }
  if (ejec < 0.5) {
    semaforoT = <FiberManualRecord style={{ color: red[500], fontSize: 22 }} />;
  }

  const footer = (
    <tr className={classes.tfoottr}>
      <th className={`${classes.tfootth} ${classes.txtcenter}`} colSpan="2">TOTAL PLIEGO SAN MARTIN</th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(pimT)}
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(certT)}
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(devenT)}
      </th>
      <th
        className={`${classes.tfootth} ${classes.txtcenter}`}
      >{`${decimalFormat(ejec * 100)} %`}</th>
      <th className={`${classes.tfootthlast} ${classes.txtcenter}`}>
        {semaforoT}
      </th>
    </tr>
  );

  return (
    <Box boxShadow={3}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.theadtr}>{header}</tr>
        </thead>
        <tbody className={classes.tbody}>{rows}</tbody>
        <tfoot className={classes.tfoot}>{footer}</tfoot>
      </table>
    </Box>
  );
}

export default Index;
