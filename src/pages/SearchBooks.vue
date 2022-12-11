<template>
	<div class="text-center">
		<h2>Open Library Search</h2>
		<div class="mx-auto w-full max-w-[540px]">
			<form @submit.prevent="searchBooksByTitle">
				<label for="book-title-search"> Book Title </label>
				<input
					v-model="bookTitle"
					type="text"
					name="book-title-search"
					placeholder="Enter title to search"
					class="px-3 py-2 m-1 rounded-10 border border-gray-300 w-1/2 text-md font-light focus:border-gray-700 outline-none" />

				<button
					type="submit"
					class="px-3 py-2 m-1 border rounded-10 border-blue-700 bg-blue-500 text-white pointer w-25">
					{{ loading ? 'Loading' : 'Submit' }}
				</button>
			</form>
			<div
				v-if="errorObj.flag === true"
				class="text-sm text-red-600 w-full p-2 mt-5 border-red-700 bg-red-50 rounded-2">
				{{ errorObj.message }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import { useBooksStore } from '@/store/books';

const bookTitle = ref('');
const router = useRouter();
const booksStore = useBooksStore();
const loading = ref(false);

const errorObj = reactive({
	flag: false,
	message: '',
	data: {}
});
/**
 * A function that is called when the user submits the form.
 * It makes an API call to the Open Library API to search for books by title.
 * If the API call is successful, it sets the search results in the store and redirects the user to the list-books page
 * If the API call fails, it sets the error flag to true and displays the error message to the user.
 */
const searchBooksByTitle = async () => {
	try {
		loading.value = true;
		errorObj.flag = false;

		if (!bookTitle.value) throw new Error('EMPTY_TITLE');

		const { data: searchResult } = await axios.get(
			'http://openlibrary.org/search.json',
			{
				params: {
					title: bookTitle.value
				}
			}
		);

		if (searchResult.docs.length === 0) throw new Error('NO_BOOKS_FOUND');

		booksStore.searchResults = searchResult.docs;
		booksStore.setTopTenOfSearchResults();

		router.push('/list-books');
	} catch (error) {
		errorObj.flag = true;
		errorObj.data = error;

		if (error.message === 'EMPTY_TITLE')
			errorObj.message = 'Please enter a book title to search';
		else if (error.message === 'NO_BOOKS_FOUND')
			errorObj.message = 'No books found. Please try again';
		else errorObj.message = 'Error occurred. Please try again';
	} finally {
		loading.value = false;
	}
};
</script>
