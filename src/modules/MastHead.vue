<!--this is going to be taken out-->

<script setup>
	import { RouterLink } from 'vue-router';
</script>
<template>
	<mast-head>
		<div class="left">
			<div class="svg-wrapper">
				<a class="svg home" href="#">
					<!--Insert an SVG here!-->
				</a>
			</div>

			<nav class="site-menu">
				<ul>
					<li>
						<RouterLink to="/">Home</RouterLink>
					</li>
					<li>
						<a href="#">Outer <wbr />Banks <wbr />Info</a>
					</li>
				</ul>
			</nav>
		</div>

		<nav class="user-menu">
			<ul>
				<li>
					<a class="button" href="#">Sign in</a>
				</li>
			</ul>
		</nav>
	</mast-head>
</template>

<style lang="scss" scoped>
	mast-head {
		display: flex;
		flex-direction: row;
		padding: 20px;
		justify-content: space-between;
		gap: 20px;

		.logo {
			max-width: 180px;
		}

		.logo * {
			fill: var(--tradewinds);
		}

		.left {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			gap: 20px;
		}

		nav ul {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			gap: 20px;
		}

		nav ul li {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	.user-menu {
		display: flex;
		flex-direction: column;
		align-self: end;

		ul li .button {
			margin: 0;
			min-width: 0px;
		}
	}

	.svg-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (max-width: 419px) {
		.user-menu {
			justify-content: flex-end;
		}
	}

	@media (min-width: 600px) {
		mast-head {
			display: flex;
			flex-direction: row;
			align-items: center;

			.left {
				flex-direction: row;
				flex: 1;
			}

			nav ul {
				flex-direction: row;

				li {
					line-height: 1.9;
				}
			}
		}

		.user-menu ul li .button {
			margin: 0;
			min-width: 120px;
		}
	}
</style>
