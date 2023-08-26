<script setup>
	import { RouterLink } from 'vue-router';
</script>
<template>
	<section class="navigation one">
		<logo-wrapper><img src="@/assets/images/logo-placeholder.svg" /></logo-wrapper>

		<nav>
			<ul>
				<!--future RouterLinks -->
				<a href="#">Homepage 1</a>
				<a href="homepage-2.php">Homepage 2</a>
				<a href="homepage-3.php">Homepage 3</a>
			</ul>
		</nav>

		<div class="navigation-right">
			<logo-wrapper><img src="@/assets/images/language.svg" /></logo-wrapper>

			<a class="login" href="#">Login</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.navigation.one {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
