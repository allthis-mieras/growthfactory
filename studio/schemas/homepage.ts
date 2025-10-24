import { defineType, defineField } from 'sanity'
import { blockTypes } from './blocks'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    defineField({
      name: 'pageBlocks',
      title: 'Page Blocks',
      type: 'array',
      of: blockTypes.map(block => ({ type: block.name })),
      validation: Rule => Rule.required().min(1)
    })
  ],
  preview: {
    select: {
      blocks: 'pageBlocks'
    },
    prepare(selection) {
      const blockCount = selection.blocks?.length || 0
      return {
        title: 'Homepage',
        subtitle: `${blockCount} blocks`
      }
    }
  }
})
