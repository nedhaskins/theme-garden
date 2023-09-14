<script setup>
	import EmailSubmitOne from '@/components/forms/EmailSubmitOne.vue';
</script>

<template>
	<div class="subscribe-module">
		<p class="loud-voice">Subscribe</p>

		<EmailSubmitOne />

		<p class="text">
			Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam
			bibendum. Metus et lectus id viverra fringilla magna morbi.
		</p>
	</div>
</template>

<style lang="scss" scoped>
	/*Less breathable components here, as it's more of a "set-in-stone" things with measurements */

	.subscribe-module {
		background-color: green;
		padding: 1.875rem;
		margin-top: var(--space-l);

		.loud-voice {
			margin-top: unset;
		}

		.text {
			font-size: 0.75rem;
			line-height: 1.275rem;
			text-align: left;
			vertical-align: top;
			opacity: 70%;
			margin-top: 1.125rem;
		}
	}

	@media (min-width: 900px) {
		.subscribe-module {
			margin-top: unset;
		}
	}
</style>
