import { scaleLinear as d3ScaleLinear } from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import Kapsule from 'kapsule';

export default Kapsule({
    props: {
        selection: { default: {
            x: [null, null], // [start, end]
            y: [null, null]  // [start, end]
        }},
        xDomain: { onChange(xDomain, state) {
            state.xScale.domain(xDomain);
        }},
        yDomain: { onChange(yDomain, state) {
            state.yScale.domain(yDomain);
        }},
        transitionDuration: 700
    },
    stateInit: {
        xScale: d3ScaleLinear(),
        yScale: d3ScaleLinear()
    },
    init(el, state, {
        width,
        height,
        margin = {top: 2, right: 2, bottom: 2, left: 2 }
    }) {
        state.xScale.range([margin.left, width-state.margin.right]);
        state.yScale.range([margin.top, height-state.margin.bottom]);

        // Build dom
        state.svg = d3Select(el).append('svg')
            .attr('width', width)
            .attr('height', height);

        state.outerBox = state.svg.append('rect')
            .attr('x', state.xScale.range()[0])
            .attr('y', state.yScale.range()[0])
            .attr('rx', 2)
            .attr('ry', 2)
            .attr('width', state.xScale.range()[1])
            .attr('height', state.yScale.range()[1])
            .style('fill', '#EEE')
            .style('stroke', 'grey');

        state.selectionBox = state.svg.append('rect')
            .attr('rx', 1)
            .attr('ry', 1)
            .attr('width', 0)
            .attr('height', 0)
            .style('stroke', 'blue')
            .style('stroke-opacity', 0.6)
            .style('fill', 'blue')
            .style('fill-opacity', 0.3)
    },
    update(state) {
        state.outerBox
            .attr('x', state.xScale.range()[0])
            .attr('y', state.yScale.range()[0])
            .attr('width', state.xScale.range()[1])
            .attr('height', state.yScale.range()[1]);

        state.selectionBox
            .attr('x', state.xScale(state.selection.x[0]))
            .attr('y', state.yScale(state.selection.y[0]))
            .attr('width', state.xScale(state.selection.x[1] - state.selection.x[0]))
            .attr('height', state.yScale(state.selection.y[1] - state.selection.y[0]));
    }
});