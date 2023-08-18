<script setup>
	import EmailSubmitOne from '@/components/forms/EmailSubmitOne.vue';
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

			<!--rendering one of the component options for email submit forms-->
			<EmailSubmitOne />
		</section>

		<section class="footer-bottom">
			<logo><img src="./assets/images-logo-placeholder.svg" /></logo>

			<nav>
				<ul>
					<li><a href="#">Terms</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Cookies</a></li>
				</ul>
			</nav>

			<div class="icon-section">
				<a href="http://www.linkedin.com">
					<div class="svg-wrapper">
						<img src="./assets/images/linkedin.svg" />
					</div>
				</a>

				<a href="http://www.facebook.com">
					<img src="./assets/images/facebook.svg" />
				</a>

				<a href="http://www.twitter.com">
					<div class="svg-wrapper">
						<img src="./assets/images/twitter.svg" />
					</div>
				</a>
			</div>
		</section>
	</footer>
</template>

<style></style>
