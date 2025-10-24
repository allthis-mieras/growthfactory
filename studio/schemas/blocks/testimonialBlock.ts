import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Block',
  type: 'object',
  icon: () => '💬',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for the testimonial section'
    }),
    defineField({
      name: 'testimonials',
      title: 'Select Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'testimonial' }
        }
      ],
      description: 'Select testimonials to randomly display from. Leave empty to show all testimonials.',
      validation: Rule => Rule.max(10)
    }),
    defineField({
      name: 'displayMode',
      title: 'Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Random Single', value: 'random' },
          { title: 'All Selected', value: 'all' },
          { title: 'Featured Only', value: 'featured' }
        ]
      },
      initialValue: 'random',
      description: 'How to display the selected testimonials'
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Single Column', value: 'single' },
          { title: 'Two Columns', value: 'two-column' },
          { title: 'Carousel', value: 'carousel' }
        ]
      },
      initialValue: 'single',
      description: 'Layout for displaying testimonials'
    }),
    defineField({
      name: 'showRating',
      title: 'Show Rating',
      type: 'boolean',
      initialValue: true,
      description: 'Display star ratings if available'
    }),
    defineField({
      name: 'showImage',
      title: 'Show Author Photos',
      type: 'boolean',
      initialValue: true,
      description: 'Display author photos if available'
    })
  ],
  preview: {
    select: {
      title: 'title',
      displayMode: 'displayMode',
      testimonialCount: 'testimonials.length'
    },
    prepare(selection) {
      const { title, displayMode, testimonialCount } = selection
      const modeText = displayMode === 'random' ? 'Random' : 
                      displayMode === 'all' ? 'All' : 'Featured'
      const countText = testimonialCount ? ` (${testimonialCount} selected)` : ' (all)'
      
      return {
        title: title || 'Testimonial Block',
        subtitle: `${modeText}${countText}`
      }
    }
  }
})