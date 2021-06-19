export interface AnilistResponse {
  data: Data
}

export interface Data {
  MediaListCollection: MediaListCollection
}

export interface MediaListCollection {
  lists: List[]
}

export interface List {
  name: string
  status: string
  entries: Entry[]
}

export interface Entry {
  id: number
  startedAt: StartedAt
  completedAt: CompletedAt
  createdAt: number
  progress: number
  media: Media
}

export interface StartedAt {
  year?: number
  month?: number
  day?: number
}

export interface CompletedAt {
  year?: number
  month?: number
  day?: number
}

export interface Media {
  coverImage: CoverImage
  title: Title
  episodes?: number
  genres: string[]
}

export interface CoverImage {
  extraLarge: string
  large: string
  color?: string
}

export interface Title {
  romaji: string
  english?: string
  native: string
  userPreferred: string
}
