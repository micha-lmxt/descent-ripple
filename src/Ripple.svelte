<script>
    import { onDestroy, onMount } from "svelte";
    import { fup } from "./ripplehelpers";

    export let node;
    export let nLines = 10;
    export let nCircles = 1;
    export let lineBreakDist = 0.3;
    export let randomness = 0;
    export let backstep = 0;
    export let rotation = (i) => 20 * Math.sin((Math.PI * i) / 90);
    export let forceRelative = true;
    export let forceOverflowHidden = true;
    export let size = 1;
    export let timeToRemove = 500;
    export let circleRadius = 1;
    export let lineProps = {
        fill: "none",
        "stroke-width": "10",
        stroke: "rgba(99,1,1,.5)",
    };
    export let linesInAnimation;
    export let linesOutAnimation;
    export let linesInAnimationProps = { duration: 500 };
    export let linesOutAnimationProps = { duration: 500, delay: 0 };
    export let circleInAnimation;
    export let circleOutAnimation;
    export let circleOutAnimationProps = { duration: 500 };
    export let circleInAnimationProps = { duration: 700, start: 0 };
    export let circleProps = { fill: "rgba(255,9,9,0.4)" };
    export let svgStyle = "position:absolute;overflow:hidden;top:0px;left:0px;";
    
    let _rotation;
    $: _rotation = fup(rotation);
    let _lineProps;
    $: _lineProps = fup(lineProps);
    let _outLine;
    $: _outLine = fup(linesOutAnimationProps);
    let _inLine;
    $: _inLine = fup(linesInAnimationProps);
    let _size;
    $: _size = fup(size);
    let _inCircle;
    $: _inCircle = fup(circleInAnimationProps);
    let _outCircle;
    $: _outCircle = fup(circleOutAnimationProps);
    let _circleProps;
    $: _circleProps = fup(circleProps);
    let _circleRadius;
    $: _circleRadius = fup(circleRadius);

    let counter = 0;
    let lines = [];
    let clicked = false;
    let svgWidth = 1;
    let circles;
    let svgHeight = 1;
    
    let timeOut;
    let svg;

    const addLinesAndCircles = (ox, oy, d) => {
        const coun = counter++;
        const ls = Array(nLines);

        for (let i = 0; i < nLines; i++) {
            let s = _size(i);
            if (typeof s === "string") {
                s = parseFloat(s);
            } else {
                s *= d;
            }
            const length = s;
            let path = "M" + ox + " " + oy;
            const k = lineBreakDist === 0 ? length : lineBreakDist;
            let j = 0;
            let dist = 0;
            while (dist < length) {
                dist += k;
                j++;
                const angle =
                    (2 * Math.PI * i) / nLines + (Math.PI * _rotation(j)) / 180;
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
            ls[i] = { path: path + "M0 0", id: coun.toString() + "-" + i };
        }
        lines = ls;

        circles = Array(nCircles)
            .fill()
            .map((v, i) => {
                let cr = _circleRadius(i);
                if (typeof cr === "number"){
                    cr *= d;
                }else{
                    cr = parseFloat(cr);
                }
                return {
                    x: ox,
                    y: oy,
                    r: cr,
                    id: coun.toString() + "+" + i,
                };
            });

        timeOut = setTimeout(removeLinesAndCircles, timeToRemove);
    };
    const removeLinesAndCircles = () => {
        lines = [];
        circles = [];
    };

    const addSVG = (target, px, py) => {
        svgWidth = target.clientWidth + 1;
        svgHeight = target.clientHeight + 1;

        timeOut = setTimeout(
            addLinesAndCircles,
            1,
            px,
            py,
            Math.sqrt(svgWidth * svgWidth + svgHeight * svgHeight)
        );
    };

    const onMouseDown = (event) => {
        removeLinesAndCircles();
        clicked = true;
        const rect = node.getBoundingClientRect();
        const computed = window.getComputedStyle(node);
        if (
            forceRelative &&
            computed.position !== "absolute" &&
            computed.position !== "relative"
        ) {
            node.style.position = "relative";
        }

        if (
            forceOverflowHidden &&
            (computed.overflowX !== "hidden" || computed.overflowY !== "hidden")
        ) {
            node.style.overflowX = "hidden";
            node.style.overflowY = "hidden";
        }
        let dx =
            event.clientX -
            rect.left -
            (parseFloat(computed.borderLeftWidth) || 0);
        let dy =
            event.clientY -
            rect.top -
            (parseFloat(computed.borderTopWidth) || 0);
        timeOut = setTimeout(addSVG, 1, node, dx, dy);
    };

    onMount(() => {
        node.addEventListener("mousedown", onMouseDown);
        const computed = window.getComputedStyle(node);
    });

    onDestroy(() => {
        node.removeEventListener("mousedown", onMouseDown);
        if (timeOut) {
            clearTimeout(timeOut);
        }
    });
</script>

{#if clicked}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        bind:this={svg}
        style={svgStyle}
        width={svgWidth}
        height={svgHeight}>
        {#each lines as line, i (line.id)}
            {#if line}
                <path
                    d={line.path}
                    in:linesInAnimation={_inLine(i)}
                    out:linesOutAnimation={_outLine(i)}
                    {..._lineProps(i)} />
            {/if}
        {/each}
        {#each circles as circle, i (circle.id)}
            <g transform={'translate(' + circle.x + ' ' + circle.y + ')'}>
                <circle
                    cx={0}
                    cy={0}
                    r={circle.r}
                    in:circleInAnimation={_inCircle(i)}
                    out:circleOutAnimation={_outCircle(i)}
                    {..._circleProps(i)} />
            </g>
        {/each}
    </svg>
{/if}
