import { defineField, defineType } from "sanity";

export default defineType({
  name: "exhibition",
  title: "Gallery exhibition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug (click on Generate!)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 60,
      },
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle?",
      type: "string",
    }),
    defineField({
      name: "descritpion",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "poster",
      title: "Main image (poster) for Gallery page",
      type: "image",
      options: {
        hotspot: true,
      },
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
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "position",
              type: "string",
              title: "Position, plus padding and margins",
            },
            {
              name: "size",
              type: "string",
              title:
                "Height(h-) and width(w-) relative to screen height(vh) or screen width(vw)",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "videoLink",
      title: "Video Link URL",
      type: "string",
    }),
  ],
});
