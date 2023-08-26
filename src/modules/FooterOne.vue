<script setup>
	import SubscribeModule from '@/modules/SubscribeModule.vue';
</script>

<template>
	<footer class="footer one">
		<section class="footer-top">
			<section class="links">
				<div class="link-column">
					<p class="loud-voice">Product</p>
					<ul>
						<li><a href="#">Diam orci</a></li>
						<li><a href="#">Mi feugiat</a></li>
						<li><a href="#">Netus fermentum</a></li>
						<li><a href="#">Suspendisse vivera</a></li>
						<li><a href="#">Id dolor</a></li>
						<li><a href="#">Erat mattis</a></li>
					</ul>
				</div>

				<div class="link-column">
					<p class="loud-voice">Information</p>
					<ul>
						<li><a href="#">Diam orci</a></li>
						<li><a href="#">Mi feugiat</a></li>
						<li><a href="#">Netus</a></li>
					</ul>
				</div>

				<div class="link-column">
					<p class="loud-voice">Company</p>
					<ul>
						<li><a href="#">Diam orci</a></li>
						<li><a href="#">Mi feugiat</a></li>
						<li><a href="#">Netus fermentum</a></li>
						<li><a href="#">Suspendisse vivera</a></li>
					</ul>
				</div>
			</section>

			<SubscribeModule />
		</section>

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
		padding: 3.125rem 1.875rem;
	}

	.footer-top {
		// border: 3px solid yellow;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.links {
		// border: 3px solid orange;

		display: flex;
		flex-direction: column;

		div + div {
			margin-top: 1.875rem;
		}

		a {
			line-height: 1.21rem;
		}
	}

	@media (min-width: 720px) {
		footer.one {
			padding: 3.125rem;
		}

		.links {
			width: 100%;
			flex-direction: row;
			justify-content: space-evenly;

			div + div {
				margin-top: unset;
			}
		}
	}

	.link-column {
		justify-self: center;

		ul {
			margin-top: 1rem;

			li {
				margin-top: 0.625rem;
			}
		}
	}

	@media (min-width: 900px) {
		.footer-top {
			flex-direction: row;
			gap: 3.75rem;
			align-items: start;
		}

		.links {
			flex: 3;
			justify-content: unset;
			gap: 3.125rem;
		}

		.subscribe-module {
			flex: 2;
			margin-top: unset;
		}
	}

	.footer-bottom {
		// border: 3px solid yellow;
		margin-top: 3rem;

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
				gap: 0.6875rem;
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
		// width: 100%;
		// border: 3px solid red;
		svg {
			width: 100%;
		}
	}

	footer.bottom {
		background-color: red;
	}

	.icon-section {
		// border: 3px solid cyan;
		display: flex;
		flex-direction: column;
		align-items: center;

		a {
			// border: 3px solid pink;

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
