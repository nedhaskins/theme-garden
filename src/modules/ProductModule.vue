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
		background-color: #f9cfd5;
		padding: var(--space-xl);
	}
	.product-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: var(--space-l);
	}
</style>
