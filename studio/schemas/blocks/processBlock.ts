import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'processBlock',
  title: 'Process Block',
  type: 'object',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'processStep' }]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
          { title: 'Timeline', value: 'timeline' }
        ]
      },
      initialValue: 'horizontal'
    })
  ],
  preview: {
    select: {
      title: 'title',
      steps: 'steps'
    },
    prepare(selection) {
      return {
        title: `Process: ${selection.title}`,
        subtitle: `${selection.steps?.length || 0} steps`
      }
    }
  }
})
