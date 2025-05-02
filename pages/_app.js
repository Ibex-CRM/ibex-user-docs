import 'nextra-theme-docs/style.css'
import { useEffect } from 'react'

export default function Nextra({ Component, pageProps }) {
  useEffect(() => {
    function syncWithParentTheme() {
      try {
        const parentTheme = window.parent.document.documentElement.getAttribute('data-theme');
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(parentTheme);
      } catch (e) {
        console.warn('Unable to access parent theme:', e);
      }
    }

    try {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'data-theme') {
            syncWithParentTheme();
          }
        });
      });

      observer.observe(window.parent.document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });

      syncWithParentTheme();

      return () => observer.disconnect();
    } catch (e) {
      console.warn('Unable to observe parent theme changes:', e);
    }
  }, []);

  return <Component {...pageProps} />
}