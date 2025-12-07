// src/lib/actions/inView.ts
export function inView(node: HTMLElement, options: IntersectionObserverInit = {}) {
	const { threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				node.classList.add('is-visible');
				// si solo quieres animar una vez:
				observer.unobserve(node);
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
