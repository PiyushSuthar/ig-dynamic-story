import 'dotenv/config'
import { IgApiClient } from 'instagram-private-api'
import { getAnilistData } from './anilist.utils';
import { captureImage, template, wait } from './utils';

const ig = new IgApiClient()

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME!);
  await ig.account.login(process.env.IG_USERNAME!, process.env.IG_PASSWORD!);
}

(async () => {
  await login()
  console.log(`🤵 Signed in`)

  let data = await getAnilistData(process.env.ANILIST_USERNAME!)

  let entries = data.data.MediaListCollection.lists[0].entries

  // ForEach dosen't support Async/Await
  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index];

    let { genres, episodes, title, coverImage } = entry.media

    let html = template({
      count: index + 1,
      episodeCount: episodes!,
      genres: genres.join(", "),
      image: coverImage.extraLarge,
      name: title.english || title.romaji
    })

    let image = await captureImage(html)

    await ig.publish.story({
      file: image as Buffer
    })
    console.log(`Story ${index + 1} Published`)

    await wait(2000)
  }

})()