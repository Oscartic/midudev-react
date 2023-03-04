import { createContext, useState } from 'react'

// this is the context we should consume (only create it once - Singleton)
export const FiltersContext = createContext()

// this is the provider we should wrap our app
export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 100
	})
	return (
		<FiltersContext.Provider value={{
			filters,
			setFilters
		}}
		>
			{children}
		</FiltersContext.Provider>
	)
}
