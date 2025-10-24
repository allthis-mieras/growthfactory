import homepage from './homepage'
import teamMember from './teamMember'
import processStep from './processStep'
import post from './post'
import testimonial from './testimonial'
import { blockTypes } from './blocks'

export const schemaTypes = [
  homepage,
  teamMember,
  processStep,
  post,
  testimonial,
  ...blockTypes
]
