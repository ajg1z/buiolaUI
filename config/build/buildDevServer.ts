import {BuildWebpackArg} from "./types/types";
import {WebpackConfiguration} from "webpack-dev-server";

export const buildDevServer = (arg: BuildWebpackArg): WebpackConfiguration['devServer'] => {
    const {port} = arg

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}