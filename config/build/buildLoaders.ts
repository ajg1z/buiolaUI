import {BuildWebpackArg} from "./types/types";
import {WebpackConfiguration} from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const buildLoaders = (arg: BuildWebpackArg): WebpackConfiguration['module']['rules'] => {
    const {isDev} = arg

    const svgLoader = {
        test: /\.svg$/i,
        use: [{
            loader: '@svgr/webpack', options: {
                icon: true, svgoConfig: {
                    plugins: [
                        {
                            name: "convertColors",
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }],
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const cssModulesLoader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : '[hash:base64:8]',
            }
        }
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssModulesLoader,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: isDev,
                },
            },
        ],
        exclude: /node_modules/,
    }


    return [assetsLoader, svgLoader, cssLoader, tsLoader]
}