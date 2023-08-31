<script setup>
	import ProductCard from '@/components/ProductCard.vue';
</script>

<template>
	<div class="products">
		<ul class="product-list">
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	.products {
		border: 3px solid red;
		padding: 0 5rem;
		margin: 5rem 0;
	}
	.product-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		// margin-top: 0.625rem;
	}
</style>
