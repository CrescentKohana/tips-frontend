/**
 * Parses tips from a Podcast.long_description. Removes every other h2 (##) extra header from the descrition after
 * splitting the tips header (## Jakson valinnat).
 *
 * @param description to parse
 * @returns recs as in tips
 */
export function parseTips(description: string): string {
  let tip = description.split(/##? \*?\*?Jakson valinnat\*?\*?/)[1]
  if (tip) {
    tip = tip.split("## ")[0]
  }

  return tip || ""
}
