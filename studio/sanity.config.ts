import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'growthfactory',
  title: 'GrowthFactory CMS',
  
  projectId: process.env.SANITY_PROJECT_ID || '86exk9f3',
  dataset: process.env.SANITY_DATASET || 'production',
  
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Homepage singleton
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            
            // Orderable Team members
            orderableDocumentListDeskItem({
              type: 'teamMember',
              title: 'Team Members',
              S,
              context,
            }),
            
            // Orderable Process steps
            orderableDocumentListDeskItem({
              type: 'processStep',
              title: 'Process Steps',
              S,
              context,
            }),
            
            // Orderable Testimonials
            orderableDocumentListDeskItem({
              type: 'testimonial',
              title: 'Testimonials',
              S,
              context,
            }),
            
            // Blog posts (for future use)
            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),
            
            // Divider
            S.divider(),
            
            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['homepage', 'teamMember', 'processStep', 'testimonial', 'post'].includes(listItem.getId()!)
            ),
          ])
    }),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
})
