interface RippleParams {
    /** Number of lines. Should be >= 0 */
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

    /** Size. Is relative to diagonal of element. Can be single value or function on indexes of lines (set nLines>0). Can be relative number or absolute pixel strings eg. "100px". Number should be >0 and <=1. Default 1. */
    size?: number | string | ((lineIndex: number) => number|string),

    /** Time To Remove. Milliseconds until fading out begins. Default 500 */
    timeToRemove?: number,

    /** In-animation type for the lines. Default draw. Can also supply custom function. draw/scale/fade/blur/fly are from [svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
    linesInAnimation?: "draw" | "scale" | "fade" | "blur" | "fly" | "draw-reverse" | ((node: Element, props: object) => TransitionConfig),

    /** Out-animation type for the lines. Default fade. Can also supply custom function. draw/scale/fade/blur/fly are from [svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
    linesOutAnimation?: "draw" | "scale" | "fade" | "blur" | "fly" | "draw-reverse" | ((node: Element, props: object) => TransitionConfig),

    /** Animation parameters for the lines draw effect. Can be a function on the line indexes, eg. (i)=>({delay:30*i}) */
    linesInAnimationProps?: DrawParams | ((lineIndex: number) => DrawParams) | CustomAnimationParams | ((lineIndex: number) => CustomAnimationParams),

    /** Animation parameters for the lines fade out effect. Can be a function on the line indexes, eg. (i)=>({delay:30*i}) */
    linesOutAnimationProps?: FadeParams | ((lineIndex: number) => FadeParams) | CustomAnimationParams | ((lineIndex: number) => CustomAnimationParams),

    /** Line props. */
    lineProps?: (CustomSVGProps | ((lineIndex: number) => CustomSVGProps)),

    /** Number of circles to add. Should be >= 0 */
    nCircles?: number,

    /** In-animation type for the circle. Default scale. Can also supply custom function. draw/scale/fade/blur/fly are from [svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
    circleInAnimation?: "draw" | "scale" | "fade" | "blur" | "fly" | "draw-reverse" | ((node: Element, props: object) => TransitionConfig),

    /** Out-animation type for the circle. Default fade. Can also supply custom function. draw/scale/fade/blur/fly are from [svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
    circleOutAnimation?: "draw" | "scale" | "fade" | "blur" | "fly" | "draw-reverse" | ((node: Element, props: object) => TransitionConfig),

    /** Circle radius. Number is relative to button diagonal, string is absolute, eg. "100px". Default 1 */
    circleRadius?: number| string | ((circleIndex: number)=> number | string),

    /** Animation parameters for the circle scale in effect. */
    circleInAnimationProps?: ScaleParams | CustomAnimationParams

    /** Animation parameters for the circle fade out effect. */
    circleOutAnimationProps?: FadeParams | CustomAnimationParams,

    /** Circle props. */
    circleProps?: CustomSVGProps | ((lineIndex: number) => CustomSVGProps),

}

type CustomSVGProps = { [key: string]: any };

type CustomAnimationParams = { [key: string]: any };

/** Copied from [Svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
interface DrawParams {
    delay?: number;
    speed?: number;
    duration?: number | ((len: number) => number);
    easing?: EasingFunction;
}
/** Copied from [Svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
interface ScaleParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    start?: number;
    opacity?: number;
}
/** Copied from [Svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
interface TransitionConfig {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    css?: (t: number, u: number) => string;
    tick?: (t: number, u: number) => void;
}
/** Copied from [Svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
interface FadeParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
}
/** Copied from [Svelte](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts) */
declare type EasingFunction = (t: number) => number;

export default function (node: Node, params: RippleParams) : {
    onDestroy: () => void,
};