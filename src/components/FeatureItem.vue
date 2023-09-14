<template>
	<div class="feature-item">
		<svg-wrapper class="circle">
			<svg
				viewBox="0 0 316 316"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				xmlns:serif="http://www.serif.com/"
				style="
					fill-rule: evenodd;
					clip-rule: evenodd;
					stroke-linecap: round;
					stroke-linejoin: round;
					stroke-miterlimit: 1.5;
				"
			>
				<circle cx="157.967" cy="157.967" r="155.884" style="fill: #fff; stroke: #000; stroke-width: 4.17px" />
			</svg>
		</svg-wrapper>

		<div class="feature-text">
			<h3>Sit quam gravida</h3>
			<p>Et hendrerit turpis habitant cursus semper ultrices in nunc. Erat eget etiam senectus vestibulum risus.</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.feature-item {
		display: flex;
		flex-direction: row;
		gap: var(--space-m);
	}

	.circle {
		display: flex;
		align-items: center;
		svg {
			width: 3.75rem;
			height: 3.75rem;
		}
	}

	.feature-text p {
		margin-top: var(--space-s);
	}

	@media (min-width: 960px) {
		.feature-list.one .feature-item {
			margin-top: unset;
		}
	}
</style>
