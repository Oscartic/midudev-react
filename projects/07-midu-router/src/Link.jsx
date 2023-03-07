import { EVENTS } from './constants'

export function navigate(href) {
	window.history.pushState({}, '', href)
	// * Crear evento personalizado
	const navigationEvent = new Event(EVENTS.PUSHSTATE)
	window.dispatchEvent(navigationEvent)
}
