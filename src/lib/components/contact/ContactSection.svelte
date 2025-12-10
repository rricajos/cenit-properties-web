<script lang="ts">
	import { Send } from 'svelte-lucide';

	export let id: string | undefined;

	type Touched = {
		nombre: boolean;
		telefono: boolean;
		email: boolean;
		servicio: boolean;
		mensaje: boolean;
	};

	let touched: Touched = {
		nombre: false,
		telefono: false,
		email: false,
		servicio: false,
		mensaje: false
	};

	const markTouched = (field: keyof Touched) => {
		touched = { ...touched, [field]: true };
	};

	const handleSubmit = (event: SubmitEvent) => {
		const formElement = event.currentTarget as HTMLFormElement;
		const fd = new FormData(formElement);

		const telefonoSinPrefijo = (fd.get('telefono') as string | null) ?? '';
		const telefono = telefonoSinPrefijo ? `+34 ${telefonoSinPrefijo.trim()}` : '';

		const formData = {
			nombre: fd.get('nombre'),
			telefono,
			email: fd.get('email'),
			servicio: fd.get('servicio'),
			mensaje: fd.get('mensaje')
		};

		console.log(formData);
		// En un caso real, aquí se enviaría la información al correo info@cenitproperties.com

		formElement.reset();
		touched = {
			nombre: false,
			telefono: false,
			email: false,
			servicio: false,
			mensaje: false
		};
	};
</script>

<section {id} class="section section--contact contact-section">
	<div class="contact-inner">
		<header class="contact-header">
			<h2 class="contact-title">Contacta con nosotros</h2>
			<p class="contact-subtitle">Estamos aquí para ayudarte con tu proyecto inmobiliario</p>
		</header>

		<div class="contact-card">
			<form class="contact-form" on:submit|preventDefault={handleSubmit}>
				<!-- Fila 1: Nombre / Teléfono -->
				<div class="form-row form-row-two-columns">
					<div class="form-field">
						<label for="nombre">Nombre</label>
						<input
							id="nombre"
							name="nombre"
							type="text"
							class="form-control"
							required
							class:user-touched={touched.nombre}
							on:blur={() => markTouched('nombre')}
						/>
					</div>

					<div class="form-field">
						<label for="telefono">Teléfono</label>
						<div class="phone-field">
							<span class="phone-prefix" aria-hidden="true"> +34 </span>
							<input
								id="telefono"
								name="telefono"
								type="tel"
								inputmode="tel"
								class="form-control phone-input"
								required
								pattern="[0-9]{9}"
								title="Introduce un teléfono español de 9 dígitos (solo números)"
								class:user-touched={touched.telefono}
								on:blur={() => markTouched('telefono')}
							/>
						</div>
					</div>
				</div>

				<!-- Fila 2: Email -->
				<div class="form-row">
					<div class="form-field">
						<label for="email">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							class="form-control"
							required
							pattern="^[^@]+@[^@]+\.[^@]+$"
							title="Introduce un email válido (ejemplo@dominio.com)"
							class:user-touched={touched.email}
							on:blur={() => markTouched('email')}
						/>
					</div>
				</div>

				<!-- Fila 3: Servicio de interés -->
				<div class="form-row">
					<div class="form-field">
						<label for="servicio">Servicio de interés</label>
						<select
							id="servicio"
							name="servicio"
							class="form-control"
							required
							class:user-touched={touched.servicio}
							on:blur={() => markTouched('servicio')}
						>
							<option value="">Selecciona un servicio</option>
							<option value="Compra-Venta">Compra-Venta</option>
							<option value="Home Staging">Home Staging</option>
							<option value="Interiorismo y Reforma">Interiorismo y Reforma</option>
							<option value="Asesoría Fiscal">Asesoría Fiscal</option>
							<option value="Servicio Integral">Servicio Integral</option>
						</select>
					</div>
				</div>

				<!-- Fila 4: Mensaje -->
				<div class="form-row">
					<div class="form-field">
						<label for="mensaje">Mensaje</label>
						<textarea
							id="mensaje"
							name="mensaje"
							class="form-control textarea-control"
							placeholder="Cuéntanos sobre tu proyecto..."
							maxlength="500"
							required
							class:user-touched={touched.mensaje}
							on:blur={() => markTouched('mensaje')}
						></textarea>
						<p class="helper-text">Máximo 500 caracteres</p>
					</div>
				</div>

				<!-- Fila 5: Botón -->
				<div class="form-row">
					<button type="submit" class="submit-button">
						<span>Enviar mensaje</span>
						<Send aria-hidden="true" class="submit-icon" />
					</button>
				</div>
			</form>

			<p class="contact-email-text">
				También puedes escribirnos a
				<a href="mailto:info@cenitproperties.com">info@cenitproperties.com</a>
			</p>
		</div>
	</div>
</section>

