import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'listBlock',
  title: 'List Block',
  type: 'object',
  icon: () => '📋',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'variant',
      title: 'Block Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Recognition (Problems)', value: 'recognition' },
          { title: 'Features (What You Get)', value: 'features' },
          { title: 'Benefits (Why It Works)', value: 'benefits' }
        ]
      },
      initialValue: 'features',
      description: 'Used for styling and semantic meaning'
    }),
    defineField({
      name: 'description',
      title: 'Description Text',
      type: 'text',
      rows: 3,
      description: 'Optional explanatory text (e.g., solution text for recognition blocks)'
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'List', value: 'list' },
          { title: 'Grid', value: 'grid' },
          { title: 'Cards', value: 'cards' }
        ]
      },
      initialValue: 'grid'
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Optional call-to-action button text'
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Link for the CTA button'
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      ],
      description: 'Optional image to display alongside content'
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' }
        ]
      },
      initialValue: 'right',
      description: 'Position of image relative to content (mobile always shows image first)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      variant: 'variant',
      items: 'items'
    },
    prepare(selection) {
      const { title, variant, items } = selection
      const variantLabels = {
        recognition: 'Recognition',
        features: 'Features', 
        benefits: 'Benefits'
      }
      return {
        title: `${variantLabels[variant] || 'List'}: ${title}`,
        subtitle: `${items?.length || 0} items`
      }
    }
  }
})
