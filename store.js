import { writable } from "svelte/store";
import resolve from "./dep-resolution";

// let resolution = (subscribers) resolve();

export const resolution = writable();
