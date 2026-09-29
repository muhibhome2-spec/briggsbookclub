import { createContext, useContext } from 'react';
import type { Tone } from './primitives';

// Lets headers and text inside a Section pick light or dark styling on their own.
export const SectionToneContext = createContext<Tone>('light');

export function useSectionTone() {
  return useContext(SectionToneContext);
}
