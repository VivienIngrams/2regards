import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (click on Generate!)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 60,
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle?',
      type: 'string',
    }),
       defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'image',
              title: 'About image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            { name: "main", type: "boolean", title: "Main Image?" },
            { name: "position", type: "string", title: "Position" },
            { name: "size", type: "string", title: "Sizes and adjustments" },
          ],
        },
      ],
    }),
    defineField({
      name: 'videoLink',
      title: 'Video Link URL',
      type: 'string',
    }),
  ],
})
