import { cubicInOut } from 'svelte/easing';

export const fup = (x)=>{
    if (typeof x === "function"){
        return x;
    }
    return (i)=>x;
}

export function drawReverse(node, {
	delay = 0,
	speed,
	duration,
	easing = cubicInOut
}){
	const len = node.getTotalLength();

	if (duration === undefined) {
		if (speed === undefined) {
			duration = 800;
		} else {
			duration = len / speed;
		}
	} else if (typeof duration === 'function') {
		duration = duration(len);
	}

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `stroke-dasharray: 0 ${u * len} ${t * len} 0`
	};
}