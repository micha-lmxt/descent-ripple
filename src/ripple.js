import Ripple from './Ripple.svelte';
import { draw, fade, scale, blur, fly } from "svelte/transition";
import {drawReverse} from './ripplehelpers';


export default function (node, params={}) {
    let props = Object.assign({}, params, { node: node });
    
    props = prepareProps(props);

    
    const ripple = new Ripple({
        target: node,
        props: props
    });

    return {
        update: (newParams)=>{
            props = prepareProps(Object.assign(props,newParams));
            ripple.$set(props);
        },
        destroy: () => ripple.$destroy(),
    };

}

const applyAnimation = (props,s, defaul) => {
    if (!props[s]) {
        props[s] = defaul;
    } else {
        if (props[s] === "draw") { props[s] = draw };
        if (props[s] === "fade") { props[s] = fade };
        if (props[s] === "scale") { props[s] = scale };
        if (props[s] === "blur") { props[s] = blur };
        if (props[s] === "fly") { props[s] = fly };
        if (props[s] === "draw-reverse"){props[s] = drawReverse}
    }
    return props;
}

const prepareProps = (props)=>{
    applyAnimation(props,"linesInAnimation", draw);
    applyAnimation(props,"linesOutAnimation", fade);
    applyAnimation(props,"circleInAnimation", scale);
    applyAnimation(props,"circleOutAnimation", fade);
    return props;
}
