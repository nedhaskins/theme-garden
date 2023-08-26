<!--Used in subscribe modules-->
<script setup></script>

<template>
	<form class="email-submit">
		<input type="email" />

		<button type="submit">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9 18L15 12L9 6" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
	</form>
</template>

<style lang="scss" scoped>
	.email-submit {
		display: flex;
		flex-direction: row;
		margin-top: 1.25rem;

		input {
			flex: 1;
		}
	}

	.email-submit button {
		display: block;
		border: 0;
		border-radius: 0 0.375rem 0.375rem 0;
		background-color: black;
		padding: 0.625rem;

		svg path {
			stroke: white;
		}
	}
</style>
