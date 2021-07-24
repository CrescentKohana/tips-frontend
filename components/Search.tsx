import { TextField } from "@material-ui/core"
import { FC, SyntheticEvent, useCallback, useState } from "react"
import { search, SearchResults } from "../lib/search"
import styles from "../styles/Popup.module.css"
import { TinyPodcast } from "../types"
import SearchResult from "./SearchResult"

interface SearchProps {
  data: TinyPodcast[]
  closePopup: (event: SyntheticEvent) => void
}

/**
 * Search bar and results.
 *
 * @param chapters
 * @param closePopup  when a search result is clicked, the popup is closed.
 */
const Search: FC<SearchProps> = ({ data, closePopup }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultResults: SearchResults = { data: [], total: 0 }
  const [results, setResults] = useState(defaultResults)
  const [query, setQuery] = useState("")
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState("Text or URLs can be searched.")

  const onChange = useCallback(
    (event) => {
      setQuery(event.target.value)
      const currentQuery: string = event.target.value

      if (currentQuery.length < 2) {
        setError(true)
        setHelperText("At least 2 characters.")
        setResults(defaultResults)
        return
      }

      setError(false)
      setHelperText("")

      const dataHelper = data == null ? [] : data
      const results = search(dataHelper, currentQuery)

      if (results != null && results.total > 0) {
        setResults(results)
        setHelperText(`Showing ${results.total} results.`)
      } else {
        setHelperText("No results.")
        setResults(defaultResults)
      }
    },
    [data, defaultResults]
  )

  return (
    <div className={styles.container}>
      <TextField
        id="search-box"
        label="Search"
        variant="filled"
        fullWidth={true}
        className={styles.textField}
        error={error}
        helperText={helperText}
        onChange={onChange}
        value={query}
      />
      {results.total > 0 && (
        <ul id="search-results" className={styles.results}>
          {results.data.map((result) => SearchResult(result, closePopup))}
        </ul>
      )}
    </div>
  )
}

export default Search
