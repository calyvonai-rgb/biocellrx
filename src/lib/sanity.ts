import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '16oneaei',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getFounder() {
  return client.fetch(`*[_type == "founder"][0] {
    name,
    title,
    bio,
    bioExtended,
    skills,
    photo
  }`)
}
