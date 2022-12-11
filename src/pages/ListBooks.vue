<template>
	<div class="h-full">
		<h2 class="text-center">Open Library Books</h2>
		<div class="grid grid-cols-3 grid-gap-4">
			<div
				v-for="(book, index) in books"
				:key="index"
				class="border rounded-2 border-gray-300 shadow-lg bg-blue-100 p-3">
				<div class="text-gray-900 text-lg sans">{{ book.title }}</div>
				<div v-if="book.author_name" class="text-right text-gray-600 mt-2 font-italic">
					- {{ book.author_name.toString() }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
// eslint-disable-next-line import/no-unresolved
import { useBooksStore } from '@/store/books';

const booksStore = useBooksStore();
const books = computed(() => booksStore.topTenOfSearchResults);
</script>
