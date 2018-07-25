import _every from 'lodash-es/every';
import _mapValues from 'lodash-es/mapValues';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { getTicksOfScale, parseScale, checkDomainOfScale, getBandSizeOfAxis } from './ChartUtils';

/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
export var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height,
      layout = props.layout;

  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };

  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation,
        domain = axis.domain,
        _axis$padding = axis.padding,
        padding = _axis$padding === undefined ? {} : _axis$padding,
        mirror = axis.mirror,
        reversed = axis.reversed;

    var offsetKey = '' + orientation + (mirror ? 'Mirror' : '');

    var range = void 0,
        x = void 0,
        y = void 0,
        needSpace = void 0;

    if (axisType === 'xAxis') {
      range = [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)];
    } else if (axisType === 'yAxis') {
      range = layout === 'horizontal' ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0), offset.top + offset.height - (padding.bottom || 0)];
    } else {
      range = axis.range;
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    var _parseScale = parseScale(axis, chartName),
        scale = _parseScale.scale,
        realScaleType = _parseScale.realScaleType;

    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _extends({}, axis, { realScaleType: realScaleType }));

    if (axisType === 'xAxis') {
      needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }

    var finalAxis = _extends({}, axis, ticks, {
      realScaleType: realScaleType, x: x, y: y, scale: scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height
    });

    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks);

    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }

    return _extends({}, result, _defineProperty({}, id, finalAxis));
  }, {});
};

export var rectWithPoints = function rectWithPoints(_ref, _ref2) {
  var x1 = _ref.x,
      y1 = _ref.y;
  var x2 = _ref2.x,
      y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};

/**
 * Compute the x, y, width, and height of a box from two reference points.
 * @param  {Object} coords     x1, x2, y1, and y2
 * @return {Object} object
 */
export var rectWithCoords = function rectWithCoords(_ref3) {
  var x1 = _ref3.x1,
      y1 = _ref3.y1,
      x2 = _ref3.x2,
      y2 = _ref3.y2;
  return rectWithPoints({ x: x1, y: y1 }, { x: x2, y: y2 });
};

export var ScaleHelper = (_temp = _class = function () {
  _createClass(ScaleHelper, null, [{
    key: 'create',
    value: function create(obj) {
      return new ScaleHelper(obj);
    }
  }]);

  function ScaleHelper(scale) {
    _classCallCheck(this, ScaleHelper);

    this.scale = scale;
  }

  _createClass(ScaleHelper, [{
    key: 'apply',
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          bandAware = _ref4.bandAware;

      if (value === undefined) {
        return undefined;
      } else if (bandAware) {
        var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(value) + offset;
      }
      return this.scale(value);
    }
  }, {
    key: 'isInRange',
    value: function isInRange(value) {
      var range = this.range();

      var first = range[0];
      var last = range[range.length - 1];

      return first <= last ? value >= first && value <= last : value >= last && value <= first;
    }
  }, {
    key: 'domain',
    get: function get() {
      return this.scale.domain;
    }
  }, {
    key: 'range',
    get: function get() {
      return this.scale.range;
    }
  }, {
    key: 'rangeMin',
    get: function get() {
      return this.range()[0];
    }
  }, {
    key: 'rangeMax',
    get: function get() {
      return this.range()[1];
    }
  }, {
    key: 'bandwidth',
    get: function get() {
      return this.scale.bandwidth;
    }
  }]);

  return ScaleHelper;
}(), _class.EPS = 1e-4, _temp);

export var LabeledScaleHelper = function () {
  _createClass(LabeledScaleHelper, null, [{
    key: 'create',
    value: function create(obj) {
      return new this(obj);
    }
  }]);

  function LabeledScaleHelper(scales) {
    _classCallCheck(this, LabeledScaleHelper);

    this.scales = _mapValues(scales, ScaleHelper.create);
    Object.assign(this, this.scales);
  }

  _createClass(LabeledScaleHelper, [{
    key: 'apply',
    value: function apply(coords) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          bandAware = _ref5.bandAware;

      var scales = this.scales;

      return _mapValues(coords, function (value, label) {
        return scales[label].apply(value, { bandAware: bandAware });
      });
    }
  }, {
    key: 'isInRange',
    value: function isInRange(coords) {
      var scales = this.scales;

      return _every(coords, function (value, label) {
        return scales[label].isInRange(value);
      });
    }
  }]);

  return LabeledScaleHelper;
}();