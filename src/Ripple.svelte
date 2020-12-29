<script>
    import { onDestroy, onMount } from "svelte";
    import { draw, fade,scale } from "svelte/transition";

    import {fup} from './ripplehelpers';


    export let node;
    export let nLines = 10;
    export let lineBreakDist = .3;
    export let randomness = 1;
    export let backstep = 0;
    export let rotation = (i) =>  20 * Math.sin(Math.PI * i / 90);
    let _rotation;
    $: _rotation = fup(rotation);
    export let forceRelative=true;
    export let forceOverflowHidden=true;
    export let size = 1;
    export let timeToRemove = 500;
    export let circleRadius = 1;
    export let lineProps = {fill:"none","stroke-width":"10",stroke:"rgba(99,1,1,.5)"};
    let _lineProps;
    $: _lineProps=fup(lineProps);
    export let linesInDrawAnimation = { duration: 500 };
    export let linesOutFadeAnimation = { duration: 500, delay: 0 };
    export let circleOutFadeAnimation = {duration:500};
    export let circleInScaleAnimation = {duration:700, start:0};
    export let circleProps = {fill:"rgba(255,9,9,0.4)"};

    let _outLine;
    $: _outLine=fup(linesOutFadeAnimation);
    let _inLine;
    $:_inLine = fup(linesInDrawAnimation);
    let _size;
    $: _size = fup(size);

    let counter = 0;
    let lines = [];
    let clicked = false;
    let svgWidth = 1;
    let circle;
    let svgHeight = 1;
    let svgStyle = "position:absolute;overflow:hidden;top:0px;left:0px;";
    let timeOut;
    let svg;
    const addLines = (ox, oy, d) => {
        const coun = counter++;
        const ls = Array(nLines);

        for (let i = 0; i < nLines; i++) {
            const length = _size(i) * d;
            let path = "M" + ox + " " + oy;
            const k = lineBreakDist===0? length : lineBreakDist;
            let j=0;
            let dist = 0;
            while (dist < length ) {
                dist += k;
                j++;
                const angle =
                    (2 * Math.PI * i) / nLines + Math.PI * _rotation(j)/180;
                const dirx = Math.sin(angle);
                const diry = Math.cos(angle);
                // absolute move
                path +=
                    " L" +
                    (ox +
                        (j + 1) * k * dirx +
                        k * randomness * (Math.random() - 0.5)) +
                    " " +
                    (oy +
                        (j + 1) * k * diry +
                        k * randomness * (Math.random() - 0.5));
                if (backstep > 0) {
                    // relative move
                    path +=
                        " l" +
                        -backstep *
                            k *
                            (dirx + randomness * (Math.random() - 0.5)) +
                        " " +
                        -backstep *
                            k *
                            (diry + randomness * (Math.random() - 0.5));
                }
            }
            ls[i] = { path: path+"M0 0", id: coun.toString() + "-" + i };
        }
        lines = ls;
        const cr = circleRadius * d;
        circle = {x:ox,y:oy,r:cr};
        timeOut = setTimeout(removeLines, timeToRemove);
    };
    const removeLines = () => {
        lines = [];
        circle=undefined;
    };

    const addSVG = (target, px, py,computed) => {
        
        
        if (forceRelative && computed.position!=="absolute" && computed.position!=="relative"){
            target.style.position="relative";
        }
        
        if (forceOverflowHidden && (
            computed.overflowX!=="hidden" || computed.overflowY!=="hidden"
        )){
            target.style.overflowX = "hidden";
            target.style.overflowY = "hidden";
        }
        svgWidth = target.clientWidth+1;
        svgHeight = target.clientHeight+1;

        
        timeOut = setTimeout(
            addLines,
            1,
            px,
            py,
            Math.sqrt(svgWidth * svgWidth + svgHeight * svgHeight)
        );
    };

    const onMouseDown = (event) => {
        removeLines();
        clicked = true;
        const rect = node.getBoundingClientRect();
        const computed = window.getComputedStyle(node);
        let dx = event.clientX - rect.left - (parseFloat(computed.borderLeftWidth)||0);
        let dy = event.clientY - rect.top - (parseFloat(computed.borderTopWidth)||0) ;
        timeOut = setTimeout(addSVG, 1, node, dx,dy,computed);
    };
    onMount(() => {
        node.addEventListener("mousedown", onMouseDown);
    });
    onDestroy(() => {
        node.removeEventListener("mousedown", onMouseDown);
        if (timeOut) {
            clearTimeout(timeOut);
        }
    });
</script>

{#if clicked}
    <svg xmlns="http://www.w3.org/2000/svg" bind:this={svg} style={svgStyle} width={svgWidth} height={svgHeight}>
        {#each lines as line, i (line.id)}
            {#if line}
                <path
                    d={line.path}
                    in:draw={_inLine}
                    out:fade={_outLine}
                    {..._lineProps(i)}/>
            {/if}
            
        {/each}
        {#if circle}
            <g transform={"translate("+ circle.x+" " + circle.y +")"} >
                <circle cx={0} cy={0}  r={circle.r}  in:scale={circleInScaleAnimation} out:fade={circleOutFadeAnimation} {...circleProps}/>
            </g>
            {/if}
    </svg>
{/if}
