import React, { useEffect } from 'react'
import './app.css'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QueryKeys, type PeopleResponse } from '../constants'
import starWarsLogo from '/imgs/starWarsLogo.png'
import { starWarsPeopleState } from '../state'
import { useAtom } from 'jotai'

const fetchPeople = async ({
  pageParam = 1,
}: {
  pageParam?: number
}): Promise<PeopleResponse> => {
  const response = await fetch(
    `https://swapi.py4e.com/api/people/?page=${pageParam}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch people data')
  }
  return response.json()
}

const usePeopleInfinite = () => {
  return useInfiniteQuery<PeopleResponse, Error>({
    queryKey: [QueryKeys.STAR_WARS_PEOPLE_QUERY],
    queryFn: ({ pageParam }) =>
      fetchPeople({ pageParam: typeof pageParam === 'number' ? pageParam : 1 }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      // If there's a next page URL, extract the page number from it
      if (lastPage.next) {
        const url = new URL(lastPage.next)
        const page = url.searchParams.get('page')
        return page ? parseInt(page) : undefined
      }
      return undefined // No more pages
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  })
}

const App: React.FC = () => {
  const [starWarsPeople, setStarWarsPeople] = useAtom(starWarsPeopleState)
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = usePeopleInfinite()

  useEffect(() => {
    if (!isLoading && data) {
      const allPeople = data?.pages.flatMap(page => page.results) ?? []
      setStarWarsPeople(allPeople)
    }
  }, [isLoading, data, setStarWarsPeople])
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>

  // Flatten all pages' results into a single array
  const allPeople = data?.pages.flatMap(page => page.results) ?? []
  console.log('all people', allPeople)
  console.log('data', data)

  return (
    <div className="application-background">
      <div className="star-wars-title-wrapper">
        <div className="star-wars-logo">
          <img src={starWarsLogo} />
        </div>
        <div className="star-wars-title">CHARACTER DEPOT</div>
      </div>

      <div className="star-wars-people-data-wrapper">
        {starWarsPeople.map(person => (
          <div key={person.name} className="person-wrapper">
            <div className="person-name">{person.name}</div>

            <div className="person-stat-wrapper">
              <div className="person-stat">Born: {person.birth_year}</div>
              <div className="person-stat">Eye Color: {person.eye_color}</div>
              <div className="person-stat">Gender: {person.gender}</div>
            </div>
          </div>
        ))}
        {!hasNextPage? null : (
          <button
            className="load-more"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </button>
        )}
      </div>
         {!hasNextPage ? null : 
      <div className='keep-scrolling bounce'/>}
     
    </div>
  )
}

export default App
