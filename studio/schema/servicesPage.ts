export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero – Headline',
      type: 'string',
    },
    {
      name: 'heroSubtext',
      title: 'Hero – Subtext',
      type: 'text',
    },
    {
      name: 'videoSectionHeading',
      title: 'Video Section – Heading',
      type: 'string',
    },
    {
      name: 'videoSectionSubtext',
      title: 'Video Section – Subtext',
      type: 'text',
    },
    {
      name: 'bioTherapies',
      title: 'Bio Therapy Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Product Name', type: 'string' },
            { name: 'badge', title: 'Badge (e.g. Premium)', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'details', title: 'Details (short specs)', type: 'string' },
            { name: 'price', title: 'Price (leave blank if not for sale)', type: 'string' },
            { name: 'paymentLink', title: 'Payment Link', type: 'url' },
          ],
        },
      ],
    },
    {
      name: 'personalizedServicesHeading',
      title: 'Personalized Services – Heading',
      type: 'string',
    },
    {
      name: 'personalizedServices',
      title: 'Personalized Services – Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
  ],
}
