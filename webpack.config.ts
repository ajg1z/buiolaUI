import path from 'path';
import {WebpackConfiguration} from 'webpack-dev-server'
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildWebpackPaths, EnvVariables} from "./config/build/types/types";

export default (env: EnvVariables) => {
    const {port, mode} = env

    const isProd = mode === 'production';
    const isDev = !isProd;

    const paths: BuildWebpackPaths = {
        publicHtmlFile: path.resolve(__dirname, 'public', 'index.html'),
        outputDirectory: path.resolve(__dirname, 'build'),
        entryFile: path.resolve(__dirname, 'src', 'index.tsx'),
        srcDirectory: path.resolve(__dirname, 'src'),
        faviconFile: path.resolve(__dirname, 'src', 'assets', 'Alert24.svg'),
        localesDirectory: path.resolve(__dirname, 'public', 'locales')
    }

    const config: WebpackConfiguration = buildWebpack({
        isProd,
        isDev,
        port: port ?? 3000,
        paths,
        platform: env.platform ?? 'desktop'
    })

    return config
}