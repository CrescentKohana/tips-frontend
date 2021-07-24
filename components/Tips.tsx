import Link from "next/link"
import { FC } from "react"
import ReactMarkdown from "react-markdown"
import styles from "../styles/Home.module.css"
import { TinyPodcast } from "../types"

interface TipsProps {
  data: TinyPodcast[]
}

/**
 * The main list of tips.
 */
const Tips: FC<TipsProps> = ({ data }) => {
  return (
    <div className="description">
      {data.map((podcast: TinyPodcast) => {
        return (
          <div key={podcast.number} id={`${podcast.number}`} className={styles.tips}>
            <h3>
              <Link href={`/#${podcast.number}`}>
                <a>#</a>
              </Link>
              {" " + podcast.title}
            </h3>
            <ul>
              <ReactMarkdown>{podcast.tips}</ReactMarkdown>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Tips
