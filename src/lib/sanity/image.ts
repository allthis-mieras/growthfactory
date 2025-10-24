import { urlFor, getImageUrl, getImageSrcSet } from './config'

// Re-export image utilities for convenience
export { urlFor, getImageUrl, getImageSrcSet }

// Helper function for Astro Image component
export function getSanityImageProps(source: any, options: any = {}) {
  if (!source) return null
  
  const { width = 800, height = 600, quality = 80 } = options
  
  return {
    src: getImageUrl(source, { width, height, quality }),
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
