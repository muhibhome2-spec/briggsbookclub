import { useEffect, useState } from 'react';

// True once the element with `id` has scrolled up out of view, less `offset`
// pixels at the top (e.g. the height of a fixed navigation bar).
export function useScrolledPast(id: string, offset = 0) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: `-${offset}px 0px 0px 0px` }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [id, offset]);

  return past;
}
