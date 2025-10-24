import { defineType, defineField } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    orderRankField({ type: 'processStep' }),
    defineField({
      name: 'number',
      title: 'Step Number',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required()
        }
      ]
    })
  ],
  orderings: [
    orderRankOrdering,
    {
      title: 'Step Number',
      name: 'numberAsc',
      by: [
        { field: 'number', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'number',
      media: 'icon'
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `Step ${selection.subtitle}`
      }
    }
  }
})
