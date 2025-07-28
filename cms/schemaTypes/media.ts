import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  type: 'document',
  title: 'Media Assets',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'asset',
      type: 'file',
      title: 'Upload Image or Video',
      options: {
        accept: 'image/*,video/*',
      },
    }),
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag (e.g., hero-video, service-img-1)',
    }),
  ],
})
