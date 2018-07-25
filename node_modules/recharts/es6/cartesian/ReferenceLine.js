import _some from 'lodash-es/some';
import _isFunction from 'lodash-es/isFunction';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Reference Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import Label from '../component/Label';
import { ifOverflowMatches } from '../util/ChartUtils';
import { isNumOrStr } from '../util/DataUtils';
import { LabeledScaleHelper, rectWithCoords } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';

var renderLine = function renderLine(option, props) {
  var line = void 0;

  if (React.isValidElement(option)) {
    line = React.cloneElement(option, props);
  } else if (_isFunction(option)) {
    line = option(props);
  } else {
    line = React.createElement('line', _extends({}, props, {
      className: 'recharts-reference-line-line'
    }));
  }

  return line;
};

var ReferenceLine = pureRender(_class = (_temp = _class2 = function (_Component) {
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

        if (ifOverflowMatches(this.props, 'discard') && !scales.y.isInRange(coord)) {
          return null;
        }

        var points = [{ x: x + width, y: coord }, { x: x, y: coord }];
        return orientation === 'left' ? points.reverse() : points;
      } else if (isFixedX) {
        var _props2 = this.props,
            xCoord = _props2.x,
            _orientation = _props2.xAxis.orientation;

        var _coord = scales.x.apply(xCoord);

        if (ifOverflowMatches(this.props, 'discard') && !scales.x.isInRange(_coord)) {
          return null;
        }

        var _points = [{ x: _coord, y: y + height }, { x: _coord, y: y }];
        return _orientation === 'top' ? _points.reverse() : _points;
      } else if (isSegment) {
        var segment = this.props.segment;


        var _points2 = segment.map(function (p) {
          return scales.apply(p);
        });

        if (ifOverflowMatches(this.props, 'discard') && _some(_points2, function (p) {
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


      warn(alwaysShow !== undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

      var scales = LabeledScaleHelper.create({ x: xAxis.scale, y: yAxis.scale });

      var isX = isNumOrStr(fixedX);
      var isY = isNumOrStr(fixedY);
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

      var clipPath = ifOverflowMatches(this.props, 'hidden') ? 'url(#' + clipPathId + ')' : undefined;

      var props = _extends({
        clipPath: clipPath
      }, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });

      return React.createElement(
        Layer,
        { className: classNames('recharts-reference-line', className) },
        renderLine(shape, props),
        Label.renderCallByParent(this.props, rectWithCoords({ x1: x1, y1: y1, x2: x2, y2: y2 }))
      );
    }
  }]);

  return ReferenceLine;
}(Component), _class2.displayName = 'ReferenceLine', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }),

  xAxis: PropTypes.object,
  yAxis: PropTypes.object,

  isFront: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  ifOverflow: PropTypes.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  segment: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })),

  className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  shape: PropTypes.func
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

export default ReferenceLine;