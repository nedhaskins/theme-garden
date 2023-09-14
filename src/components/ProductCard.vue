<template>
	<li>
		<product-card data-id="">
			<picture class="product-picture">
				<img
					class="product-picture__img"
					width=""
					height=""
					src="@/assets/images/square-placeholder.svg"
					alt="Placeholder"
				/>
			</picture>
			<product-info>
				<h4 class="product-name__copy">Product Name!</h4>
				<p class="product-description__copy">
					Some text that describes what the product is. It could be long or short -- but there needs to be space
					for all of it.
				</p>
			</product-info>
			<p class="product-prices__price">$47.99</p>
		</product-card>
	</li>
</template>
<style lang="scss" scoped>
	product-card {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		border: 1px solid black;
	}

	.product-name__copy,
	.product-prices__price {
		font-weight: 700;
		font-size: var(--step-0);
	}

	.product-name__copy {
		font-size: var(--step-1);
	}

	.product-description__copy {
		font-size: var(--step--1);
		line-height: var(--space-s);
	}

	.product-prices__price {
		margin-top: unset;
		padding: 0 var(--space-s) var(--space-s) var(--space-s);
	}

	product-info {
		display: block;
		padding: var(--space-s);
	}
</style>
