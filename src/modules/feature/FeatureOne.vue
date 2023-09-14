<script setup>
	import HeaderAndText from '@/components/HeaderAndText.vue';
	import FeatureItem from '@/components/FeatureItem.vue';
</script>

<template>
	<section class="feature one">
		<div class="feature-head">
			<HeaderAndText />

			<svg-wrapper class="placeholder">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 1912 1182"
					version="1.1"
					style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
				>
					<g>
						<rect x="0" y="0" width="1911.06" height="1181.1" style="fill: #d3ffaf" />
						<g transform="matrix(0.959483,-0.281767,0.0624894,1.02388,-39.4379,-143.357)">
							<text
								x="648.565px"
								y="1039.72px"
								style="font-family: 'Bangers-Regular', 'Bangers'; font-size: 150px"
							>
								PLACEHOLDER
							</text>
						</g>
					</g>
				</svg>
			</svg-wrapper>
		</div>

		<div class="feature-list">
			<FeatureItem />
			<FeatureItem />
			<FeatureItem />
			<FeatureItem />
			<FeatureItem />
		</div>
	</section>
</template>

<style lang="scss">
	.feature .header-and-text {
		text-transform: capitalize;
	}

	.feature.one {
		margin-top: var(--space-2xl);
		padding: 0 var(--space-xl);
	}

	/*this is an example of when NOT to scope CSS to a component*/
	/*pulled in from the HeaderAndText Vue component */
	.feature.one .eyebrow {
		display: none;
	}

	.placeholder,
	.feature-list {
		margin-top: var(--space-m);
	}

	.placeholder {
		margin-left: auto;
		margin-right: auto;
		max-width: 540px;
	}

	.feature-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}

	/* Media queries */

	@media (min-width: 600px) {
		.feature.one {
			padding: 0 var(--space-2xl);
		}
	}

	@media (min-width: 960px) {
		.feature.one {
			display: flex;
			flex-direction: row;
			gap: var(--space-xl);
		}

		.feature-list {
			margin-top: unset;
		}

		.header::first-line {
			line-height: 100%;
		}
	}
</style>
