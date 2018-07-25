'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _some2 = require('lodash/some');

var _some3 = _interopRequireDefault(_some2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @fileOverview Reference Line
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _ReactUtils = require('../util/ReactUtils');

var _Label = require('../component/Label');

var _Label2 = _interopRequireDefault(_Label);

var _ChartUtils = require('../util/ChartUtils');

var _DataUtils = require('../util/DataUtils');

var _CartesianUtils = require('../util/CartesianUtils');

var _LogUtils = require('../util/LogUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderLine = function renderLine(option, props) {
  var line = void 0;

  if (_react2.default.isValidElement(option)) {
    line = _react2.default.cloneElement(option, props);
  } else if ((0, _isFunction3.default)(option)) {
    line = option(props);
  } else {
    line = _react2.default.createElement('line', _extends({}, props, {
      className: 'recharts-reference-line-line'
    }));
  }

  return line;
};

var ReferenceLine = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceLine, _Component);

  function ReferenceLine() {
    _classCallCheck(this, ReferenceLine);

    return _possibleConstructorReturn(this, (ReferenceLine.__proto__ || Object.getPrototypeOf(ReferenceLine)).apply(this, arguments));
  }

  _createClass(ReferenceLine, [{
    key: 'getEndPoints',
    value: function getEndPoints(scales, isFixedX, isFixedY, isSegment) {
      var _props$viewBox = this.props.viewBox,
          x = _props$viewBox.x,
          y = _props$viewBox.y,
          width = _props$viewBox.width,
          height = _props$viewBox.height;


      if (isFixedY) {
        var _props = this.props,
            yCoord = _props.y,
            orientation = _props.yAxis.orientation;

        var coord = scales.y.apply(yCoord);

        if ((0, _ChartUtils.ifOverflowMatches)(this.props, 'discard') && !scales.y.isInRange(coord)) {
          return null;
        }

        var points = [{ x: x + width, y: coord }, { x: x, y: coord }];
        return orientation === 'left' ? points.reverse() : points;
      } else if (isFixedX) {
        var _props2 = this.props,
            xCoord = _props2.x,
            _orientation = _props2.xAxis.orientation;

        var _coord = scales.x.apply(xCoord);

        if ((0, _ChartUtils.ifOverflowMatches)(this.props, 'discard') && !scales.x.isInRange(_coord)) {
          return null;
        }

        var _points = [{ x: _coord, y: y + height }, { x: _coord, y: y }];
        return _orientation === 'top' ? _points.reverse() : _points;
      } else if (isSegment) {
        var segment = this.props.segment;


        var _points2 = segment.map(function (p) {
          return scales.apply(p);
        });

        if ((0, _ChartUtils.ifOverflowMatches)(this.props, 'discard') && (0, _some3.default)(_points2, function (p) {
          return !scales.isInRange(p);
        })) {
          return null;
        }

        return _points2;
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          fixedX = _props3.x,
          fixedY = _props3.y,
          segment = _props3.segment,
          xAxis = _props3.xAxis,
          yAxis = _props3.yAxis,
          shape = _props3.shape,
          className = _props3.className,
          alwaysShow = _props3.alwaysShow,
          clipPathId = _props3.clipPathId;


      (0, _LogUtils.warn)(alwaysShow !== undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

      var scales = _CartesianUtils.LabeledScaleHelper.create({ x: xAxis.scale, y: yAxis.scale });

      var isX = (0, _DataUtils.isNumOrStr)(fixedX);
      var isY = (0, _DataUtils.isNumOrStr)(fixedY);
      var isSegment = segment && segment.length === 2;

      var endPoints = this.getEndPoints(scales, isX, isY, isSegment);
      if (!endPoints) {
        return null;
      }

      var _endPoints = _slicedToArray(endPoints, 2),
          _endPoints$ = _endPoints[0],
          x1 = _endPoints$.x,
          y1 = _endPoints$.y,
          _endPoints$2 = _endPoints[1],
          x2 = _endPoints$2.x,
          y2 = _endPoints$2.y;

      var clipPath = (0, _ChartUtils.ifOverflowMatches)(this.props, 'hidden') ? 'url(#' + clipPathId + ')' : undefined;

      var props = _extends({
        clipPath: clipPath
      }, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: (0, _classnames2.default)('recharts-reference-line', className) },
        renderLine(shape, props),
        _Label2.default.renderCallByParent(this.props, (0, _CartesianUtils.rectWithCoords)({ x1: x1, y1: y1, x2: x2, y2: y2 }))
      );
    }
  }]);

  return ReferenceLine;
}(_react.Component), _class2.displayName = 'ReferenceLine', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  viewBox: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),

  xAxis: _propTypes2.default.object,
  yAxis: _propTypes2.default.object,

  isFront: _propTypes2.default.bool,
  alwaysShow: _propTypes2.default.bool,
  ifOverflow: _propTypes2.default.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
  x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  segment: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  })),

  className: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  yAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  xAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  shape: _propTypes2.default.func
}), _class2.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
}, _temp)) || _class;

exports.default = ReferenceLine;