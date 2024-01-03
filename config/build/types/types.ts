export interface BuildWebpackArg {
    isDev: boolean
    isProd: boolean
    port: number
    paths: BuildWebpackPaths
    platform: BuildPlatform
}

export interface BuildWebpackPaths {
    entryFile: string
    outputDirectory: string
    publicHtmlFile: string
    srcDirectory: string
    faviconFile: string
    localesDirectory: string
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface EnvVariables {
    mode: BuildMode
    port?: number
    platform?: BuildPlatform
}
