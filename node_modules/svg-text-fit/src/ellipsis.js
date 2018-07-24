import Kapsule from 'kapsule';

export default Kapsule({
    props: {
        maxWidth: { default: Infinity }
    },
    init(el, state) {
        state.el = el;
    },
    update(state) {
        const origTxt = state.el.textContent;
        let nChars = Math.round(origTxt.length*state.maxWidth/state.el.getBBox().width*1.2);  // Start above
        while(--nChars && state.maxWidth/state.el.getBBox().width<1){
            state.el.textContent = abbreviateText(origTxt, nChars);
        }

        //

        function abbreviateText(txt, maxChars) {
            return txt.length<=maxChars?txt:(
                txt.substring(0, maxChars*2/3)
                + '...'
                + txt.substring(txt.length - maxChars/3, txt.length)
            );
        }
    }
});