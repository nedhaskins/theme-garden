<script setup>
	import FooterTop from '@/components/FooterTop.vue';
</script>

<template>
	<footer class="footer one">
		<FooterTop />

		<section class="footer-bottom">
			<logo-wrapper><img src="@/assets/images/logo-placeholder.svg" /></logo-wrapper>

			<nav>
				<ul>
					<li><a href="#">Terms</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Cookies</a></li>
				</ul>
			</nav>

			<div class="icon-section">
				<a href="http://www.linkedin.com">
					<div class="svg-icon">
						<img src="@/assets/images/linkedin.svg" />
					</div>
				</a>

				<a href="http://www.facebook.com">
					<div class="svg-icon">
						<img src="@/assets/images/facebook.svg" />
					</div>
				</a>

				<a href="http://www.twitter.com">
					<div class="svg-icon">
						<img src="@/assets/images/twitter.svg" />
					</div>
				</a>
			</div>
		</section>
	</footer>
</template>

<style lang="scss" scoped>
	footer.one {
		// border: 3px solid lime;
		background-color: black;
		color: white;
		padding: var(--space-l);
	}

	@media (min-width: 720px) {
		footer.one {
			padding: 3.125rem;
		}
	}

	@media (min-width: 900px) {
		.subscribe-module {
			flex: 2;
			margin-top: unset;
		}
	}

	.footer-bottom {
		// border: 3px solid yellow;
		margin-top: var(--space-xl);

		display: grid;
		grid-template-columns: repeat(3, 1fr);

		nav {
			display: flex;
			flex-direction: row;
			justify-content: center;

			ul {
				display: flex;
				height: 100%;
				flex-direction: column;
				justify-content: center;
				gap: var(--space-xs);
			}

			a {
				text-align: center;
			}
		}
	}

	logo-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;

		svg {
			width: 100%;
		}
	}

	footer.bottom {
		background-color: red;
	}

	.icon-section {
		display: flex;
		flex-direction: column;
		align-items: center;

		a {
			width: 37px;
		}
	}

	@media (min-width: 460px) {
		.icon-section {
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
</style>
