import Kapsule from 'kapsule';

export default Kapsule({
    props: {
        bbox: { default: { width: null, height: null} },
        passes: { default: 3 }
    },
    init(el, state) {
        state.el = el;
    },
    update(state) {
        [...Array(state.passes).keys()].some(() => {
            const startSize = parseInt(state.el.style['font-size'].split('px')[0]) || 20;
            const bbox = state.el.getBBox();
            const newSize = Math.floor(startSize * Math.min(state.bbox.width / bbox.width, state.bbox.height / bbox.height));

            if (newSize === startSize) return true; // Shortcut out

            state.el.style['font-size'] = newSize + 'px';
        });
    }
});