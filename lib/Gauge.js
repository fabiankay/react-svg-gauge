'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gauge = function (_Component) {
	_inherits(Gauge, _Component);

	function Gauge() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Gauge);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gauge.__proto__ || Object.getPrototypeOf(Gauge)).call.apply(_ref, [this].concat(args))), _this), _this._getPathValues = function (value) {
			if (value < _this.props.min) value = _this.props.min;
			if (value > _this.props.max) value = _this.props.max;

			var dx = 0;
			var dy = 0;
			var gws = 1;

			var alpha = (1 - (value - _this.props.min) / (_this.props.max - _this.props.min)) * Math.PI;
			var Ro = _this.props.width / 2 - _this.props.width / 10;
			var Ri = Ro - _this.props.width / 6.666666666666667;

			var Cx = _this.props.width / 2 + dx;
			var Cy = _this.props.height / 1.25 + dy;

			var Xo = _this.props.width / 2 + dx + Ro * Math.cos(alpha);
			var Yo = _this.props.height - (_this.props.height - Cy) - Ro * Math.sin(alpha);
			var Xi = _this.props.width / 2 + dx + Ri * Math.cos(alpha);
			var Yi = _this.props.height - (_this.props.height - Cy) - Ri * Math.sin(alpha);

			return { alpha: alpha, Ro: Ro, Ri: Ri, Cx: Cx, Cy: Cy, Xo: Xo, Yo: Yo, Xi: Xi, Yi: Yi };
		}, _this._getPath = function (value) {
			var dx = 0;
			var dy = 0;
			var gws = 1;

			var _this$_getPathValues = _this._getPathValues(value),
			    alpha = _this$_getPathValues.alpha,
			    Ro = _this$_getPathValues.Ro,
			    Ri = _this$_getPathValues.Ri,
			    Cx = _this$_getPathValues.Cx,
			    Cy = _this$_getPathValues.Cy,
			    Xo = _this$_getPathValues.Xo,
			    Yo = _this$_getPathValues.Yo,
			    Xi = _this$_getPathValues.Xi,
			    Yi = _this$_getPathValues.Yi;
			
			var path = "M" + (Cx - Ri) + "," + Cy + " ";
			path += "L" + (Cx - Ro) + "," + Cy + " ";
			path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
			path += "L" + Xi + "," + Yi + " ";
			path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
			path += "Z ";
			
			return path;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Gauge, [{
		key: 'render',
		value: function render() {
			var topLabelStyle = this.props.topLabelStyle.fontSize ? this.props.topLabelStyle : _extends({}, this.props.topLabelStyle, { fontSize: this.props.width / 10 });
			var valueLabelStyle = this.props.valueLabelStyle.fontSize ? this.props.valueLabelStyle : _extends({}, this.props.valueLabelStyle, { fontSize: this.props.width / 5 });

			var _getPathValues = this._getPathValues(this.props.max),
			    Cx = _getPathValues.Cx,
			    Ro = _getPathValues.Ro,
			    Ri = _getPathValues.Ri,
			    Xo = _getPathValues.Xo,
			    Cy = _getPathValues.Cy,
			    Xi = _getPathValues.Xi;

			return _react2.default.createElement(
				'svg',
				{ height: '100%', version: '1.1', width: '100%', xmlns: 'http://www.w3.org/2000/svg', style: { width: this.props.width, height: this.props.height, overflow: 'hidden', position: 'relative', left: 0, top: 0 } },
				_react2.default.createElement(
					'defs',
					null,
					_react2.default.createElement(
						'filter',
						{ id: 'g3-inner-shadow' },
						_react2.default.createElement('feOffset', { dx: '0', dy: '3' }),
						_react2.default.createElement('feGaussianBlur', { result: 'offset-blur', stdDeviation: '5' }),
						_react2.default.createElement('feComposite', { operator: 'out', 'in': 'SourceGraphic', in2: 'offset-blur', result: 'inverse' }),
						_react2.default.createElement('feFlood', { floodColor: 'black', floodOpacity: '0.2', result: 'color' }),
						_react2.default.createElement('feComposite', { operator: 'in', 'in': 'color', in2: 'inverse', result: 'shadow' }),
						_react2.default.createElement('feComposite', { operator: 'over', 'in': 'shadow', in2: 'SourceGraphic' })
					)
				),
				_react2.default.createElement('path', { fill: this.props.backgroundColor, stroke: 'none', d: this._getPath(this.props.max), filter: 'url(#g3-inner-shadow)' }),
				_react2.default.createElement('path', { fill: this.props.targetColor, stroke: 'none', d: this._getPath(this.props.targetValue), filter: 'url(#g3-inner-shadow)' }),
				_react2.default.createElement('path', { fill: this.props.color, stroke: 'none', d: this._getPath(this.props.value), filter: 'url(#g3-inner-shadow)' }),
				
				_react2.default.createElement(
					'text',
					{ x: this.props.width / 2, y: this.props.height / 5 * 4, textAnchor: 'middle', style: valueLabelStyle },
					this.props.value + this.props.symbol
				),
				_react2.default.createElement(
					'text',
					{ x: (Cx - Ro + (Cx - Ri)) / 2, y: Cy + 25, textAnchor: 'middle', style: this.props.minMaxLabelStyle },
					this.props.min
				),
				_react2.default.createElement(
					'text',
					{ x: (Xo + Xi) / 2, y: Cy + 25, textAnchor: 'middle', style: this.props.minMaxLabelStyle },
					this.props.max
				)
			);
		}
	}]);

	return Gauge;
}(_react.Component);

Gauge.defaultProps = {
	min: 0,
	max: 100,
	value: 40,
	targetValue: 60,
	width: 400,
	height: 320,
	color: '#fe0400',
	targetColor: 'red',
	symbol: '',
	backgroundColor: "#edebeb",
	topLabelStyle: { textAnchor: "middle", fill: "#999999", stroke: "none", fontStyle: "normal", fontVariant: "normal", fontWeight: 'bold', fontStretch: 'normal', lineHeight: 'normal', fillOpacity: 1 },
	valueLabelStyle: { textAnchor: "middle", fill: "#010101", stroke: "none", fontStyle: "normal", fontVariant: "normal", fontWeight: 'bold', fontStretch: 'normal', lineHeight: 'normal', fillOpacity: 1 },
	minMaxLabelStyle: { textAnchor: "middle", fill: "#999999", stroke: "none", fontStyle: "normal", fontVariant: "normal", fontWeight: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fillOpacity: 1 }
};
exports.default = Gauge;
module.exports = exports['default'];