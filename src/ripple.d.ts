interface RippleParams {
    /** Number of lines. Should be >= 1 */
    nLines?: number,
    /** Line Break Distance. after this distance in pixels lines are breaked, if randomness and/or rotation is assigned. Should be >=0 */
    lineBreakDist?: number,
    /** Randomness. How random the lines should be broken. If 0 lines are straight */
    randomness?: number,
    /** Backstep. Together with randomness this can create zig-zag effect. Typically between 0 and 1 */
    backstep?: number,
    /** Rotation. In degrees. Can create spiral effects. Can be a fixed value, or a function of degrees to assign per line-break (set lineBreakDist > 0) */
    rotation?: number | ((lineBreak: number) => number),
    /** Force button element to have style `position:relative` or `position:absolute`. Style is necessary for correct positioning of the ripple. Default true.*/
    forceRelative?: boolean,
    /** Force button element to have style `overflow:hidden`. Style is necessary so that ripple respects bounds of button. Default true. */
    forceOverflowHidden?: boolean,
    /** Size. Is relative to diagonal of element. Can be single value or function on indexes of lines (set nLines>0). Should be >0 and <=1. Default 1. */
    size?: number | ((lineIndex: number) => number),
    /** Time To Remove. Milliseconds until fading out begins. Default 500 */
    timeToRemove?: number,
    /** Animation parameters for the lines draw effect. Can be a function on the line indexes, eg. (i)=>({delay:30*i}) */
    linesInDrawAnimation?: DrawParams | ((lineIndex: number) => DrawParams),
    /** Animation parameters for the lines fade out effect. Can be a function on the line indexes, eg. (i)=>({delay:30*i}) */
    linesInDrawAnimation?: FadeParams | ((lineIndex: number) => FadeParams),
    /** Line props. */
    lineProps?: ( CustomSVGProps | ((lineIndex: number) => CustomSVGProps))
    /** Circle radius. Relative to button diagonal. Default 1 */
    circleRadius?: number,
    /** Animation parameters for the circle scale in effect. */
    circleInScaleAnimation?:ScaleParams
    /** Animation parameters for the circle fade out effect. */
    circleOutFadeAnimation?:FadeParams,
    /** Circle props. */
    circleProps: CustomSVGProps,
}

type CustomSVGProps = { [key: string]: any };

/** From Svelte Transitions */
interface DrawParams {
    delay?: number;
    speed?: number;
    duration?: number | ((len: number) => number);
    easing?: EasingFunction;
}

interface ScaleParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    start?: number;
    opacity?: number;
}

interface FadeParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
}
declare type EasingFunction = (t: number) => number;

export default function (node: Node, params: RippleParams);