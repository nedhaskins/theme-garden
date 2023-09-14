<template>
	<div class="header-and-text">
		<p class="eyebrow">Rhoncus, accumsan dictum</p>
		<h2 class="header">Etiam nulla lectus amet nunc molestie at vulputate.</h2>
		<p class="text">Neque, pulvinar vestibulum non aliquam.</p>
	</div>
</template>

<style lang="scss" scoped>
	.header-and-text {
		display: flex;
		flex-direction: column;
		align-items: center;

		// .header::first-line {
		// 	line-height: 100%;
		// }

		.text {
			margin-top: var(--space-s);
		}
	}
</style>
