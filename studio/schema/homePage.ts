export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // ── HERO ─────────────────────────────────────────────
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
      name: 'heroStats',
      title: 'Hero – Stats (3 items)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 20+)', type: 'string' },
            { name: 'label', title: 'Label (e.g. Years of Research)', type: 'string' },
          ],
        },
      ],
    },

    // ── FEATURES (WHY CHOOSE) ─────────────────────────────
    {
      name: 'featuresHeading',
      title: 'Features – Heading',
      type: 'string',
    },
    {
      name: 'featuresSubtext',
      title: 'Features – Subtext',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features – Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'badge', title: 'Badge', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },

    // ── VITALITY / PRODUCTS SECTION ───────────────────────
    {
      name: 'vitalityHeading',
      title: 'Vitality Section – Heading',
      type: 'string',
    },
    {
      name: 'vitalitySubtext',
      title: 'Vitality Section – Subtext',
      type: 'text',
    },
    {
      name: 'vitalityBenefits',
      title: 'Vitality Section – Benefits List',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // ── TESTIMONIALS ──────────────────────────────────────
    {
      name: 'testimonialsHeading',
      title: 'Testimonials – Heading',
      type: 'string',
    },
    {
      name: 'testimonialsSubtext',
      title: 'Testimonials – Subtext',
      type: 'text',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text' },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'condition', title: 'Condition / Title', type: 'string' },
            { name: 'rating', title: 'Rating (1–5)', type: 'number' },
          ],
        },
      ],
    },

    // ── FAQ ───────────────────────────────────────────────
    {
      name: 'faqHeading',
      title: 'FAQ – Heading',
      type: 'string',
    },
    {
      name: 'faqSubtext',
      title: 'FAQ – Subtext',
      type: 'text',
    },
    {
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },
  ],
}
