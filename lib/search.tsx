import { TinyPodcast } from "../types"

export interface SearchResults {
  data: TinyPodcast[]
  total: number
}

/**
 * Searches every string (test, urls) with the supplied searchTerm.
 * Minimum searchTerm length is 2.
 *
 * @param tips
 * @param searchTerm
 * @returns SearchResults if anything was found and null if not
 */
export function search(tips: TinyPodcast[], searchTerm: string): SearchResults | null {
  if (searchTerm.length < 2) {
    return null
  }

  const results: TinyPodcast[] = []

  tips.forEach((podcast: TinyPodcast) => {
    if (compare(podcast.tips, searchTerm)) {
      results.push(podcast)
    }
  })

  const total: number = results.length

  return { data: results, total }
}

/**
 * Tells if the term can be found within the supplied text. Case insensitive.
 *
 * @param text
 * @param term
 * @returns boolean true or false
 */
function compare(text: string, term: string): boolean {
  return text.toLowerCase().includes(term.toLowerCase())
}
