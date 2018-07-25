import _isFunction from 'lodash-es/isFunction';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

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
import Label from '../component/Label';
import { LabeledScaleHelper, rectWithPoints } from '../util/CartesianUtils';
import { ifOverflowMatches } from '../util/ChartUtils';
import { isNumOrStr } from '../util/DataUtils';
import { warn } from '../util/LogUtils';
import { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import Rectangle from '../shape/Rectangle';

var ReferenceArea = pureRender(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReferenceArea, _Component);

  function ReferenceArea() {
    _classCallCheck(this, ReferenceArea);

    return _possibleConstructorReturn(this, (ReferenceArea.__proto__ || Object.getPrototypeOf(ReferenceArea)).apply(this, arguments));
  }

  _createClass(ReferenceArea, [{
    key: 'getRect',
    value: function getRect(hasX1, hasX2, hasY1, hasY2) {
      var _props = this.props,
          xValue1 = _props.x1,
          xValue2 = _props.x2,
          yValue1 = _props.y1,
          yValue2 = _props.y2,
          xAxis = _props.xAxis,
          yAxis = _props.yAxis;


      var scale = LabeledScaleHelper.create({ x: xAxis.scale, y: yAxis.scale });

      var p1 = {
        x: hasX1 ? scale.x.apply(xValue1) : scale.x.rangeMin,
        y: hasY1 ? scale.y.apply(yValue1) : scale.y.rangeMin
      };

      var p2 = {
        x: hasX2 ? scale.x.apply(xValue2) : scale.x.rangeMax,
        y: hasY2 ? scale.y.apply(yValue2) : scale.y.rangeMax
      };

      if (ifOverflowMatches(this.props, 'discard') && (!scale.isInRange(p1) || !scale.isInRange(p2))) {
        return null;
      }

      return rectWithPoints(p1, p2);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          x1 = _props2.x1,
          x2 = _props2.x2,
          y1 = _props2.y1,
          y2 = _props2.y2,
          className = _props2.className,
          alwaysShow = _props2.alwaysShow,
          clipPathId = _props2.clipPathId;


      warn(alwaysShow !== undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

      var hasX1 = isNumOrStr(x1);
      var hasX2 = isNumOrStr(x2);
      var hasY1 = isNumOrStr(y1);
      var hasY2 = isNumOrStr(y2);

      if (!hasX1 && !hasX2 && !hasY1 && !hasY2) {
        return null;
      }

      var rect = this.getRect(hasX1, hasX2, hasY1, hasY2);

      if (!rect) {
        return null;
      }

      var shape = this.props.shape;


      var clipPath = ifOverflowMatches(this.props, 'hidden') ? 'url(#' + clipPathId + ')' : undefined;

      return React.createElement(
        Layer,
        { className: classNames('recharts-reference-area', className) },
        this.constructor.renderRect(shape, _extends({ clipPath: clipPath }, this.props, rect)),
        Label.renderCallByParent(this.props, rect)
      );
    }
  }], [{
    key: 'renderRect',
    value: function renderRect(option, props) {
      var rect = void 0;

      if (React.isValidElement(option)) {
        rect = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        rect = option(props);
      } else {
        rect = React.createElement(Rectangle, _extends({}, props, {
          className: 'recharts-reference-area-rect'
        }));
      }

      return rect;
    }
  }]);

  return ReferenceArea;
}(Component), _class2.displayName = 'ReferenceArea', _class2.propTypes = _extends({}, PRESENTATION_ATTRIBUTES, {
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
  x1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}), _class2.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
}, _temp)) || _class;

export default ReferenceArea;