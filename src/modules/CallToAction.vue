<script setup>
	import HeaderAndText from '@/components/HeaderAndText.vue';
	import GetFreeQuotes from '@/components/buttons/GetFreeQuotes.vue';
</script>

<template>
	<section class="call-to-action">
		<inner-column>
			<div class="cta-card">
				<HeaderAndText />

				<GetFreeQuotes />
			</div>
		</inner-column>
	</section>
</template>

<style lang="scss">
	.call-to-action {
		text-align: center;

		inner-column {
			margin: 0 auto;
			max-width: 1200px;
		}
	}

	.call-to-action .header {
		margin-top: var(--space-s);
		text-transform: capitalize;
		font-weight: 500;
	}

	.cta-card {
		background-color: #dcfeb7;
		margin: var(--space-l);
		padding: var(--space-l);
	}

	@media (min-width: 720px) {
		.cta-card {
			padding: 3.75rem 7.75rem;
		}
	}
</style>
