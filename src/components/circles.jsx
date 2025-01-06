import PropTypes from "prop-types";

const Circles = ({ width, height }) => {
  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`}></svg>
      <div>
        <button>Refresh Data</button>
      </div>
    </div>
  );
};

Circles.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Circles;
