import { useState, useRef, useEffect } from "react";
import { scaleLinear, select } from "d3";
import PropTypes from "prop-types";
import { getData } from "../utils";

const Circles = ({ width, height }) => {
  const svgRef = useRef();
  const [data, setData] = useState(getData());
  const maxRadius = 40;
  const colors = ["#39FF14", "#d01d9b", "#1F51FF", "#FF5F1F", "#FFFF33"];

  const handleClick = () => {
    setData(getData());
  };

  useEffect(() => {
    const xScale = scaleLinear().domain([0, 1]).range([0, width]);
    const yScale = scaleLinear().domain([0, 1]).range([height, 0]);
    const rScale = scaleLinear().domain([0, 1]).range([0, maxRadius]);
    select(svgRef.current)
      .selectAll("circle")
      .data(data)
      .transition()
      .duration(1300)
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", (d) => rScale(d.r))
      .attr("fill", (d) => colors[d.color]);
  }, [data, width, height]);

  return (
    <div>
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
        {data.map((d, i) => (
          <circle key={i} fill="#fff" />
        ))}
      </svg>
      <div>
        <button onClick={handleClick}>Refresh Data</button>
      </div>
    </div>
  );
};

Circles.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Circles;
