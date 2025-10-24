import { urlFor, getImageUrl, getImageSrcSet } from './config'

// Re-export image utilities for convenience
export { urlFor, getImageUrl, getImageSrcSet }

// Helper function for Astro Image component
export function getSanityImageProps(source: any, options: any = {}) {
  if (!source) {
    console.log('No image source provided to getSanityImageProps')
    return null
  }
  
  console.log('Image source data:', source)
  
  // Check if it's a valid Sanity image
  if (!source._ref && !source.asset) {
    console.warn('Invalid image source in getSanityImageProps:', source)
    return null
  }
  
  // Handle asset object structure
  if (source.asset && !source._ref) {
    source._ref = source.asset._id
  }
  
  const { width = 800, height = 600, quality = 80 } = options
  const imageUrl = getImageUrl(source, { width, height, quality })
  
  if (!imageUrl) {
    console.warn('Failed to generate image URL for source:', source)
    return null
  }
  
  console.log('Generated image URL:', imageUrl)
  console.log('Returning imageProps with URL:', imageUrl)
  
  return {
    src: imageUrl,
    alt: source.alt || '',
    width,
    height,
    loading: 'lazy' as const,
    decoding: 'async' as const
  }
}

// Helper function for responsive images
export function getSanityImageSrcSet(source: any, sizes: number[] = [400, 800, 1200, 1600]) {
  if (!source) return ''
  
  return getImageSrcSet(source, sizes)
}
