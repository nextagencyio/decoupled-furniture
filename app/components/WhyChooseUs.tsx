'use client'

import { Home, Palette, Ruler, Truck, Star, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Home,
    title: 'Artisan Crafted',
    description: 'Every piece is handcrafted by skilled artisans using time-honored joinery techniques.',
  },
  {
    icon: Palette,
    title: 'Custom Finishes',
    description: 'Choose from our curated palette of stains, paints, and natural finishes for a perfect match.',
  },
  {
    icon: Ruler,
    title: 'Made to Measure',
    description: 'Bespoke sizing ensures your furniture fits your space and lifestyle perfectly.',
  },
  {
    icon: Truck,
    title: 'White Glove Delivery',
    description: 'Professional delivery and placement included with every order, nationwide.',
  },
  {
    icon: Star,
    title: 'Heirloom Quality',
    description: 'Built to last generations with sustainably sourced hardwoods and premium materials.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Our commitment to quality is backed by a comprehensive lifetime structural warranty.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Atelier &amp; Oak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern design to create furniture that endures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
