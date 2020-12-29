<script>
	import ripple from './ripple';
</script>

<main>
	<h1>Hello !</h1>
	<button use:ripple>Click Me</button>
	<button class="round" use:ripple>Click Me</button>
	<div style="position:relative" use:ripple={{size:(i)=>Math.random()}}><span style="background-color:red">x</span></div>
	<div style="position:relative">
		<button use:ripple class="bigborder">Click Me</button>
		<button class="round" use:ripple>Click Me</button>
	</div>
	<button style="position:relative;width:400px;height:400px;overflow:hidden;border-radius:40%;border:10px solid green;">
		<svg width={600} height={600} style="position:absolute;top:0;left:0;"><rect width="600" height="600" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" /></svg>
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	button, button:active {
		background-color:aquamarine;
		
		padding:1rem;
	}
	button{
		border:1px solid blue;
	}
	button:active{
		border: 1px solid black;
	}
	.round{
		border-radius: 50%;
	}
	div{
		background-color: burlywood;
		border-radius: 2rem;
		border: 10px solid red;
		width:300px;
		height:200px;
	}
	.bigborder, .bigborder:active{
		border-width:3rem;
	}
</style>