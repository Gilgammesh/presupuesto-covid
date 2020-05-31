import React from "react";
import { Box } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { green, red, amber } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import { decimalFormat } from "../../helpers/format";

const Index = (params) => {
  const { data, columns } = params;

  const classes = useStyles();

  const date = new Date();
  const month = date.getMonth();

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
    if (ele.ejecucion > (month + 1) * 0.08) {
      semaforo = (
        <FiberManualRecord style={{ color: green[500], fontSize: 22 }} />
      );
    }
    if (ele.ejecucion >= (month + 1) * 0.06 && ele.ejecucion <= (month + 1) * 0.08) {
      semaforo = (
        <FiberManualRecord style={{ color: amber[500], fontSize: 22 }} />
      );
    }
    if (ele.ejecucion < (month + 1) * 0.06) {
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
    const clasificador = `${ele._id.tipo_transaccion.split(".")[0]}.${
      ele._id.generica.split(".")[0]
    }. ${ele._id.subgenerica.split(".")[0]} ${
      ele._id.subgenerica_det.split(".")[0]
    }. ${ele._id.especifica.split(".")[0]} ${
      ele._id.especifica_det.split(".")[0]
    } - ${ele._id.especifica_det.split(".")[1]}`;
    return (
      <tr key={i} className={i % 2 ? classes.tbodytrPair : classes.tbodytrOdd}>
        <td className={`${classes.tbodytd} ${classes.txtcenter}`}>{i + 1}</td>
        <td className={`${classes.tbodytd} ${classes.txtleft}`}>
          {clasificador}
        </td>
        <td
          className={`${classes.tbodytd} ${classes.txtleft}`}
        >{`${ele._id.fuente_financ}`}</td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_pim)}
        </td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_certificado)}
        </td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_pim - ele.mto_certificado)}
        </td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_devengado)}
        </td>
        <td className={`${classes.tbodytd} ${classes.txtright}`}>
          {decimalFormat(ele.mto_pim - ele.mto_devengado)}
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
  let ejec = 0;
  if (pimT !== 0) {
    ejec = devenT / pimT;
  }
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
      <th className={`${classes.tfootth} ${classes.txtcenter}`} colSpan="3">
        TOTAL UNIDAD EJECUTORA
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(pimT)}
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(certT)}
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(pimT - certT)}
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(devenT)}
      </th>
      <th className={`${classes.tfootth} ${classes.txtright}`}>
        {decimalFormat(pimT - devenT)}
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
};

export default Index;
