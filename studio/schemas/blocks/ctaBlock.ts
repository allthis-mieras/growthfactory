import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  icon: () => '🚀',
  fields: [
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
      rows: 3
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string'
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string'
    }),
    defineField({
      name: 'backgroundStyle',
      title: 'Background Style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Image', value: 'image' }
        ]
      },
      initialValue: 'default'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ],
      hidden: ({ parent }) => parent?.backgroundStyle !== 'image'
    })
  ],
  preview: {
    select: {
      title: 'title',
      primaryCtaText: 'primaryCtaText'
    },
    prepare(selection) {
      return {
        title: `CTA: ${selection.title}`,
        subtitle: selection.primaryCtaText
      }
    }
  }
})
