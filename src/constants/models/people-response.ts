import { type Person } from '.'
export interface PeopleResponse {
  count: number
  next: string | null
  previous: string | null
  results: Person[]
}
