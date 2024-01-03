import {WebpackConfiguration} from "webpack-dev-server";
import {BuildWebpackArg} from "./types/types";

export const buildResolvers = (arg: BuildWebpackArg): WebpackConfiguration['resolve'] => {
    const {paths} = arg

    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": paths.srcDirectory
        }
    }
}