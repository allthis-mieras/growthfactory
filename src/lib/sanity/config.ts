import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity configuration
export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID || '86exk9f3',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
}

// Create Sanity client
export const sanityClient = createClient(sanityConfig)

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  if (!source) {
    console.warn('No image source provided')
    return null
  }
  
  // Check if it's a valid Sanity image (has _ref or asset)
  if (!source._ref && !source.asset) {
    console.warn('Invalid image source - missing _ref or asset:', source)
    return null
  }
  
  // Handle asset object structure - convert to _ref format
  if (source.asset && !source._ref) {
    source._ref = source.asset._id
  }
  
  return builder.image(source)
}

// Helper function to get image URL with options
export function getImageUrl(source: any, options: any = {}) {
  const imageBuilder = urlFor(source)
  if (!imageBuilder) return null
  return imageBuilder.width(options.width || 800).height(options.height || 600).url()
}

// Helper function to get responsive image srcset
export function getImageSrcSet(source: any, sizes: number[] = [400, 800, 1200, 1600]) {
  const imageBuilder = urlFor(source)
  if (!imageBuilder) return ''
  return sizes
    .map(size => `${imageBuilder.width(size).url()} ${size}w`)
    .join(', ')
}
