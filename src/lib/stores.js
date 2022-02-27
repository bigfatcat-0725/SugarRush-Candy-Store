import { writable } from 'svelte/store'
import supabase from '$lib/db'

export const user = writable(supabase.auth.user())
export const email = writable([])
export const password = writable([])
export const confirmPassword = writable([])
