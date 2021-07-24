export interface Podcast {
  number: number
  title: string
  duration: number
  audio_file: { url: string }
  published_at: string
  long_description: string
}

export interface TinyPodcast {
  number: number
  title: string
  tips: string
}
