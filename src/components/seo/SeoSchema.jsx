import { useEffect } from 'react';

/**
 * Injects JSON-LD structured data into the page head for SEO.
 * Removes the script on unmount so each page controls its own schema.
 */
export default function SeoSchema({ id, data }) {
  useEffect(() => {
    if (!data) return;
    const scriptId = `seo-schema-${id}`;
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [id, data]);

  return null;
}

// Shared business info used across schemas
export const BUSINESS_INFO = {
  name: 'עו״ד נעמי בל גונן — משרד עורכי דין לדיני משפחה',
  alternateName: ['נעמי בל גונן', 'נעמי גונן', 'עורכת דין נעמי בל גונן', 'Naomi Bell Gonen'],
  description: 'עו״ד נעמי בל גונן — משרד עורכי דין באילת, מתמחה בדיני משפחה, גירושין, מזונות, אחריות הורית, חלוקת רכוש והסכמי ממון. ליווי אישי, רגיש ומקצועי.',
  telephone: '+972509762087',
  city: 'אילת',
  country: 'IL',
  url: 'https://bellgonenlaw.com',
  image: 'https://media.base44.com/images/public/6a007126836a528637f76d81/781d34657_image.png',
  priceRange: '₪₪',
  areaServed: ['אילת', 'דרום הארץ', 'ישראל'],
};