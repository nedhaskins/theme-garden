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
		border: 3px solid yellow;
		background-color: black;
		color: white;
		padding: 1rem 2rem;
	}

	.links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.footer-bottom {
		border: 3px solid yellow;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	logo-wrapper {
		display: block;
		padding: 1rem;
		background-color: red;
	}

	.svg-icon {
		display: block;
	}

	footer.bottom {
		background-color: red;
	}

	.icon-section {
		border: 3px solid cyan;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
