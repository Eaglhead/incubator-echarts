import * as zrUtil from 'zrender/core/util';
import Axis from '../Axis';

function AngleAxis(scale, angleExtent) {

    angleExtent = angleExtent || [0, 360];

    Axis.call(this, 'angle', scale, angleExtent);

    /**
     * Axis type
     *  - 'category'
     *  - 'value'
     *  - 'time'
     *  - 'log'
     * @type {string}
     */
    this.type = 'category';
}

AngleAxis.prototype = {

    constructor: AngleAxis,

    /**
     * @override
     */
    pointToData: function (point, clamp) {
        return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
    },

    dataToAngle: Axis.prototype.dataToCoord,

    angleToData: Axis.prototype.coordToData
};

zrUtil.inherits(AngleAxis, Axis);

export default AngleAxis;