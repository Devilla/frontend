import { select as d3Select } from 'd3-selection';
import Kapsule from 'kapsule';

export default Kapsule({
    props: {
        imgUrl: {},
        x: { default: 0 },
        y: { default: 0 },
        maxWidth: { default: 20 },
        maxHeight: { default: 20 },
        svgAlign: { default: 'xMidYMid' }
    },
    methods: {
        show(state) {
            state.img
                .attr('width', state.maxWidth)
                .attr('height', state.maxHeight);

            return this;
        },
        hide(state) {
            state.img
                .attr('width', 0)
                .attr('height', 0);

            return this;
        }
    },
    init(el, state) {
        state.img = d3Select(el).append('image');
    },
    update(state) {
        state.img
            .attr('xlink:href', state.imgUrl)
            .attr('x', state.x)
            .attr('y', state.y)
            .attr('width', state.maxW)
            .attr('height', state.maxH)
            .attr('preserveAspectRatio', state.svgAlign + ' meet');
    }
});