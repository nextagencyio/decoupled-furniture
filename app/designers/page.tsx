import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_DESIGNERS } from '@/lib/queries'
import { DesignersData } from '@/lib/types'
import Header from '../components/Header'
import DesignerCard from '../components/DesignerCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Designers | Atelier & Oak',
  description: 'Meet our talented furniture designers.',
}

async function getDesigners() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_DESIGNERS, { first: 50 })
    return data?.nodeDesigners?.nodes || []
  } catch (error) {
    console.error('Error fetching designers:', error)
    return []
  }
}

export default async function DesignersPage() {
  const items = await getDesigners()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Designers
            </h1>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Meet the artisans behind our collections.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Designers Yet</h2>
              <p className="text-gray-500">
                Designers will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <DesignerCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
