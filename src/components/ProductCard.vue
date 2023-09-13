<template>
	<li>
		<product-card data-id="">
			<picture class="product-picture">
				<img
					class="product-picture__img"
					width="300"
					height="300"
					src="@/assets/images/square-placeholder.svg"
					alt="Placeholder"
				/>
			</picture>
			<div class="product-name">
				<h4 class="product-name__copy">Product Name!</h4>
			</div>
			<div class="product-description">
				<p class="product-description__copy">
					Some text that describes what the product is. It could be long or short -- but there needs to be space
					for all of it.
				</p>
			</div>
			<div class="product-prices">
				<p class="product-prices__price">$47.99</p>
			</div>
		</product-card>
	</li>
</template>
<style lang="scss" scoped>
	product-card {
		display: block;
		border: 1px solid black;
	}
	.product-name {
		padding: 0.5rem 0.5rem 0;
	}
	.product-name__copy,
	.product-prices__price {
		font-weight: 700;
	}
	.product-description__copy {
		padding: 0.5rem 0.5rem 0;
	}

	.product-prices__price {
		padding: 0.5rem;
	}
</style>
