import { defineStore } from 'pinia';
import { orderBy, slice } from 'lodash';

export const useBooksStore = defineStore('books', {
	state: () => ({
		searchResults: [],
		topTenOfSearchResults: []
	}),
	actions: {
		/**
		 * It takes the search results, orders them by title, and then takes the first 10 results
		 */
		setTopTenOfSearchResults() {
			const sortedSearchResults = orderBy(
				this.searchResults,
				[book => book.title],
				['asc']
			);

			this.topTenOfSearchResults = slice(sortedSearchResults, 0, 10);
		}
	}
});
