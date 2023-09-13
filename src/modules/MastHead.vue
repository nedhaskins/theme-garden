<script setup>
	import { RouterLink } from 'vue-router';
</script>
<template>
	<section class="navigation one">
		<svg-wrapper class="header-logo">
			<svg
				width="134"
				height="35"
				viewBox="0 0 134 35"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				xmlns:serif="http://www.serif.com/"
				style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
			>
				<rect class="rectangle" x="0" y="0" width="134" height="35" style="fill: #ebebeb" />
			</svg>
		</svg-wrapper>

		<nav>
			<ul>
				<!--future RouterLinks -->
				<a href="#">Homepage 1</a>
				<a href="homepage-2.php">Homepage 2</a>
				<a href="homepage-3.php">Homepage 3</a>
			</ul>
		</nav>

		<div class="navigation-right">
			<svg-wrapper>
				<svg width="53" height="25" viewBox="0 0 53 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						class="outline"
						d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
						stroke=""
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>

					<path
						class="outline"
						d="M2 12.5H22"
						stroke=""
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>

					<path
						class="outline"
						d="M12 2.5C14.5013 5.23835 15.9228 8.79203 16 12.5C15.9228 16.208 14.5013 19.7616 12 22.5C9.49872 19.7616 8.07725 16.208 8 12.5C8.07725 8.79203 9.49872 5.23835 12 2.5V2.5Z"
						stroke=""
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>

					<path
						class="text"
						d="M32.0114 18V6.36364H39.8523V8.39205H34.4716V11.1648H39.4489V13.1932H34.4716V15.9716H39.875V18H32.0114ZM51.7412 6.36364V18H49.6162L44.5537 10.6761H44.4685V18H42.0082V6.36364H44.1673L49.1901 13.6818H49.2923V6.36364H51.7412Z"
						fill=""
					/>
				</svg>
			</svg-wrapper>

			<a class="login" href="#">Login</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	/*put this first one into universal module traits*/

	.navigation {
		padding: var(--space-s-m);
	}

	nav ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: var(--space-l);
		padding: var(--space-m);
		text-align: center;
	}

	.navigation-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-m);

		svg-wrapper {
			.outline {
				stroke: black;
			}

			.text {
				fill: black;
			}
		}

		/* em values relative to this button's values */
		.login {
			border: none;
			background-color: green;
			color: white;
			padding: 0.5em 1.375em;
			border-radius: 0.3125em;
			letter-spacing: 0.02875em;
		}
	}

	@media (min-width: 500px) {
		.navigation {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;
		}
	}

	@media (min-width: 860px) {
		.navigation-right {
			flex-direction: row;
		}
	}
</style>
