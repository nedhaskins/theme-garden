<script setup></script>

<template>
	<div class="hero-buttons">
		<a class="get-started">Get Started</a>

		<a class="start-free-trial">Start Free Trial</a>
	</div>
</template>

<style lang="scss" scoped>
	.hero-buttons {
		display: flex;
		flex-direction: column;
		gap: 1.875rem;
		margin-top: 3.25rem;

		a {
			text-align: center;
		}
	}

	@media (min-width: 600px) {
		.hero-buttons {
			flex-direction: row;
			justify-content: center;
		}
	}

	.get-started {
		background-color: green;
		color: white;
	}

	.start-free-trial {
		background-color: white;
		color: green;
		border: 1px solid green;
	}

	.get-started,
	.start-free-trial {
		padding: 0.9375rem 3.125rem;
	}
</style>
