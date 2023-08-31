<script setup>
	import HeaderAndText from '@/components/HeaderAndText.vue';
	import GetFreeQuotes from '@/components/buttons/GetFreeQuotes.vue';
</script>

<template>
	<section class="call-to-action one">
		<inner-column>
			<div class="cta-card">
				<HeaderAndText />

				<GetFreeQuotes />
			</div>
		</inner-column>
	</section>
</template>

<style lang="scss">
	.call-to-action.one {
		text-align: center;

		inner-column {
			margin: 0 auto;
			max-width: 1200px;
		}
	}

	.call-to-action .header {
		margin-top: 1.5rem;
		text-transform: capitalize;
		font-weight: 500;
	}

	.cta-card {
		background-color: #dcfeb7;
		margin: 2.5rem;
		padding: 3.75rem 1.6875rem;
	}

	@media (min-width: 720px) {
		.cta-card {
			padding: 3.75rem 7.75rem;
		}
	}
</style>
