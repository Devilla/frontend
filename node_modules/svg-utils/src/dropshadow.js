import { select as d3Select } from 'd3-selection';
import Kapsule from 'kapsule';

export default Kapsule({
    // Use with: .attr('filter', 'url(#<shadowId>)'))
    props: {
        id: { default: `areaGradient${Math.round(Math.random()*10000)}` }
    },
    init(el, state) {
        state.filter = d3Select(el).append('defs')
            .append('filter')
            .attr('height', '130%');

        state.filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', 3);

        state.filter.append('feOffset')
            .attr('dx', 2)
            .attr('dy', 2)
            .attr('result', 'offsetblur');

        const feMerge = state.filter.append('feMerge');

        feMerge.append('feMergeNode');
        feMerge.append('feMergeNode')
            .attr('in', 'SourceGraphic');
    },
    update(state) {
        state.filter.attr('id', state.id);
    }
});