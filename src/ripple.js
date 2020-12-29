import Ripple from './Ripple.svelte';


export default function (node, params) {
    const props = Object.assign({},params,{node:node});
    const ripple = new Ripple({
        target: node,
        props: props
    });

    return {
        onDestroy: () => ripple.$destroy(),
    };

}
