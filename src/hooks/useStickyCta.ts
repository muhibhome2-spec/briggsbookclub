import { useEffect, useState } from 'react';

// True once the hero has scrolled away and the join section is not on screen,
// so a persistent mobile call to action never sits on top of the real form.
export function useStickyCta(heroId: string, joinId: string) {
  const [pastHero, setPastHero] = useState(false);
  const [atJoin, setAtJoin] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const join = document.getElementById(joinId);
    if (!hero || !join) return;

    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting));
    const joinObs = new IntersectionObserver(([e]) => setAtJoin(e.isIntersecting), {
      rootMargin: '0px 0px -30% 0px',
    });
    heroObs.observe(hero);
    joinObs.observe(join);
    return () => {
      heroObs.disconnect();
      joinObs.disconnect();
    };
  }, [heroId, joinId]);

  return pastHero && !atJoin;
}
