export default {
  name: 'aboutPage',
  title: 'About Page',
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
      name: 'missionHeading',
      title: 'Mission – Heading',
      type: 'string',
    },
    {
      name: 'missionText1',
      title: 'Mission – Paragraph 1',
      type: 'text',
    },
    {
      name: 'missionText2',
      title: 'Mission – Paragraph 2',
      type: 'text',
    },
    {
      name: 'stats',
      title: 'Stats (4 items)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number (e.g. 20+)', type: 'string' },
            { name: 'label', title: 'Label (e.g. Years of Research)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'conditionsHeading',
      title: 'Conditions Section – Heading',
      type: 'string',
    },
    {
      name: 'conditionsSubtext',
      title: 'Conditions Section – Subtext',
      type: 'text',
    },
    {
      name: 'conditions',
      title: 'Conditions – List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Condition Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'ctaHeading',
      title: 'CTA – Heading',
      type: 'string',
    },
    {
      name: 'ctaSubtext',
      title: 'CTA – Subtext',
      type: 'text',
    },
  ],
}
