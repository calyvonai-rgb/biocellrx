import { useState, useEffect } from 'react'
import { getSiteMedia, urlFor } from '@/lib/sanity'

export function useSiteMedia() {
  const [media, setMedia] = useState<any>(null)

  useEffect(() => {
    getSiteMedia().then(setMedia).catch(() => {})
  }, [])

  function img(field: string, fallback: string): string {
    return media?.[field] ? urlFor(media[field]).width(1200).url() : fallback
  }

  function videoUrl(fallback: string): string {
    return media?.servicesVideoUrl ?? fallback
  }

  return { img, videoUrl }
}
