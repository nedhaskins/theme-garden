<template>
	<div class="button-wrapper">
		<div class="get-free-quotes">
			<p>Get free quotes</p>

			<button type="submit">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9 18L15 12L9 6"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.button-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 48px;
		gap: 32px;
	}

	@media (min-width: 720px) {
		.button-wrapper {
			flex-direction: row;
			justify-content: center;
		}
	}

	.get-free-quotes {
		width: 204px;
		height: 44px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		padding: 12.5px 22px;
	}

	.get-free-quotes,
	.get-free-quotes button {
		background-color: green;
	}

	.get-free-quotes {
		color: white;
	}

	.get-free-quotes p {
		font-size: 16px;
		line-height: 19.36px;
		letter-spacing: 0.46px;
		text-align: center;
	}

	.get-free-quotes button {
		border: 0;
		padding: 0;
	}

	.get-free-quotes svg path {
		stroke: white;
	}
</style>
