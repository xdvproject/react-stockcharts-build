"use strict";

import React from "react";
import PropTypes from "prop-types";

import LineSeries from "./LineSeries";
import AreaOnlySeries from "./AreaOnlySeries";

function AreaSeries(props) {
	var yAccessor = props.yAccessor,
	    baseAt = props.baseAt;
	var className = props.className,
	    opacity = props.opacity,
	    lineCap = props.lineCap,
	    lineJoin = props.lineJoin,
	    stroke = props.stroke,
	    strokeWidth = props.strokeWidth,
	    fill = props.fill;


	return React.createElement(
		"g",
		{ className: className },
		React.createElement(LineSeries, {
			yAccessor: yAccessor,
			stroke: stroke,
			lineCap: lineCap,
			lineJoin: lineJoin,
			fill: "none",
			strokeWidth: strokeWidth,
			hoverHighlight: false }),
		React.createElement(AreaOnlySeries, {
			yAccessor: yAccessor,
			base: baseAt,
			stroke: "none",
			fill: fill,
			opacity: opacity })
	);
}

AreaSeries.propTypes = {
	stroke: PropTypes.string,
	strokeWidth: PropTypes.number,
	lineCap: PropTypes.string,
	lineJoin: PropTypes.string,
	fill: PropTypes.string.isRequired,
	opacity: PropTypes.number.isRequired,
	className: PropTypes.string,
	yAccessor: PropTypes.func.isRequired,
	baseAt: PropTypes.func
};

AreaSeries.defaultProps = {
	stroke: "#4682B4",
	strokeWidth: 1,
	opacity: 0.5,
	fill: "#4682B4",
	className: "react-stockcharts-area"
};

export default AreaSeries;
//# sourceMappingURL=AreaSeries2.js.map