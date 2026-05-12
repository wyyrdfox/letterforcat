<script>
    import "$lib/moon.css"
	import "$lib/wave.css"
	import "$lib/stars.css"
    import {Howl, Howler} from 'howler';

    let { showModal = $bindable()} = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
		dialog.scrollTop = 0;
	});

			var sound = new Howl({
	src: ['/UGHBMFMF.mp3'],
	autoplay: true,
	loop: true,
	volume: 0.25,
	onend: function() {
		console.log('Finished!');
	}
	});

    sound.play();
</script>

<head>
    <title>for you, the moon</title>
</head>


<div class="wave"></div>
<div class="stars">
	<div class="star1"></div>
	<div class="star2"></div>
	<div class="star3"></div>
	<div class="star4"></div>
	<div class="star5"></div>
	<div class="star6"></div>
	<div class="star7"></div>
	<div class="star8"></div>
	<div class="star9"></div>
	<div class="star10"></div>
	<div class="star11"></div>
	<div class="star12"></div>
	<div class="star13"></div>
</div>

<div class="main">
    <h1 class="main_header" style="text-align: center; color: white; font-family: 'Courier New', Courier, monospace;">
        Click the moon to open up the letter :3
    </h1>

    <div style="text-align: center;">
        <button aria-label="Open" class="moon"  type="button" onclick={() => (showModal = true)}></button>
    </div>
</div>

<!--letter frame-->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div class="letter_container">
		<div class="letter">
			<h2 class="letter_header">つきがほんとうにきれいですね</h2>
			<p class="letter_paragraph" style="text-align: justify;">
				As I lie here gazing up upon your radiant and iridescent beauty, I have long since admired your brilliance as well as every quirky little detail a celestial goddess like you exhibits. Realizing as well your significance to all those whom you orbit around throughout the ages that have passed and into the years yet to come. Furthermore, how you govern the night and life’s intrinsic rhythm, as well as how the sea rises and crashes in your presence. All of these traits of yours make me fall that much more for you. To you, the moon that shines so brightly amidst my darkest nights, know that I truly do adore you and everything that you are. Through all your phases and changes, you are and will always be dearest to me. I will love the moon more than she will ever come to fathom it.
			</p>
			<br>
			<p>-Your Canis vulpes / Lycalopex</p>
			<br>
			<img class="nomnom" src="/nom.webp" alt="Farrel eats Chandras brain lmao">
			<p style="text-align: center;">happy 19th birthday おねえちゃん :3</p>
			<br>
			<!-- svelte-ignore a11y_autofocus -->
			<button class="close_letter" onclick={() => dialog.close()}>close letter</button>
		</div>
	</div>
</dialog>

<style>
	
	

    .main{
        z-index: 0;
        
    }


	dialog {
		border-radius: 10px;
		width: 500px;
		height: 500px;
		border: none;
		background-color: #E0D3AF;
		font-family: 'Courier New', Courier, monospace;
	}

	dialog::backdrop {
		opacity: 0;
	}

	.letter{
		margin: 5%;
	}

	.nomnom {
		display: block;
  		margin-left: auto;
  		margin-right: auto;
		width: 50%;
		height: auto;
	}
	
	.close_letter{
		border-width: 2px;
		border-radius: 5px;
		background-image: none;
		background-color: #E0D3AF;
		font-family: 'Courier New', Courier, monospace;
		cursor: pointer;
		border: none
	}

</style>
