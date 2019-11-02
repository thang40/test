import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";

import colors from "../../../commons/components/airDashboard/colors";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group C", value: 300 }
];

const COLORS = [
  colors["primary"],
  colors["purple"],
  colors["success"],
  colors["yellow"]
];

const TinyDonutChartBig = props => (
  <PieChart width={270} height={270}>
    <Pie
      data={data}
      dataKey="value"
      stroke={colors["white"]}
      innerRadius={98}
      outerRadius={109}
      fill={colors[props.pieBg]}
    >
      {data.map((entry, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
);

TinyDonutChartBig.propTypes = {
  pieBg: PropTypes.string
};
TinyDonutChartBig.defaultProps = {
  pieBg: "300"
};

export { TinyDonutChartBig };