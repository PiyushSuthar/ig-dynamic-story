# Instgram Dynamic Story

A weekend project to dynamically generate and post stories on instagram.

### Side Story
Actually I wanted to add Animes i watched to my Story highlights, so I ended up making this.

This fetches data from [Anilist's](https://anilist.co) API and generates images using `puppeteer-core`.

### Usage
You'll have to turn off `2FA` before proceeding, and prefer using it on your home network only.

Check [template directory](/src/templates) for `index.html`, which is the template for the image and it uses [Handlebars JS](https://handlebarsjs.com/).

Clone the repository.
```sh
git clone https://github.com/piyushsuthar/ig-dynamic-story.git
cd ig-dynamic-story
```

Install the packages.
```sh
yarn install # npm install
```

Create an `.env` file
```
# Instagram Username
IG_USERNAME=

# Instagram Password
IG_PASSWORD=

# Chrome Executable Path. (Current one is MS Edge)
EXECUTABLE_PATH=C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe

# Anilist Username
ANILIST_USERNAME=
```
Running the script.
```sh
yarn start # npm start
```

---
Made with ♥ and TypeScript.