<style>
	/* ============================
     LAYOUT GENERAL
     ============================ */

	.contact-section {
		width: 100%;
		background-color: var(--color-bg); /* respeta tema claro/oscuro */
		display: flex;
		justify-content: center;
	}

	.contact-inner {
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3.25rem;
	}

	.contact-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.contact-title {
		margin: 0;
		font-size: clamp(1.6rem, 2.4vw, 2rem);
		font-weight: 600;
		color: var(--color-text);
	}

	.contact-subtitle {
		margin-top: 0.75rem;
		margin-bottom: 0;
		font-size: 0.98rem;
		color: var(--color-text-muted);
	}

	.contact-card {
		background-color: var(--color-card);
		border-radius: var(--radius-md);
		padding: 2.25rem 1.5rem;
		box-shadow: var(--shadow-soft);
		border: 1px solid var(--color-border-subtle);
	}

	/* ============================
     FORMULARIO
     ============================ */

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-row {
		width: 100%;
	}

	.form-row-two-columns {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.form-field {
		display: flex;
		flex-direction: column;
	}

	.form-field label {
		font-size: 0.93rem;
		font-weight: 500;
		margin-bottom: 0.4rem;
		color: var(--color-text);
	}

	.form-control {
		width: 100%;
		padding: 0.7rem 0.85rem;
		border-radius: 0.55rem;
		border: 1px solid var(--color-border-subtle);
		font-size: 0.95rem;
		font-family: inherit;
		color: var(--color-text);
		background-color: var(--color-surface, var(--color-card));
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease,
			background-color 0.15s ease,
			color 0.15s ease;
	}

	.textarea-control {
		min-height: 130px;
		resize: vertical;
	}

	.form-control::placeholder {
		color: #9ca3af;
	}

	/* Foco normal (sin estados dramáticos) */
	.form-control:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.08);
	}

	/* ============================
     TELÉFONO: PREFIJO +34
     ============================ */

	.phone-field {
		display: inline-flex;
		align-items: stretch;
		width: 100%;
	}

	.phone-prefix {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 0.75rem;
		font-size: 0.9rem;
		background-color: var(--accent-soft);
		border-radius: 0.55rem 0 0 0.55rem;
		border: 1px solid var(--color-border-subtle);
		border-right: none;
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	.phone-input {
		border-radius: 0 0.55rem 0.55rem 0;
		border-left: none;
	}

	.phone-input:focus {
		border-left: none;
	}

	/* ============================
     ESTADOS DE VALIDACIÓN SUTILES
     ============================ */

	/* Bien: solo borde ligeramente en verde cuando es válido y se ha tocado */
	.form-control.user-touched:valid {
		border-color: var(--color-success);
	}

	/* Mal: solo borde ligeramente en rojo cuando es inválido y se ha tocado */
	.form-control.user-touched:invalid {
		border-color: var(--color-danger);
	}

	.helper-text {
		margin-top: 0.4rem;
		font-size: 0.82rem;
		color: var(--color-text-muted);
		text-align: left;
	}

	/* ============================
     BOTÓN
     ============================ */

	.submit-button {
		width: 100%;
		border: none;
		border-radius: 0.6rem;
		padding: 0.9rem 1rem;
		background-color: var(--color-primary);
		color: var(--color-primary-contrast);
		font-size: 0.98rem;
		font-weight: 500;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		transition:
			background-color 0.18s ease,
			box-shadow 0.18s ease,
			transform 0.1s ease;
	}

	.submit-button:hover {
		background-color: #000000;
		box-shadow: 0 12px 22px rgba(0, 0, 0, 0.22);
		transform: translateY(-1px);
	}

	.submit-button:active {
		transform: translateY(0);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
	}

	.submit-button:focus-visible {
		outline: 2px solid #000000;
		outline-offset: 2px;
	}

	.submit-icon {
		width: 1.1rem;
		height: 1.1rem;
		flex-shrink: 0;
	}

	/* ============================
     TEXTO EMAIL EXTRA
     ============================ */

	.contact-email-text {
		margin-top: 1.5rem;
		margin-bottom: 0;
		text-align: center;
		font-size: 0.95rem;
		color: var(--color-text-muted);
	}

	.contact-email-text a {
		color: var(--color-text);
		font-weight: 500;
		text-decoration: none;
	}

	.contact-email-text a:hover {
		text-decoration: underline;
	}

	/* ============================
     RESPONSIVE
     ============================ */

	@media (max-width: 480px) {
		.contact-inner {
			padding-inline: 1rem;
			padding-top: 2rem;
			padding-bottom: 3rem;
		}

		.contact-card {
			padding: 2rem 1.25rem;
			border-radius: var(--radius-sm);
		}

		.contact-title {
			font-size: 1.45rem;
		}
	}

	@media (min-width: 640px) {
		.contact-inner {
			padding: 3rem 1.75rem 4rem;
		}

		.contact-card {
			padding: 2.5rem 2.25rem;
		}
	}

	@media (min-width: 768px) {
		.form-row-two-columns {
			grid-template-columns: repeat(2, minmax(0, 1fr)); /* 50% / 50% */
			gap: 1.25rem;
		}
	}

	@media (min-width: 1024px) {
		.contact-inner {
			padding-inline: 2rem;
		}
	}

	/* ============================
     AJUSTES EXTRA PARA DARK MODE
     (aprovechando tu paleta)
     ============================ */

	@media (prefers-color-scheme: dark) {
		.contact-section {
			background-color: var(--color-bg);
		}

		.contact-card {
			background-color: var(--color-card-muted); /* un poco más claro que el fondo */
			box-shadow: var(--shadow-elevated);
		}

		.form-control {
			background-color: var(--color-surface-elevated);
		}

		.phone-prefix {
			background-color: var(--color-surface-elevated);
			border-color: var(--color-border-subtle);
		}

		.submit-button:hover {
			background-color: var(--accent-strong);
		}

		.contact-email-text a {
			color: var(--accent-strong);
		}
	}
</style>
