import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ROOM_INSPIRATIONS } from '@/lib/queries'
import { RoomInspirationsData } from '@/lib/types'
import Header from '../components/Header'
import RoomInspirationCard from '../components/RoomInspirationCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Inspiration | Atelier & Oak',
  description: 'Browse our room inspiration gallery.',
}

async function getRoomInspirations() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<RoomInspirationsData>({
      query: GET_ROOM_INSPIRATIONS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeRoomInspirations?.nodes || []
  } catch (error) {
    console.error('Error fetching room inspirations:', error)
    return []
  }
}

export default async function RoomInspirationsPage() {
  const items = await getRoomInspirations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Room Inspirations
            </h1>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Discover beautifully styled rooms featuring our furniture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Room Inspirations Yet</h2>
              <p className="text-gray-500">
                Room Inspirations will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <RoomInspirationCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
