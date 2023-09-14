<script setup>
	import SubscribeModule from '@/modules/SubscribeModule.vue';
</script>

<template>
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
</template>

<style lang="scss" scoped>
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
			margin-top: var(--space-l);
		}

		a {
			line-height: 1.21rem;
		}
	}
	.link-column {
		justify-self: center;

		p {
			margin-top: unset;
		}

		ul {
			li {
				margin-top: var(--space-2xs);
			}
		}
	}

	@media (min-width: 720px) {
		.links {
			width: 100%;
			flex-direction: row;
			justify-content: space-evenly;

			div + div {
				margin-top: unset;
			}
		}
	}
	@media (min-width: 900px) {
		.footer-top {
			flex-direction: row;
			gap: var(--space-xl);
			align-items: start;
		}

		.links {
			// flex: 3;
			justify-content: unset;
			gap: var(--space-xl);
		}
	}
</style>
