import {WebpackConfiguration} from 'webpack-dev-server'
import {BuildWebpackArg} from "./types/types";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";

export const buildWebpack = (arg: BuildWebpackArg): WebpackConfiguration => {
    const { isDev,  paths} = arg

    return {
        mode: isDev ? "development" : 'production',
        entry: paths.entryFile,
        output: {path: paths.outputDirectory, clean: true, filename: '[name].[contenthash].js'},
        plugins: buildPlugins(arg),
        resolve: buildResolvers(arg),
        devtool: 'inline-source-map',
        module: {
            rules: buildLoaders(arg)
        },
        devServer: buildDevServer(arg)
    }
}