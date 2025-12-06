<!-- src/lib/components/contact/ContactForm.svelte -->
<script lang="ts">
	export let buttonLabel = 'ENVIAR';

	let name = '';
	let email = '';
	let message = '';

	let touched = {
		name: false,
		email: false,
		message: false
	};

	const handleBlur = (field: keyof typeof touched) => {
		touched[field] = true;
	};

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();

		// Validación sencilla
		if (!name.trim() || !email.trim() || !message.trim()) {
			touched = { name: true, email: true, message: true };
			return;
		}

		// Aquí luego podrás integrar SvelteKit actions o un fetch a tu API
		console.log('Enviar formulario', { name, email, message });
		// reset
		name = '';
		email = '';
		message = '';
		touched = { name: false, email: false, message: false };
	};

	const hasError = (value: string, field: keyof typeof touched) => touched[field] && !value.trim();
</script>

<form class="contact-form" on:submit|preventDefault={handleSubmit}>
	<div class="contact-form__field">
		<label for="name">Name</label>
		<input
			id="name"
			name="name"
			type="text"
			bind:value={name}
			on:blur={() => handleBlur('name')}
			class:contact-form__input--error={hasError(name, 'name')}
			required
		/>
		{#if hasError(name, 'name')}
			<p class="contact-form__error">Introduce tu nombre.</p>
		{/if}
	</div>

	<div class="contact-form__field">
		<label for="email">Email</label>
		<input
			id="email"
			name="email"
			type="email"
			bind:value={email}
			on:blur={() => handleBlur('email')}
			class:contact-form__input--error={hasError(email, 'email')}
			required
		/>
		{#if hasError(email, 'email')}
			<p class="contact-form__error">Introduce un email válido.</p>
		{/if}
	</div>

	<div class="contact-form__field">
		<label for="message">Message</label>
		<textarea
			id="message"
			name="message"
			rows="4"
			bind:value={message}
			on:blur={() => handleBlur('message')}
			class:contact-form__input--error={hasError(message, 'message')}
			required
		/>
		{#if hasError(message, 'message')}
			<p class="contact-form__error">Escribe tu mensaje.</p>
		{/if}
	</div>

	<button type="submit" class="contact-form__button">
		{buttonLabel}
	</button>
</form>

<style>
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-form__field {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.contact-form label {
		font-size: 0.875rem;
		font-weight: 600;
	}

	.contact-form input,
	.contact-form textarea {
		background-color: transparent;
		border: 1px solid #555;
		padding: 0.75rem 0.9rem;
		font-size: 0.95rem;
		color: inherit;
	}

	.contact-form__input--error {
		border-color: #ff6b6b;
	}

	.contact-form__error {
		font-size: 0.75rem;
		color: #ffb3b3;
	}

	.contact-form__button {
		margin-top: 0.75rem;
		padding: 0.75rem 1.5rem;
		border: 1px solid #fff;
		background: transparent;
		font-weight: 600;
		letter-spacing: 0.06em;
	}
</style>
