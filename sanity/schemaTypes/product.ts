import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
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
      title: "Optional Subtitle?",
      type: "string",
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
              title: "About image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            { name: "main", type: "boolean", title: "Main Image?" }, 
            {
              name: "layout",
              type: "string",
              title: "Layout if main image (for Products Home page)",
              options: {
                list: [
                  { title: "Slim", value: "w-[50vw] xs:w-[40vw] md:w-[11vw]" },
                  { title: "Portrait", value: "w-[60vw] xs:w-[45vw] md:w-[13vw]" },
                  { title: "Wider portrait", value: "w-[64vw] xs:[50vw] md:w-[15vw]" },
                  { title: "Square", value: "w-[70vw] xs:w-[55vw] md:w-[20vw]" },
                  { title: "Landscape", value: "w-[110vw] xs:w-[95vw] md:w-[22vw]" },
                  { title: "Panorama", value: "w-[130vw] xs:w-[120vw] md:w-[32vw]" },
                ],
                layout: "radio",
              },
            },
            { name: "position", type: "string", title: "CODE FOR DEVELOPER: Position, plus padding and margins" },
            { name: "size", type: "string", title: "CODE FOR DEVELOPER: Height(h-) and width(w-) relative to screen height(vh) or screen width(vw)" },
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
