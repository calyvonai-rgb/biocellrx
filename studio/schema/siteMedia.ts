export default {
  name: 'siteMedia',
  title: 'Site Media',
  type: 'document',
  fields: [
    // ── SHARED ──────────────────────────────────────────
    {
      name: 'heroBackground',
      title: 'Hero Background (used on all pages)',
      type: 'image',
      options: { hotspot: true },
    },

    // ── ABOUT PAGE ──────────────────────────────────────
    {
      name: 'aboutMissionImage',
      title: 'About – Mission Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'aboutConditionsImage',
      title: 'About – Conditions Section Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'aboutHealingPotentialImage',
      title: 'About – Healing Potential Image',
      type: 'image',
      options: { hotspot: true },
    },

    // ── SERVICES PAGE ────────────────────────────────────
    {
      name: 'servicesVideoUrl',
      title: 'Services – Video URL (Vimeo embed link)',
      type: 'url',
    },
    {
      name: 'servicesVideoThumbnail',
      title: 'Services – Video Thumbnail',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'servicesMscImage',
      title: 'Services – MSC Exosomal Lysate Product Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'servicesCbscImage',
      title: 'Services – CBSC Cryo Product Image',
      type: 'image',
      options: { hotspot: true },
    },

    // ── RESOURCES PAGE ───────────────────────────────────
    {
      name: 'resourcesRegenerativeProcess',
      title: 'Resources – Regenerative Process Infographic',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesSafetyQuality',
      title: 'Resources – Safety & Quality Infographic',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesTreatmentTimeline',
      title: 'Resources – Treatment Timeline Infographic',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesCellularResearchLab',
      title: 'Resources – Cellular Research Lab',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesStemCellFacility',
      title: 'Resources – Stem Cell Facility',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesQualityControlLab',
      title: 'Resources – Quality Control Lab',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesCryogenicStorage',
      title: 'Resources – Cryogenic Storage',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesResearchImage1',
      title: 'Resources – Research Image 1',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesResearchImage2',
      title: 'Resources – Research Image 2',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesResearchImage3',
      title: 'Resources – Research Image 3',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesProcessGraph',
      title: 'Resources – Process Graph',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesResearchImage5',
      title: 'Resources – Research Image 5',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resourcesAdditionalKnowledge',
      title: 'Resources – Additional Knowledge Resource Image',
      type: 'image',
      options: { hotspot: true },
    },

    // ── CONTACT PAGE ─────────────────────────────────────
    {
      name: 'contactConsultationImage',
      title: 'Contact – Consultation Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
