import { GetServerSideProps } from "next"
import Head from "next/head"
import SearchPopup from "../components/SearchPopup"
import Tips from "../components/Tips"
import { getAPIURL } from "../lib/api"
import { parseTips } from "../lib/parser"
import styles from "../styles/Home.module.css"
import { Podcast, TinyPodcast } from "../types"

interface Props {
  data: TinyPodcast[]
}

export default function Home({ data }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tips</title>
        <meta name="description" content="Tips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://webbidevaus.fi">Tips</a>
        </h1>
        <p className="description">
          Tips from webbidevaus.fi. <a href="https://github.com/Luukuton/podcast-tips">GitHub Repository</a> of the
          site.
        </p>
        <p className="description">
          Search hotkey: <b>Q</b>
        </p>
        <SearchPopup data={data} />
        <Tips data={data} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(getAPIURL("/episodes.json"))
  const resData = ((await res.json()) as Podcast[]) || []
  const data: TinyPodcast[] = []

  resData.forEach((podcast) => {
    data.push({
      number: podcast.number,
      title: podcast.title,
      tips: parseTips(podcast.long_description),
    })
  })

  return {
    props: { data },
  }
}
