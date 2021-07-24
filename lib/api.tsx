/**
 * Returns the API URL for rules with specified path.
 *
 * @param path
 * @returns API URL as string
 */
export function getAPIURL(path = ""): string {
  const url = process.env.PODCAST_API_URL
  return `${url}${path}`
}
