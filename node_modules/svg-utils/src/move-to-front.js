import Kapsule from 'kapsule';

export default Kapsule({
    init(el) { el.parentNode.appendChild(el); }
});