import puppeteer from 'puppeteer-core'
import HandleBars from 'handlebars'
import { readFileSync } from 'fs'

type handlebarContext = {
  count: number,
  image: string,
  episodeCount: number,
  name: string,
  genres: string
}
export const template = HandleBars.compile<handlebarContext>(readFileSync(__dirname + "/templates/index.html", {
  encoding: "utf-8"
}))

export const captureImage = async (html: string) => {
  const browser = await puppeteer.launch({
    executablePath: process.env.EXECUTABLE_PATH
  })
  const page = await browser.newPage()
  await page.setViewport({
    height: 1920,
    width: 1080
  })
  await page.setContent(html)
  let screenshot = await page.screenshot({
    type: "jpeg"
  })
  await browser.close()

  return screenshot
}

export const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
