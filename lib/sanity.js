import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: '6xxa87gy',     // Replace with your actual project ID
  dataset: 'production',            // or your dataset name
  apiVersion: '2023-07-14',         // use current or pinned version
  useCdn: true,                     // use CDN for public, non-auth content
})
