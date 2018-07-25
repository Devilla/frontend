import { select as d3Select } from 'd3-selection';
import Kapsule from 'kapsule';

export default Kapsule({
    props: {
        x: { default: 0 },
        y: { default: 0},
        r: { default: 8 },
        color: { default: 'darkblue' },
        duration: { default: 0.7 },
        angleFull: { default: 120 }
    },
    init(el, state) {
        el = d3Select(el);
        state.path = el.append('path');
        state.transform = state.path.append('animateTransform')
            .attr('attributeName', 'transform')
            .attr('attributeType', 'XML')
            .attr('type', 'rotate')
            .attr('begin', '0s')
            .attr('fill', 'freeze')
            .attr('repeatCount', 'indefinite');
    },
    update(state) {
        state.path
            .attr('d', genDonutSlice(state.x, state.y, state.r, state.r/3, 0, state.angleFull))
            .attr('fill', state.color);

        state.transform
            .attr('from', '0 ' + state.x + ' ' + state.y)
            .attr('to', '360 ' + state.x + ' ' + state.y)
            .attr('dur', state.duration + 's');

        //

        function genDonutSlice(cx, cy, r, thickness, startAngle, endAngle) {
            startAngle = startAngle/180*Math.PI;
            endAngle = endAngle/180*Math.PI;

            const outerR=r;
            const innerR=r-thickness;

            const p=[
                [cx+outerR*Math.cos(startAngle), cy+outerR*Math.sin(startAngle)],
                [cx+outerR*Math.cos(endAngle), cy+outerR*Math.sin(endAngle)],
                [cx+innerR*Math.cos(endAngle), cy+innerR*Math.sin(endAngle)],
                [cx+innerR*Math.cos(startAngle), cy+innerR*Math.sin(startAngle)]
            ];
            const angleDiff = endAngle - startAngle;
            const largeArc = ((angleDiff % (Math.PI * 2)) > Math.PI)?1:0;
            const path = [];

            path.push('M' + p[0].join());
            path.push('A' + [outerR,outerR,0,largeArc,1,p[1]].join());
            path.push('L' + p[2].join());
            path.push('A' + [innerR,innerR,0,largeArc,0,p[3]].join());
            path.push('z');

            return path.join(' ');
        }
    }
});