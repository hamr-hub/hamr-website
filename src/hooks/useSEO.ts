import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  jsonLd?: object
}

export function useSEO({ title, description, canonical, ogImage, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    if (ogImage) setMeta('og:image', ogImage, true)
    setMeta('twitter:title', title, true)
    setMeta('twitter:description', description, true)
    if (ogImage) setMeta('twitter:image', ogImage, true)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }

    if (jsonLd) {
      const id = 'json-ld-schema'
      let script = document.getElementById(id) as HTMLScriptElement
      if (!script) {
        script = document.createElement('script')
        script.id = id
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }

    return () => {
      const script = document.getElementById('json-ld-schema')
      if (script) script.remove()
    }
  }, [title, description, canonical, ogImage, jsonLd])
}
