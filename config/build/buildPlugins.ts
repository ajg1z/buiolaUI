import {WebpackConfiguration} from "webpack-dev-server";
import {BuildWebpackArg} from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {DefinePlugin} from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from 'path'

export const buildPlugins = (arg: BuildWebpackArg): WebpackConfiguration['plugins'] => {
    const {isProd, paths, platform, isDev} = arg

    const plugins: WebpackConfiguration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.publicHtmlFile, favicon: paths.faviconFile}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    ];

    if (isDev) {
        plugins.push(
            new ForkTsCheckerWebpackPlugin(),
            new ReactRefreshWebpackPlugin()
        )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        )
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: paths.localesDirectory, to: path.resolve(paths.outputDirectory, 'locales'),
                    },
                ]
            })
        )
    }

    return plugins.filter(Boolean)
}