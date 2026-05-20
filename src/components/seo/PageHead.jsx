import { useEffect } from 'react';

/**
 * Sets document title, meta description and canonical URL for the current page.
 * Per platform constraints we do not edit index.html — meta tags are managed at runtime.
 */
export default function PageHead({ title, description, canonicalPath }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }

    if (canonicalPath) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `https://bellgonenlaw.com${canonicalPath}`);
    }
  }, [title, description, canonicalPath]);

  return null;
}