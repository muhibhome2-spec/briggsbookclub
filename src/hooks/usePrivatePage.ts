import { useEffect } from 'react';

// Internal pages (e.g. the design system reference): set a title and keep
// them out of search results.
export function usePrivatePage(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    return () => {
      document.title = prevTitle;
      robots.remove();
    };
  }, [title]);
}
