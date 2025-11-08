import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      validation: Rule => Rule.required().min(4).max(4).error("Product must have exactly 4 images."),
      of: [{ type: "image" }],
      options: { hotspot: true },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
