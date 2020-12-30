import Ripple from './Ripple.svelte';
import { draw, fade, scale, blur, fly } from "svelte/transition";


export default function (node, params) {
    const props = Object.assign({}, params, { node: node });
    const applyAnimation = (s, defaul) => {
        if (!props[s]) {
            props[s] = defaul;
        } else {
            if (props[s] === "draw") { props[s] = draw };
            if (props[s] === "fade") { props[s] = fade };
            if (props[s] === "scale") { props[s] = scale };
            if (props[s] === "blur") { props[s] = blur };
            if (props[s] === "fly") { props[s] = fly };
        }
    }



    applyAnimation("linesInAnimation", draw);
    applyAnimation("linesOutAnimation", fade);
    applyAnimation("circleInAnimation", scale);
    applyAnimation("circleOutAnimation", fade);

    const ripple = new Ripple({
        target: node,
        props: props
    });

    return {
        onDestroy: () => ripple.$destroy(),
    };

}
