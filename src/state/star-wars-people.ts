import { atom } from 'jotai'
import type { Person } from '../constants'

export const starWarsPeopleState = atom([] as Person[])
