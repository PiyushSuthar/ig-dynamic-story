declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IG_USERNAME: string
      IG_PASSWORD: string
      EXECUTABLE_PATH: string
      ANILIST_USERNAME: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }