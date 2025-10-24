import { defineType, defineField } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    orderRankField({ type: 'testimonial' }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Company or organization name'
    }),
    defineField({
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      description: 'Job title or position'
    }),
    defineField({
      name: 'image',
      title: 'Author Photo',
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
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating from 1 to 5 stars',
      validation: Rule => Rule.min(1).max(5).integer()
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as featured testimonial',
      initialValue: false
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Service', value: 'service' },
          { title: 'Results', value: 'results' },
          { title: 'Experience', value: 'experience' }
        ]
      },
      initialValue: 'general'
    })
  ],
  orderings: [
    orderRankOrdering,
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'orderRank', direction: 'asc' }
      ]
    },
    {
      title: 'Author Name',
      name: 'authorAsc',
      by: [
        { field: 'author', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'image',
      quote: 'quote'
    },
    prepare(selection) {
      const { title, subtitle, media, quote } = selection
      return {
        title: title,
        subtitle: subtitle ? `${subtitle} - ${quote?.substring(0, 50)}...` : quote?.substring(0, 50) + '...',
        media: media
      }
    }
  }
})
