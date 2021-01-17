import { renderShows } from './renderShows.js'
import {shows} from '../../shows.js'
import { filterShows } from './filter-shows.js'

renderShows(shows)

const input = document.querySelector('.search');

input.addEventListener('input', () => {
	renderShows(filterShows(shows, input.value))
})
