import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamBlock',
  title: 'Team Block',
  type: 'object',
  icon: () => '👥',
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
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string'
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'title',
      members: 'members'
    },
    prepare(selection) {
      return {
        title: `Team: ${selection.title}`,
        subtitle: `${selection.members?.length || 0} members`
      }
    }
  }
})
