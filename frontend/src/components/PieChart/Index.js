import React from "react";
import { useGlobal } from "reactn";
import { ResponsivePie } from "@nivo/pie";
import { decimalFormat, numericFormat } from "../../helpers/format";

const Index = (params) => {
  const { data, scheme } = params;

  const [isCovid] = useGlobal("isCovid");

  let total = 0;
  data.map((ele, i) => {
    total += ele.value;
    return ele.value;
  });

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 70, bottom: 10, left: 70 }}
      sortByValue={true}
      innerRadius={0.4}
      padAngle={1}
      fit={false}
      colors={{ scheme }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      enableRadialLabels={false}
      sliceLabel={function (e) {
        return `${numericFormat(e.value / 1000)} (${decimalFormat(
          (e.value * 100) / total
        )}%)`;
      }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#fff"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: "bottom-left",
          direction: isCovid ? "column" : "row",
          translateY: 10,
          itemWidth: isCovid ? 200 : 30,
          itemHeight: 22,
          itemTextColor: isCovid ? "#333" : "transparent",
          symbolSize: 18,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default Index;
