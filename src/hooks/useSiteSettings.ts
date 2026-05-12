import { useState, useEffect } from 'react'
import { getSiteSettings } from '@/lib/sanity'

export function useSiteSettings() {
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    getSiteSettings().then(setSettings).catch(() => {})
  }, [])

  return {
    phone: settings?.phone ?? '(858) 519-7305',
    email: settings?.email ?? 'info@biocellrx.com',
    footerDescription: settings?.footerDescription ?? 'Leading the future of Regenerative medicine with advanced Stem Cell therapies and premium wellness products. Transforming lives through Scientific innovation.',
    copyrightText: settings?.copyrightText ?? '© 2025 BioCellRx. All rights reserved. | Advanced Regenerative medicine solutions.',
    facebookUrl: settings?.facebookUrl ?? 'https://www.facebook.com/111531213660668',
    instagramUrl: settings?.instagramUrl ?? 'https://www.instagram.com/biocellrx?igshid=YmMyMTA2M2Y%3D',
    linkedinUrl: settings?.linkedinUrl ?? 'https://www.linkedin.com/in/eloisa-sultan/',
  }
}
