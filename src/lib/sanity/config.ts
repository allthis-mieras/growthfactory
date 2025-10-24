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
  return builder.image(source)
}

// Helper function to get image URL with options
export function getImageUrl(source: any, options: any = {}) {
  return urlFor(source).width(options.width || 800).height(options.height || 600).url()
}

// Helper function to get responsive image srcset
export function getImageSrcSet(source: any, sizes: number[] = [400, 800, 1200, 1600]) {
  return sizes
    .map(size => `${urlFor(source).width(size).url()} ${size}w`)
    .join(', ')
}
