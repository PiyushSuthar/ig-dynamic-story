import axios from 'axios'
import { AnilistResponse } from './types/anilist.types'

let query = `query ($username: String){
  MediaListCollection(userName: $username type: ANIME){
    lists {
      name
      status
      entries {
        id
        startedAt {
          year
          month
          day
        }
        completedAt{
          year
          month
          day
        }
        
        createdAt
        progress
        media{
          
          coverImage{
            extraLarge
            large
            color
          }
          title {
            romaji
            english
            native
            userPreferred
          }
          episodes
          genres
        }
      }
    }
  }
}`

export const getAnilistData = async (username: string): Promise<AnilistResponse> => {
  const data = await axios.post("https://graphql.anilist.co", {
    query,
    variables: {
      username
    }
  }).then(res => res.data)

  return data
}