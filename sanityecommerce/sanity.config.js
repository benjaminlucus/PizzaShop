import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

// ✅ make sure this matches your folder name
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "sanity_ecommerce",
  projectId: "b04lau42",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
