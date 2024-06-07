import { defineField, defineType } from "sanity";

export default defineType({
  name: "exhibition",
  title: "Gallery exhibition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title of exhibition",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Please click on Generate! (slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 60,
      },
    }),
    defineField({
      name: "subtitle",
      title: "Name of artist(s)",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Opening Date of Exhibition",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description text in English",
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
              title: "CODE FOR DEVELOPER: Position, plus padding and margins",
            },
            {
              name: "size",
              type: "string",
              title:
                "CODE FOR DEVELOPER: Height(h-) and width(w-) relative to screen height(vh) or screen width(vw)",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "videoLink",
      title: "Optional Video Link URL",
      type: "string",
    }),
  ],
});
