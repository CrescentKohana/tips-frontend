import { Card, CardContent, Typography } from "@material-ui/core"
import Link from "next/link"
import { FC } from "react"
import ReactMarkdown from "react-markdown"
import styles from "../styles/Popup.module.css"
import { TinyPodcast } from "../types"

/**
 * A linked search result.
 */
const SearchResult: FC<TinyPodcast> = (result, closePopup) => {
  return (
    <div id={`${result.number}`} key={`${result.number}`} className={styles.result}>
      <Link href={`/#${result.number}`}>
        <a onClick={closePopup}>
          <Card>
            <CardContent>
              <Typography variant="h6">{result.title}</Typography>
              <Typography variant="body2" component="p">
                <ReactMarkdown>{result.tips}</ReactMarkdown>
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </div>
  )
}

export default SearchResult
