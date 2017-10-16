import * as echarts from '../echarts';
import * as zrUtil from 'zrender/core/util';

import '../coord/cartesian/Grid';
import './bar/PictorialBarSeries';
import './bar/PictorialBarView';

import barLayoutGrid from '../layout/barGrid';
import visualSymbol from '../visual/symbol';

// In case developer forget to include grid component
import '../component/gridSimple';

echarts.registerLayout(zrUtil.curry(
    barLayoutGrid, 'pictorialBar'
));
echarts.registerVisual(zrUtil.curry(
    visualSymbol, 'pictorialBar', 'roundRect', null
));
