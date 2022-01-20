import { writable } from "svelte/store";
import { getFromLocalStorage } from "./functions/localStorage";
export let movieList = writable(getFromLocalStorage());
