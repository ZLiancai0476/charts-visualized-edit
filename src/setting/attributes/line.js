import BaseAttr from './base-attr';//引入通用属性
import GridAttr from './../global/grid-attributes';//网格属性
import ToolTip from './../global/tooltip-attributes';//提示框
export default {
    ...BaseAttr,
    ...GridAttr,
    ...ToolTip
}