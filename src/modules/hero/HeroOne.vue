<script setup>
	import HeroButtons from '@/components/buttons/HeroButtons.vue';
</script>

<template>
	<section class="hero one">
		<inner-column>
			<div class="header-and-text">
				<h1>Suscipit Massa Aliquam<br />Proin Amet</h1>
				<p>
					Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum
					pellentesque lorem. Malesuada lobortis tristique tortor.
				</p>
			</div>

			<HeroButtons />
		</inner-column>
	</section>
</template>

<style lang="scss" scoped>
	.hero.one {
		background-image: unset;
		background-color: #dcfeb7;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		inner-column {
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-width: 80%;
			padding: var(--space-5xl) 0;
		}

		p {
			text-align: center;
		}

		h1 {
			text-align: center;
		}
	}
</style>
