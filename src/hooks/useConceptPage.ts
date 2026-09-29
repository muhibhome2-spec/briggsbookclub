import { useEffect } from 'react';

// Design concepts are private previews: load their fonts on demand and keep
// them out of search results.
export function useConceptPage(title: string, fontsHref: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);

    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = fontsHref;
    document.head.appendChild(fonts);

    return () => {
      document.title = prevTitle;
      robots.remove();
      fonts.remove();
    };
  }, [title, fontsHref]);
}
