<!-- src/lib/components/contact/ContactForm.svelte -->
<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	export let buttonLabel = 'ENVIAR';

	let name = '';
	let email = '';
	let message = '';

	type Touched = {
		name: boolean;
		email: boolean;
		message: boolean;
	};

	let touched: Touched = {
		name: false,
		email: false,
		message: false
	};

	const handleBlur = (field: keyof Touched) => {
		touched[field] = true;
	};

	const hasError = (value: string, field: keyof Touched) => touched[field] && !value.trim();

	const handleSubmit = () => {
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
</script>

<form class="contact-form" on:submit|preventDefault={handleSubmit}>
	<div class="contact-form__field">
		<label for="name">Nombre</label>
		<input
			id="name"
			name="name"
			type="text"
			bind:value={name}
			on:blur={() => handleBlur('name')}
			class:contact-form__input--error={hasError(name, 'name')}
			aria-invalid={hasError(name, 'name')}
			aria-describedby={hasError(name, 'name') ? 'name-error' : undefined}
			required
		/>
		{#if hasError(name, 'name')}
			<p id="name-error" class="contact-form__error">Introduce tu nombre.</p>
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
			aria-invalid={hasError(email, 'email')}
			aria-describedby={hasError(email, 'email') ? 'email-error' : undefined}
			required
		/>
		{#if hasError(email, 'email')}
			<p id="email-error" class="contact-form__error">Introduce un email válido.</p>
		{/if}
	</div>

	I
	<div class="contact-form__field">
		<label for="message">Mensaje</label>
		<textarea
			id="message"
			name="message"
			rows="4"
			bind:value={message}
			on:blur={() => handleBlur('message')}
			class:contact-form__input--error={hasError(message, 'message')}
			aria-invalid={hasError(message, 'message')}
			aria-describedby={hasError(message, 'message') ? 'message-error' : undefined}
			required
		/>
		{#if hasError(message, 'message')}
			<p id="message-error" class="contact-form__error">Escribe tu mensaje.</p>
		{/if}
	</div>

	<div class="contact-form__actions">
		<Button type="submit" variant="primary" size="md" fullWidth={true}>
			{buttonLabel}
		</Button>
	</div>
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
		color: var(--color-text);
	}

	.contact-form input,
	.contact-form textarea {
		background-color: var(--color-surface, var(--color-card));
		border: 1px solid var(--color-border-subtle, #555);
		border-radius: var(--radius-sm, 0.5rem);
		padding: 0.75rem 0.9rem;
		font-size: 0.95rem;
		color: var(--color-text);
		outline: none;
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease,
			background-color 0.15s ease;
	}

	.contact-form input::placeholder,
	.contact-form textarea::placeholder {
		color: var(--color-text-muted);
	}

	.contact-form input:focus,
	.contact-form textarea:focus {
		border-color: var(--color-primary);
		box-shadow: 0 0 0 1px var(--color-primary);
	}

	.contact-form__input--error {
		border-color: #ff6b6b;
	}

	.contact-form__error {
		font-size: 0.75rem;
		color: #ffb3b3;
		margin: 0;
	}

	.contact-form__actions {
		margin-top: 0.75rem;
	}
</style>
